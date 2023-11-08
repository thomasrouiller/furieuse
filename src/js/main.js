import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", function () {
  gsap.from("#js-parallax", {
    y: "100%",
    duration: 2,
    ease: "power4.out",
  });

  gsap.from("#js-layer-5", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "power3.out",
  });
});

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
