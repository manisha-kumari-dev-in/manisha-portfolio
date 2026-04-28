import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateAbout = (el: HTMLElement) => {
  const paragraphs = el.querySelectorAll("p");

  paragraphs.forEach((p) => {
    gsap.fromTo(
      p,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: p,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );
  });
};
