import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.from("#layer-1", {
  y: "50px",
  ease: "none",
  scrollTrigger: {
    trigger: "#parallax",
    start: "top top",
    end: "bottom center",
    scrub: true,
    markers: true,
  },
});

gsap.from("#layer-2", {
  y: "250px",
  ease: "none",
  scrollTrigger: {
    trigger: "#parallax",
    start: "top top",
    end: "bottom center",
    scrub: true,
    markers: true,
  },
});

gsap.from("#layer-3", {
  y: "500px",
  ease: "none",
  scrollTrigger: {
    trigger: "#parallax",
    start: "top top",
    end: "bottom center",
    scrub: true,
    markers: true,
  },
});

gsap.to(".slider-track", {
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
    markers: true,
  },
  x: "-75%",
  ease: "sine.inOut",
});
