import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

let tween;

gsap.to(".home-page-intro__main-title", {
    scrollTrigger: {
        trigger: ".home-page-intro__main-title",
        toggleActions: "restart pause restart pause",
        scrub: true,
        start: "center top+=300",
    },
    transitionDuration: 1,
    opacity: 0
});
gsap.to(".home-page__after-intro-text__text-area", {
    scrollTrigger: {
        trigger: ".home-page__after-intro-text__text-area",
        toggleActions: "restart pause restart pause",
        scrub: true,
        start: "top bottom-=100px",
        end: "top center+=100px",
        // markers: true,
    },
    transitionDuration: 1,
    opacity: 1
});


// gsap.utils.toArray(".purple-area__section").forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "bottom bottom",
//         toggleActions: "restart pause restart pause",
//         pin: true,
//         pinSpacing: panel.height*3,
//         scrub: 1,
//         toggleClass: "is-active",
//         opacity: 1,
//         markers: true,
//
//     })
// })

gsap.timeline({
    scrollTrigger: {
        trigger: ".purple-area__section--section1",
        // start: "center center",
        // end: "center center",
        toggleActions: "restart pause restart pause",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: true,
    }
})
    .from(".purple-area__section--section1",  { opacity: 0 })
    .to(".purple-area__section--section1",  { opacity: 1 });


gsap.timeline({
    scrollTrigger: {
        trigger: ".purple-area__section--section2",
        toggleActions: "restart pause restart pause",
        // start: "center center",
        // end: "center center",
        scrub: true,
        pin: true,
        anticipatePin: 1
    }
})
    .from(".purple-area__section--section2",  { opacity: 0 })
    .to(".purple-area__section--section2",  { opacity: 1 });

// gsap.timeline({
//     scrollTrigger: {
//         trigger: ".purple-area__section--section3",
//         toggleActions: "restart pause restart pause",
//         // start: "top center",
//         // end: "bottom center",
//         scrub: true,
//         pin: true
//     }
// })
//     .from(".purple-area__section--section3",  { opacity: 0 })
//     .to(".purple-area__section--section3",  { opacity: 1 });




