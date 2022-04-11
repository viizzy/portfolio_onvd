gsap.from('.nav', {opacity: 0, duration: 1, x: -50, ease: 'slow(0.7, 0.7, false)'});
// gsap.from('.class-x', {opacity: 0, duration: 1, y: 50, ease: 'Power2.easeInOut'});

gsap.registerPlugin(ScrollTrigger);

// gsap.from(".class-x", {
//     y: -100,
//     duration: 2,
//     scrollTrigger: ".class-x"
// });

gsap.from(".ht", {
    y: 300,

    duration: 1,
    scrollTrigger: ".ht"
});

gsap.from(".hx", {
    y: -300,

    duration: 1,
    scrollTrigger: ".hx"
});


// *** vanilla tilt *** //
VanillaTilt.init(document.querySelector(".header-rs"), {
    max: 15,
    speed: 400
})

