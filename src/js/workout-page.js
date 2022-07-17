import Swiper from 'swiper/swiper-bundle';

const header = document.querySelector('header');

let start = {x:0, y:0};

const video1 = document.querySelector('.video1');
const video2 = document.querySelector('.video2');

const video1Play = () =>{
    video2?.pause();
    setTimeout(function () {
        video2.currentTime = 0;
        video1?.play();
    }, 1000);
}

const video2Play = () =>{
    video1?.pause();
    setTimeout(function () {
        video1.currentTime = 0;
        video2?.play();
    }, 1000);
}

const removeIphoneClasses = (screen) => {
    const iphone = document.querySelector('.iphone');
    if (screen == 1) {
        video1Play();
        iphone.classList.remove('iphone__screens--screen-2');
    }
    if (screen == 2) {
        video2Play();
        iphone.classList.add('iphone__screens--screen-2');
    }
}

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

const workoutPageSwiper = new Swiper('.workout-page.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    effect: 'slide',
    touchSensitivity: 1,
    releaseOnEdges: true,
    longSwipes: false,
    followFinger: false,
    resistanceRatio: 0,
    mousewheel: {
        sensitivity: 1,
    },
    freeMode: false,
    allowSlidePrev: false,
    allowSlideNext: false,
    slidesPerView: 'auto',
    loop: false,
    speed: 1000,
    // observer: true,
    on: {
        init: function (){
            animateCSS('.workout-intro__image-1', 'fadeInUp').then((message) => {});
            animateCSS('.workout-intro__image-2', 'fadeInUp').then((message) => {});
            animateCSS('.workout-intro__gradient', 'fadeIn').then((message) => {
                workoutPageSwiper.allowSlidePrev = true;
                workoutPageSwiper.allowSlideNext = true;
                // workoutPageSwiper.touchmove = true;
            });
        },

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
            if (workoutPageSwiper.activeIndex == 0) {
                workoutPageSwiper.allowSlideNext = false;
                animateCSS('.workout-intro__image-1', 'fadeInUp').then((message) => {});
                animateCSS('.workout-intro__image-2', 'fadeInUp').then((message) => {});
                animateCSS('.workout-intro__gradient', 'fadeIn').then((message) => {});
                animateCSS('.classes__text-area', 'fadeOut').then((message) => {
                    document.querySelector('.classes__text-area').classList.add('invisible');
                    workoutPageSwiper.allowSlideNext = true;
                });
            }

            if (workoutPageSwiper.activeIndex == 1) {
                animateCSS('.workout-intro__image-1', 'fadeOutUp').then((message) => {});
                animateCSS('.workout-intro__image-2', 'fadeOutUp').then((message) => {});
                animateCSS('.workout-intro__gradient', 'fadeOut').then((message) => {});
                animateCSS('.classes__text-area', 'fadeIn').then((message) => {
                    workoutPageSwiper.allowSlidePrev = true;
                    workoutPageSwiper.allowSlideNext = true;
                });
            }

            if (workoutPageSwiper.activeIndex == 2) {
                workoutPageSwiper.allowSlidePrev = false;
                workoutPageSwiper.allowSlideNext = false;
                animateCSS('.classes__photo-area', 'fadeOut').then((message) => {});
                animateCSS('.schedule__image-area__image-2', 'slideOutDown').then((message) => {});
                animateCSS('.schedule__image-area__image-3', 'slideOutDown').then((message) => {});
                animateCSS('.classes__text-area', 'fadeOut').then((message) => {
                    document.querySelector('.classes__text-area').classList.add('invisible');
                    workoutPageSwiper.allowSlidePrev = true;
                    workoutPageSwiper.allowSlideNext = true;
                });
            }
            if (workoutPageSwiper.activeIndex == 3) {
                workoutPageSwiper.allowSlidePrev = false;
                workoutPageSwiper.allowSlideNext = false;
                animateCSS('.schedule__image-area__image-2', 'slideInUp').then((message) => {});
                animateCSS('.schedule__image-area__image-3', 'slideInUp').then((message) => {});
                animateCSS('.goals__text-area__main-title', 'fadeOut').then((message) => {
                    workoutPageSwiper.allowSlidePrev = true;
                    workoutPageSwiper.allowSlideNext = true;
                });

            }
            if (workoutPageSwiper.activeIndex == 4) {
                workoutPageSwiper.allowSlidePrev = false;
                workoutPageSwiper.allowSlideNext = false;
                telephoneWorkoutSwiper.slideTo(0,1000);
                telephoneWorkoutSwiper.allowSlideNext = false;
                telephoneWorkoutSwiper.allowSlidePrev = false;
                animateCSS('.schedule__image-area__image-2', 'slideOutDown').then((message) => {});
                animateCSS('.schedule__image-area__image-3', 'slideOutDown').then((message) => {});
                animateCSS('.goals__text-area__main-title', 'fadeIn').then((message) => {});
                animateCSS('.iphone', 'fadeOut').then((message) => {
                    document.querySelector('.iphone').classList.add('invisible');
                });
                animateCSS('.telephone-slider-area__get-app', 'fadeOut').then((message) => {
                    document.querySelector('.telephone-slider-area__get-app').classList.add('invisible');
                    workoutPageSwiper.allowSlidePrev = true;
                    workoutPageSwiper.allowSlideNext = true;
                });
            }
            if (workoutPageSwiper.activeIndex == 5) {
                workoutPageSwiper.allowSlideNext = false;
                video1Play();
                video2Play();
                animateCSS('.goals__text-area__main-title', 'fadeOut').then((message) => {});
                animateCSS('.telephone-slider-area__shadow', 'fadeIn').then((message) => {});
                animateCSS('.iphone', 'fadeIn').then((message) => {});
                animateCSS('.telephone-slider-area__get-app', 'fadeIn').then((message) => {
                    telephoneWorkoutSwiper.allowSlideNext = true;
                    telephoneWorkoutSwiper.update();
                });
                if(telephoneWorkoutSwiper.activeIndex == 0){
                    setTimeout(function () {
                        telephoneWorkoutSwiper.allowSlidePrev = false;
                        telephoneWorkoutSwiper.allowSlideNext = true;
                        telephoneWorkoutSwiper.update();video1.currentTime = 0;
                    }, 1000);

                }
                if(telephoneWorkoutSwiper.activeIndex == 1){
                    setTimeout(function () {
                        telephoneWorkoutSwiper.allowSlidePrev = true;
                        telephoneWorkoutSwiper.allowSlideNext = false;
                        telephoneWorkoutSwiper.update();
                    }, 1000);
                }

                // telephoneWorkoutSwiper.disable();
            }
            if (workoutPageSwiper.activeIndex == 6) {
                workoutPageSwiper.allowSlidePrev = false;
                workoutPageSwiper.allowSlideNext = false;
            }
            if (workoutPageSwiper.activeIndex == 7) {
                workoutPageSwiper.allowSlidePrev = false;
                workoutPageSwiper.allowSlideNext = false;
            }
        },
        slideChangeTransitionEnd: function () {
            if (workoutPageSwiper.activeIndex == 5) {
                // workoutPageSwiper.allowSlideNext = false;
                setTimeout(function () {
                    telephoneWorkoutSwiper.allowSlidePrev = true;
                    telephoneWorkoutSwiper.allowSlideNext = true;
                }, 100);

            }
            if (workoutPageSwiper.activeIndex == 6) {
                workoutPageSwiper.allowSlidePrev = true;
                workoutPageSwiper.allowSlideNext = true;
                telephoneWorkoutSwiper.allowSlidePrev = false;
                telephoneWorkoutSwiper.allowSlideNext = false;
            }
            if (workoutPageSwiper.activeIndex == 7) {
                workoutPageSwiper.allowSlidePrev = true;
            }
        }
    },
});

