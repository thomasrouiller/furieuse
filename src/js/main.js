import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// loading

window.addEventListener("load", function () {
  gsap.from("#js-parallax", {
    y: "100%",
    duration: 2,
    ease: "power4.out",
  });

  gsap.from("#js-parallax-layer-5", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay: 1,
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

// slider timeline

// const timeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#js-screen-1",
//     start: "top center",
//     end: "bottom center",
//     // scrub: true,
//   },
// });

// timeline.from("#js-screen-ysa-layer-4", {
//   opacity: 0.8,
//   x: -400,
//   duration: 1,
//   ease: "power1.inOut",
// });

// timeline.from("#js-screen-txt-container", {
//   opacity: 0,
//   scale: 0.7,
//   x: 200,
//   duration: 0.5,
//   ease: "power1.out",
// });

// scroll anim

gsap.from("#js-screen-ysa-layer-4", {
  opacity: 0.8,
  x: -400,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-screen-1",
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
    trigger: "#js-screen-1",
    start: "top 60%",
    end: "bottom 90%",
    scrub: true,
  },
});

gsap.from("#js-screen-txt-container-king", {
  opacity: 0,
  scale: 0.9,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-screen-2",
    start: "top 60%",
    end: "bottom 90%",
    scrub: true,
    markers: true,
  },
});
