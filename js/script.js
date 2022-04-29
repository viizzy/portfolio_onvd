gsap.from('.nav', {opacity: 0, duration: 1, x: -50, ease: 'slow(0.7, 0.7, false)'});
// gsap.from('.title', {opacity: 0, duration: 1, y: 50, ease: 'Power2.easeInOut'});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".education .col-lg-6", {
    y: -200,
    duration: 1,
    scrollTrigger: ".education .col-lg-6"
});

gsap.from(".lang", {
    y: -200,
    duration: 1,
    scrollTrigger: ".lang"
});

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

gsap.from(".education-title", {
    y: -300,

    duration: 1,
    scrollTrigger: ".education-title"
});

gsap.from(".skills", {
    x: -300,

    duration: 1,
    scrollTrigger: ".skills"
});

VanillaTilt.init(document.querySelector(".header-rs"), {
    max: 15,
    speed: 400
});

VanillaTilt.init(document.querySelector(".skills-ls"), {
    max: 15,
    speed: 400
})