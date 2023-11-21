import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// loading

window.addEventListener("load", function () {
  gsap.from("#js-parallax", {
    // y: "100%",
    duration: 2,
    opacity: 0,
    ease: "power4.out",
  });

  gsap.from("#js-parallax-layer-5", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "power3.out",
  });

  gsap.from("#js-header-nav", {
    scale: 0.8,
    opacity: 0,
    duration: 2,
    delay: 0,
    ease: "power3.out",
  });
});

// parallax

gsap.from("#js-parallax-layer-1", {
  y: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-parallax",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from("#js-parallax-layer-2", {
  y: 50,
  scale: 2,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-parallax",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from("#js-parallax-layer-3", {
  y: 100,
  scale: 1.6,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-parallax",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from("#js-parallax-layer-4", {
  y: 350,
  scale: 1.2,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-parallax",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from("#js-parallax-layer-6", {
  y: 400,
  scale: 2,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-parallax",
    start: "top top",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from("#js-parallax-layer-7", {
  y: 800,
  scale: 3,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-parallax",
    start: "top top",
    end: "bottom center",
    scrub: true,
  },
});

// king

gsap.from("#js-section-king-layer-1", {
  y: 50,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-section-1",
    start: "top 80%",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from("#js-section-king-layer-2", {
  y: -100,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-section-1",
    start: "top 80%",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from("#js-section-king-layer-3", {
  x: -300,
  scale: 0.9,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-section-1",
    start: "top 80%",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from("#js-section-king-layer-4", {
  x: 50,
  opacity: 0,
  scale: 1,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-section-1",
    start: "top 80%",
    end: "bottom bottom",
    scrub: true,
  },
});

// ysa

gsap.from("#js-section-ysa-layer-1", {
  y: 50,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-section-2",
    start: "top 80%",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from("#js-section-ysa-layer-2", {
  y: 50,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-section-2",
    start: "top 80%",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from("#js-section-ysa-layer-3", {
  x: 300,
  scale: 0.9,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-section-2",
    start: "top 80%",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from("#js-section-ysa-layer-4", {
  x: -50,
  opacity: 0,
  scale: 1,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-section-2",
    start: "top 80%",
    end: "bottom bottom",
    scrub: true,
  },
});

// sword

gsap.from("#js-section-sword-layer-1", {
  y: 50,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-section-3",
    start: "top 80%",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from("#js-section-sword-layer-2", {
  y: 50,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-section-3",
    start: "top 80%",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from("#js-section-sword-layer-3", {
  x: -300,
  scale: 0.9,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-section-3",
    start: "top 80%",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from("#js-section-sword-layer-4", {
  x: 50,
  opacity: 0,
  scale: 1,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-section-3",
    start: "top 80%",
    end: "bottom bottom",
    scrub: true,
  },
});

// slider

gsap.to(".screen-slider-track", {
  scrollTrigger: {
    trigger: ".screen-slider-mask",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
  },
  x: "-75%",
  ease: "sine.inOut",
});

gsap.from(".screen-slider-track", {
  scrollTrigger: {
    trigger: ".screen-slider-mask",
    start: "top 70%",
  },
  opacity: 0,
  duration: 1.5,
  ease: "sine.inOut",
});

// scroll anim
//ysa

gsap.from("#js-screen-ysa-layer-4", {
  opacity: 0.8,
  x: -400,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-screen-slider-track",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from("#js-screen-txt-container-ysa", {
  opacity: 0,
  scale: 0.9,
  ease: "none",
  scrollTrigger: {
    trigger: "js-screen-slider-track",
    start: "start+=40%",
    end: "bottom-=50%",
    scrub: true,
  },
});

//king

gsap.from("#js-screen-txt-container-king", {
  opacity: 0,
  scale: 0.9,
  ease: "none",
  scrollTrigger: {
    trigger: "js-screen-slider-track",
    start: "start+=55%",
    end: "bottom-=39%",
    scrub: true,
  },
});

gsap.from("#js-screen-king-layer-4", {
  x: 200,
  y: 100,
  scale: 0.9,
  ease: "none",
  scrollTrigger: {
    trigger: "js-screen-slider-track",
    start: "start+=55%",
    end: "bottom-=39%",
    scrub: true,
  },
});

gsap.from("#js-screen-king-layer-5", {
  x: -200,
  y: 100,
  scale: 0.9,
  ease: "none",
  scrollTrigger: {
    trigger: "js-screen-slider-track",
    start: "start+=55%",
    end: "bottom-=35%",
    scrub: true,
  },
});

gsap.from("#js-screen-king-layer-6", {
  x: -150,
  y: -125,
  scale: 0.9,
  ease: "none",
  scrollTrigger: {
    trigger: "js-screen-slider-track",
    start: "start+=55%",
    end: "bottom-=35%",
    scrub: true,
  },
});

gsap.from("#js-screen-king-layer-7", {
  x: -200,
  y: 100,
  scale: 0.9,
  ease: "none",
  scrollTrigger: {
    trigger: "js-screen-slider-track",
    start: "start+=55%",
    end: "bottom-=39%",
    scrub: true,
  },
});

// baron

gsap.from("#js-screen-txt-container-baron", {
  opacity: 0,
  scale: 0.9,
  scale: 0.9,
  ease: "none",
  scrollTrigger: {
    trigger: "js-screen-slider-track",
    start: "start+=60%",
    end: "bottom-=35%",
    scrub: true,
  },
});

gsap.from("#js-screen-baron-layer-3", {
  x: -200,
  y: 100,
  scale: 0.9,
  ease: "none",
  scrollTrigger: {
    trigger: "js-screen-slider-track",
    start: "start+=60%",
    end: "bottom-=35%",
    scrub: true,
    markers: true,
  },
});

gsap.from("#js-screen-baron-layer-4", {
  x: 200,
  y: 100,
  scale: 0.9,
  ease: "none",
  scrollTrigger: {
    trigger: "js-screen-slider-track",
    start: "start+=60%",
    end: "bottom-=35%",
    scrub: true,
  },
});

// sword

gsap.from("#js-screen-txt-container-sword", {
  opacity: 0,
  scale: 0.9,
  ease: "none",
  scrollTrigger: {
    trigger: "js-screen-slider-track",
    start: "start+=60%",
    end: "bottom-=30%",
    scrub: true,
  },
});

gsap.from("#js-screen-sword-layer-3", {
  x: -200,
  scale: 1,
  ease: "none",
  scrollTrigger: {
    trigger: "js-screen-slider-track",
    start: "start+=70%",
    end: "bottom-=24%",
    scrub: true,
  },
});
