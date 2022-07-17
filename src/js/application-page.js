import Swiper from 'swiper/swiper-bundle';
const header = document.querySelector('header');

let start = {x:0, y:0};

const animateCSS = (element, animation, prefix = 'animate__') =>
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);
        node.classList.remove('invisible');
        node.classList.add(`${prefix}animated`, animationName);

        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }
        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });

const applicationPageSwiper = new Swiper('.application-page.swiper-container', {
    direction: 'vertical',
    effect: 'slide',
    releaseOnEdges: true,
    longSwipes: false,
    resistanceRatio: 0,
    touchSensitivity: 1,
    mousewheel: {
        sensitivity: 1,
    },
    freeMode: false,
    allowSlidePrev: false,
    allowSlideNext: false,
    followFinger:false,
    slidesPerView: 'auto',
    loop: false,
    speed: 1000,
    observer: true,
    on: {
        touchStart: function (){
            // start.x = event.touches[0].pageX;
            // start.y = event.touches[0].pageY;
        },

        touchMove: function (){
            // let y = start.y - event.touches[0].pageY;
            // if (y < 0) {
            //     setTimeout(function () {
            //         header.classList.remove('hidden');
            //     }, 10);
            // } else if (y > 0) {
            //     setTimeout(function () {
            //         header.classList.add('hidden');
            //     }, 50);
            // }
        },
        init: function () {
            animateCSS('.application-intro__image-area', 'fadeInUp').then((message) => {});
            animateCSS('.application-intro__text-area', 'fadeInUp').then((message) => {
                applicationPageSwiper.allowSlidePrev = true;
                applicationPageSwiper.allowSlideNext = true;
            });
        },
        slideChange: function () {
            // if (event.deltaY < 0) {
            //     setTimeout(function () {
            //         header.classList.remove('hidden');
            //     }, 10);
            // } else if (event.deltaY > 0) {
            //     setTimeout(function () {
            //         header.classList.add('hidden');
            //     }, 50);
            // }
        },
        slideChangeTransitionStart: function () {
            if (applicationPageSwiper.activeIndex == 0) {
                animateCSS('.application-intro__image-area', 'fadeInUp').then((message) => {});
                animateCSS('.application-intro__text-area', 'fadeInUp').then((message) => {
                    applicationPageSwiper.allowSlidePrev = true;
                    applicationPageSwiper.allowSlideNext = true;
                });
            }

            if (applicationPageSwiper.activeIndex == 1) {
                applicationPageSwiper.allowSlidePrev = false;
                applicationPageSwiper.allowSlideNext = false;
                animateCSS('.application-metrics__metrics', 'fadeInUp').then((message) => {});
                animateCSS('.application-metrics__circle1', 'fadeInUp').then((message) => {});
                animateCSS('.application-metrics__circle2', 'fadeInUp').then((message) => {
                    applicationPageSwiper.allowSlidePrev = true;
                    applicationPageSwiper.allowSlideNext = true;
                });
            }

            if (applicationPageSwiper.activeIndex == 2) {
                applicationPageSwiper.allowSlidePrev = false;
                applicationPageSwiper.allowSlideNext = false;
                animateCSS('.application-metrics__metrics', 'fadeOutUp').then((message) => {});
                animateCSS('.application-metrics__circle1', 'fadeOutUp').then((message) => {});
                animateCSS('.application-metrics__circle2', 'fadeOutUp').then((message) => {});
                animateCSS('.screen-feedbacks__reps', 'fadeInUp').then();
                animateCSS('.screen-feedbacks__stats', 'fadeInUp').then((message) => {});
                animateCSS('.workout-friends__text-area', 'fadeOutUp').then((message) => {
                    document.querySelector('.workout-friends__text-area').classList.add('invisible');
                    applicationPageSwiper.allowSlidePrev = true;
                    applicationPageSwiper.allowSlideNext = true;
                    workoutFriendsSlider.allowSlideNext = false;
                });
            }
            if (applicationPageSwiper.activeIndex == 3) {
                applicationPageSwiper.allowSlideNext = false;
                workoutFriendsSlider.allowSlidePrev = false;
                animateCSS('.screen-feedbacks__reps', 'fadeOutUp').then((message) => {
                    document.querySelector('.screen-feedbacks__reps').classList.add('invisible');
                });
                animateCSS('.screen-feedbacks__stats', 'fadeOutUp').then((message) => {
                    document.querySelector('.screen-feedbacks__stats').classList.add('invisible');
                });
                animateCSS('.workout-friends__text-area', 'fadeInUp').then((message) => {
                    workoutFriendsSlider.update();
                    if (workoutFriendsSlider.activeIndex == 1){
                        applicationPageSwiper.allowSlideNext = true;
                    }
                    workoutFriendsSlider.allowSlidePrev = true;
                    workoutFriendsSlider.allowSlideNext = true;
                });
            }
            if (applicationPageSwiper.activeIndex == 4) {
                applicationPageSwiper.allowSlidePrev = false;
                applicationPageSwiper.allowSlideNext = false;
                animateCSS('.workout-friends__text-area', 'fadeOutUp').then((message) => {
                    document.querySelector('.workout-friends__text-area').classList.add('invisible');
                    applicationPageSwiper.allowSlidePrev = true;
                    applicationPageSwiper.allowSlideNext = true;
                });
            }
            if (applicationPageSwiper.activeIndex == 5) {
                applicationPageSwiper.allowSlidePrev = false;
                applicationPageSwiper.allowSlideNext = false;
            }
            if (applicationPageSwiper.activeIndex == 6) {
                applicationPageSwiper.allowSlidePrev = false;
                applicationPageSwiper.allowSlideNext = false;
            }
        },



        slideChangeTransitionEnd: function () {
            if (applicationPageSwiper.activeIndex == 5) {
                applicationPageSwiper.allowSlidePrev = true;
                applicationPageSwiper.allowSlideNext = true;
            }
            if (applicationPageSwiper.activeIndex == 6) {
                applicationPageSwiper.allowSlidePrev = true;
                applicationPageSwiper.allowSlideNext = true;
            }
        },
    },
});

