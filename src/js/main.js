import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.from("#js-layer-1", {
  y: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-parallax",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: true,
  },
});

gsap.from("#js-layer-2", {
  y: 50,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-parallax",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: true,
  },
});

gsap.from("#js-layer-3", {
  y: 100,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-parallax",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: true,
  },
});

gsap.from("#js-layer-4", {
  y: 350,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-parallax",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: true,
  },
});

gsap.from("#js-layer-6", {
  y: 400,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-parallax",
    start: "top top",
    end: "bottom center",
    scrub: true,
    markers: true,
  },
});

gsap.from("#js-layer-7", {
  y: 600,
  ease: "none",
  scrollTrigger: {
    trigger: "#js-parallax",
    start: "top top",
    end: "bottom center",
    scrub: true,
    markers: true,
  },
});

// gsap.to(".slider-track", {
//   scrollTrigger: {
//     trigger: ".slider-mask",
//     start: "top top",
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     markers: true,
//   },
//   x: "-75%",
//   ease: "sine.inOut",
// });

// Ensure that the DOM content is fully loaded before running the animation
window.addEventListener("load", function () {
  // Initial animation for .parallax
  gsap.from(".parallax", {
    y: "100%", // Start position from the bottom
    duration: 2, // Animation duration
    ease: "power4.out", // Easing function
  });

  // Initial animation for .layer-5
  gsap.from(".layer-5", {
    scale: 0.8,
    opacity: 0, // Start with opacity 0
    duration: 1, // Animation duration
    delay: 1, // Delay the start of the animation
  });
});

// gsap.from("#js-bg", {
//   opacity: 100,
//   duration: 1,
//   delay: 0,
// });