const workoutPageSwiperRow1 = new Swiper('.screen-exercises__row1.swiper-container', {
    direction: 'horizontal',
    effect: 'slide',
    spaceBetween: 16,
    centeredSlides: true,
    mousewheel: false,
    initialSlide: 0,
    nested: true,
    freeMode: true,
    allowTouchMove: true,
    slidesPerView: 'auto',
    loop: false,
    speed: 1000,
    observer: true,
    breakpoints: {
        768: {
            spaceBetween: 24,
        },
    },
});
const workoutPageSwiperRow2 = new Swiper('.screen-exercises__row2.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    effect: 'slide',
    centeredSlides: true,
    mousewheel: false,
    nested: true,
    freeMode: true,
    initialSlide: 2,
    allowTouchMove: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: false,
    speed: 1000,
    observer: true,
    breakpoints: {
        768: {
            spaceBetween: 24,
        },
    },
});

const telephoneWorkoutSwiper = new Swiper('.telephone-slider--workout.swiper-container', {
    effect: 'slide',
    freeMode: false,
    direction: 'vertical',
    nested: true,
    touchSensitivity: 1,
    releaseOnEdges: true,
    longSwipes: false,
    followFinger: false,
    resistanceRatio: 0,
    mousewheel: {
        sensitivity: 1,
    },
    allowSlidePrev: false,
    allowSlideNext: false,
    slidesPerView: 1,
    loop: false,
    speed: 1000,
    // observer: true,
    on: {
        init: function () {

        },
        slideChangeTransitionStart: function () {
            if (telephoneWorkoutSwiper.activeIndex == 0) {
                removeIphoneClasses(1);
            }
            if (telephoneWorkoutSwiper.activeIndex == 1) {
                removeIphoneClasses(2);
            }
        },
        slideChangeTransitionEnd: function () {
            if (telephoneWorkoutSwiper.activeIndex == 1) {
                workoutPageSwiper.allowSlideNext = true;
                workoutPageSwiper.update();
                setTimeout(function () {
                    telephoneWorkoutSwiper.allowSlidePrev = true;
                    telephoneWorkoutSwiper.update();
                }, 10);
            }
        },
    },
});