const workoutFriendsSlider = new Swiper('.workout-friends__slider.swiper-container', {
    direction: 'vertical',
    effect: 'slide',
    releaseOnEdges: true,
    longSwipes: false,
    resistanceRatio: 0,
    touchSensitivity: 1,
    followFinger: false,
    mousewheel: {
        sensitivity: 1,
    },
    freeMode: false,
    allowSlidePrev: false,
    allowSlideNext: false,
    slidesPerView: 1,
    loop: false,
    speed: 1000,
    observer: true,
    on: {
        slideChangeTransitionStart: function () {
            applicationPageSwiper.allowSlidePrev= false;
            applicationPageSwiper.allowSlideNext = false;
            workoutFriendsSlider.allowSlidePrev = false;
            workoutFriendsSlider.allowSlideNext = false;
            if (workoutFriendsSlider.activeIndex == 0) {
                removeIphoneClasses(1);
            }
            if (workoutFriendsSlider.activeIndex == 1) {
                removeIphoneClasses(2);
            }
        },
        slideChangeTransitionEnd: function () {
            if (workoutFriendsSlider.activeIndex == 0) {
                removeIphoneClasses(1);
                applicationPageSwiper.allowSlidePrev = true;
                workoutFriendsSlider.allowSlideNext = true;
            }
            if (workoutFriendsSlider.activeIndex == 1) {
                removeIphoneClasses(2);
                applicationPageSwiper.allowSlideNext = true;
                workoutFriendsSlider.allowSlidePrev = true;
            }
        },

    },
});

const removeIphoneClasses = (screen) => {
    const iphone = document.querySelector('.iphone')
    if (screen == 1) {
        iphone.classList.remove('iphone__screens--screen-2');
    }
    if (screen == 2) {
        iphone.classList.remove('iphone__screens--screen-3');
        iphone.classList.add('iphone__screens--screen-2');
    }
}