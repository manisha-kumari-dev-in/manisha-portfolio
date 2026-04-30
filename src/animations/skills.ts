import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateSkills = (container: HTMLDivElement) => {
  const heading = container.querySelector(".skills-heading");
  const cards = container.querySelectorAll(".skill-card");

  if (!heading) return;

  gsap.fromTo(
    heading,
    { opacity: 0, y: 32 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            y: -8,
            duration: 1.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
              each: 0.15,
              from: "random",
            },
          });
        },
      },
    }
  );
};