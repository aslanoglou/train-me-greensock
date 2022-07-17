// import "fullpage.js/vendors/scrolloverflow";
// import "fullpage.js/dist/fullpage"

new fullpage('#fullpage', {
    //options here
    licenseKey: '324A5AA6-C1DC4512-ADC8AA67-BEA83A2C',
    scrollHorizontallyKey: '324A5AA6-C1DC4512-ADC8AA67-BEA83A2C',
    autoScrolling:true,
    scrollHorizontally: true
});

//methods
fullpage_api.setAllowScrolling(true);

// document.addEventListener("DOMContentLoaded", function () {
//     const sectionItems = [].slice.call(document.querySelectorAll('section'));
//     const animatedItems = [].slice.call(document.querySelectorAll('[data-animated]'));
//
//
//     if ("IntersectionObserver" in window) {
//
//         let sectionsObserver = new IntersectionObserver(function (entries, observer) {
//             entries.forEach(function (entry) {
//
//                 disable();
//                 if (entry.isIntersecting) {
//                     let sectionItem = entry.target;
//                     console.log(sectionItem.dataset.section);
//                     sectionItem.scrollIntoView({block: "start", behavior: 'smooth'});
//                     // sectionsObserver.unobserve(sectionItem);
//                 }
//             });
//         }, {rootMargin: "0px 0px -96px 0px"});
//
//         sectionItems.forEach(function (item) {
//             sectionsObserver.observe(item);
//         });
//
//         // let animatedItemsObserver = new IntersectionObserver(function (entries, observer) {
//         //     entries.forEach(function (entry) {
//         //         if (entry.isIntersecting) {
//         //             let animatedItem = entry.target;
//         //             // console.log(animatedItem);
//         //             if (animatedItem.hasAttributes('homePageIntroText')) {
//         //                 setTimeout(function () {
//         //                     animatedItem.classList.remove('invisible')
//         //                     animatedItem.classList.add('animate__fadeInUp')
//         //                 }, 100)
//         //             }
//         //             if (animatedItem.hasAttributes('homePageAfterIntroText')) {
//         //                 setTimeout(function () {
//         //                     animatedItem.classList.remove('invisible')
//         //                     animatedItem.classList.add('animate__fadeInUp')
//         //                 }, 100)
//         //             }
//         //
//         //             setTimeout(function () {
//         //                 animatedItemsObserver.unobserve(animatedItem);
//         //             }, 100)
//         //
//         //         }
//         //     });
//         // }, {rootMargin: "0px 0px -200px 0px"});
//         // animatedItems.forEach(function (item) {
//         //     animatedItemsObserver.observe(item);
//         // });
//     } else {
//         // Possibly fall back to event handlers here
//     }
// });

