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

const mediaQuery = window.matchMedia('(min-width: 768px)');

const gearPageSwiper = new Swiper('.gear-page.swiper-container', {
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
    allowSlidePrev: true,
    allowSlideNext: true,
    slidesPerView: 'auto',
    loop: false,
    speed: 1000,
    observer: true,
    on: {
        init: function () {
            animateCSS('.gear-intro', 'fadeIn').then((message) => {
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
            if (gearPageSwiper.activeIndex == 0) {
                disableSwipe(gearPageSwiper);
                animateCSS('.gear-intro', 'fadeIn').then((message) => {});
                animateCSS('.gear-full-workout__images-area__image3', 'fadeOut').then((message) => {});
                animateCSS('.gear-full-workout__images-area__image4', 'fadeOut').then((message) => {});
                animateCSS('.gear-full-workout__images-area__image5', 'fadeOut').then((message) => {
                    enableSwipe(gearPageSwiper);
                });
                document.querySelector('.gear-full-workout__images-area__image3').classList.add('invisible');
                document.querySelector('.gear-full-workout__images-area__image4').classList.add('invisible');
                document.querySelector('.gear-full-workout__images-area__image5').classList.add('invisible');
            }

            if (gearPageSwiper.activeIndex == 1) {
                disableSwipe(gearPageSwiper);
                animateCSS('.gear-intro', 'fadeOut').then((message) => {
                    document.querySelector('.gear-intro').classList.add('invisible');
                    enableSwipe(gearPageSwiper);
                });
                animateCSS('.gear-hardware', 'fadeOut').then((message) => {
                    document.querySelector('.gear-hardware').classList.add('invisible');
                });
            }

            if (gearPageSwiper.activeIndex == 2) {
                disableSwipe(gearPageSwiper);
                animateCSS('.gear-full-workout__images-area__image3', 'fadeOut').then((message) => {});
                animateCSS('.gear-full-workout__images-area__image4', 'fadeOut').then((message) => {});
                animateCSS('.gear-full-workout__images-area__image5', 'fadeOut').then((message) => {});
                document.querySelector('.gear-full-workout__images-area__image3').classList.add('invisible');
                document.querySelector('.gear-full-workout__images-area__image4').classList.add('invisible');
                document.querySelector('.gear-full-workout__images-area__image5').classList.add('invisible');

                animateCSS('.gear-hardware', 'fadeIn').then((message) => {
                    enableSwipe(gearPageSwiper)
                });
            }
            if (gearPageSwiper.activeIndex == 3) {
                disableSwipe(gearPageSwiper);
                animateCSS('.portability__text-area', 'fadeIn').then((message) => {});
                animateCSS('.portability__image-area', 'fadeInUp').then((message) => {});
                animateCSS('.gear-hardware', 'fadeOut').then((message) => {
                    document.querySelector('.gear-hardware').classList.add('invisible');
                    enableSwipe(gearPageSwiper)
                });
                // gearRealTimeSlider.disable();
            }
            if (gearPageSwiper.activeIndex == 4) {
                // gearPageSwiper.disable();
                disableSwipe(gearPageSwiper)
                disableSwipe(gearRealTimeSlider);
                animateCSS('.portability__text-area', 'fadeOut').then((message) => {
                    document.querySelector('.portability__text-area').classList.add('invisible');
                });
                animateCSS('.portability__image-area', 'fadeOut').then((message) => {
                    document.querySelector('.portability__image-area').classList.add('invisible');
                });
                // gearRealTimeSlider.update();
            }
            if (gearPageSwiper.activeIndex >= 5) {
                setTimeout(function (){
                    enableSwipe(gearPageSwiper);
                },1000)
                disableSwipe(gearPageSwiper);
            }
        },

        slideChangeTransitionEnd: function (){
            if (gearPageSwiper.activeIndex == 0) {
                // gearPageSwiper.allowSlidePrev = true;
                // gearPageSwiper.allowSlideNext = true;
            }
            if (gearPageSwiper.activeIndex == 1) {
                // animateCSS('.gear-full-workout__images-area__image2', 'fadeIn').then((message) => {});
                animateCSS('.gear-full-workout__images-area__image3', 'fadeIn').then((message) => {});
                animateCSS('.gear-full-workout__images-area__image4', 'fadeIn').then((message) => {});
                animateCSS('.gear-full-workout__images-area__image5', 'fadeIn').then((message) => {
                    // gearPageSwiper.allowSlidePrev = true;
                    // gearPageSwiper.allowSlideNext = true;
                });
            }
            if(gearPageSwiper.activeIndex == 3){
                resetGearRealTimeSlider();
                document.querySelector('.gear-real-time__main-title').classList.remove('gear-real-time__main-title--play');
                // gearPageSwiper.allowSlidePrev = true;
                // gearPageSwiper.allowSlideNext = true;
            }
            if(gearPageSwiper.activeIndex == 4){
                animateCSS('.gear-real-time__slider__figure-area--figure1', 'fadeInRight').then((message) => {
                    animateCSS('.gear-real-time__slider__text-area--text1', 'fadeInDown').then((message) => {
                        gearPageSwiper.allowSlidePrev = true;
                        enableSwipe(gearRealTimeSlider)
                        gearRealTimeSlider.update();
                        // enableSwipe(gearRealTimeSlider);
                    });
                });
                document.querySelector('.gear-real-time__main-title').classList.add('gear-real-time__main-title--play');
            }
            if(gearPageSwiper.activeIndex == 5){
                document.querySelector('.gear-real-time__main-title').classList.remove('gear-real-time__main-title--play');
                resetGearRealTimeSlider();
                enableSwipe(gearPageSwiper)
            }
        },
    },
});


const gearRealTimeSlider = new Swiper('.gear-real-time__slider.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    effect: 'fade',
    touchSensitivity: 1,
    releaseOnEdges: true,
    longSwipes: false,
    resistanceRatio: 0,
    followFinger: false,
    allowSlidePrev: false,
    allowSlideNext: false,
    mousewheel: {
        sensitivity: 1,
    },
    freeMode: false,
    slidesPerView: 1,
    loop: false,
    speed: 0,
    observer: true,
    nested: true,
    on: {
        slideChangeTransitionStart: function () {
            // disableSwipe(gearPageSwiper);
            disableSwipe(gearRealTimeSlider);
            // gearPageSwiper.disable();
            // gearRealTimeSlider.disable();
            if (gearRealTimeSlider.activeIndex == 0) {
                animateCSS('.gear-real-time__slider__text-area--text2', 'fadeOutUp').then((message) => {
                    document.querySelector('.gear-real-time__slider__text-area--text2').classList.add('invisible');
                    if (mediaQuery.matches) {
                        animateCSS('.gear-real-time__slider__figure-area--figure2', 'slideOutRight').then((message) => {
                            document.querySelector('.gear-real-time__slider__figure-area--figure2').classList.add('invisible');
                            document.querySelector('.gear-real-time__slider__figure-area--figure1').classList.remove('invisible');
                            animateCSS('.gear-real-time__slider__text-area--text1', 'fadeInUp').then((message) => {
                                gearPageSwiper.allowSlidePrev = true;
                                gearPageSwiper.allowSlideNext = false;
                                enableSwipe(gearRealTimeSlider);
                                gearRealTimeSlider.update();
                                // gearPageSwiper.enable();
                                // gearRealTimeSlider.enable();
                            });
                        });
                    } else {
                        animateCSS('.gear-real-time__slider__text-area--text1', 'fadeInUp').then((message) => {
                            gearPageSwiper.allowSlidePrev = true;
                            gearPageSwiper.allowSlideNext = false;
                            enableSwipe(gearRealTimeSlider);
                            gearRealTimeSlider.update();
                            // gearPageSwiper.enable();
                            // gearRealTimeSlider.enable();
                        });
                    }
                });
            }
            if (gearRealTimeSlider.activeIndex == 1) {
                animateCSS('.gear-real-time__slider__text-area--text1', 'fadeOutDown').then((message) => {
                    document.querySelector('.gear-real-time__slider__text-area--text1').classList.add('invisible');
                    if (mediaQuery.matches) {
                        animateCSS('.gear-real-time__slider__figure-area--figure1', 'slideOutLeft').then((message) => {
                            document.querySelector('.gear-real-time__slider__figure-area--figure1').classList.add('invisible');
                            document.querySelector('.gear-real-time__slider__figure-area--figure2').classList.remove('invisible');
                            animateCSS('.gear-real-time__slider__text-area--text2', 'fadeInUp').then((message) => {
                                gearPageSwiper.allowSlidePrev = false;
                                gearPageSwiper.allowSlideNext = true;
                                enableSwipe(gearRealTimeSlider);
                                gearRealTimeSlider.update();
                                // gearPageSwiper.enable();
                                // gearRealTimeSlider.enable();
                            });
                        });
                    } else {
                        animateCSS('.gear-real-time__slider__text-area--text2', 'fadeInUp').then((message) => {
                            gearPageSwiper.allowSlidePrev = false;
                            gearPageSwiper.allowSlideNext = true;
                            enableSwipe(gearRealTimeSlider);
                            gearRealTimeSlider.update();
                            // gearPageSwiper.enable();
                            // gearRealTimeSlider.enable();
                        });
                    }
                });
            }
        },
    },
});

const gearTechnicalsSpecificationsSlider = new Swiper('.technical-specifications .swiper-container', {
    direction: 'vertical',
    effect: 'slide',
    touchSensitivity: 1,
    // releaseOnEdges: true,
    // longSwipes: false,R
    // resistanceRatio: 0,
    // followFinger: false,
    // allowSlidePrev: false,
    // allowSlideNext: false,
    mousewheel: {
        sensitivity: 1,
    },
    freeMode: true,
    slidesPerView: 'auto',
    loop: false,
    speed: 0,
    observer: true,
    nested: true,
    on: {

    },
});

const resetGearRealTimeSlider = function (){
    gearRealTimeSlider.slideTo(0, 0, false);
    document.querySelector('.gear-real-time__slider__text-area--text1').classList.add('invisible');
    document.querySelector('.gear-real-time__slider__figure-area--figure1').classList.add('invisible');
    document.querySelector('.gear-real-time__slider__text-area--text2').classList.add('invisible');
    document.querySelector('.gear-real-time__slider__figure-area--figure2').classList.add('invisible');
    // gearRealTimeSlider.disable();
}

const enableSwipe = (swiper) =>{
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    // swiper.update();
}
const disableSwipe = (swiper) =>{
    swiper.allowSlidePrev = false;
    swiper.allowSlideNext = false;
    // swiper.update();
}