import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateAbout = (el: HTMLElement) => {
  const paragraphs = el.querySelectorAll("p");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 55%",
      once: true,
    },
  });

  tl.fromTo(
    paragraphs,
    { opacity: 0, y: 36 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.28,
      ease: "power3.out",
    },
  );

  return tl;
};
