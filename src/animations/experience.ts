import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateExperience = (container: HTMLDivElement) => {
  const eyebrow = container.querySelector(".experience-eyebrow");
  const heading = container.querySelector(".experience-heading");
  const subheading = container.querySelector(".experience-subheading");
  const items = container.querySelectorAll(".experience-item");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 72%",
      once: true,
    },
  });

  tl.fromTo(
    [eyebrow, heading, subheading],
    { opacity: 0, y: 28 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
    }
  ).fromTo(
    items,
    { opacity: 0, y: 28 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.14,
      ease: "power3.out",
    },
    "-=0.45"
  );

  return tl;
};