import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateSkills = (container: HTMLDivElement) => {
  const heading = container.querySelector(".skills-heading");
  const cards = container.querySelectorAll<HTMLElement>(".skill-card");

  if (!heading || !cards.length) return;

  // Heading reveal
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
          startFloating(cards);
        },
      },
    }
  );

  const startFloating = (items: NodeListOf<HTMLElement>) => {
    items.forEach((card, i) => {
      // initial random but controlled offset (prevents sync-locking)
      gsap.set(card, {
        y: gsap.utils.random(-6, 6),
        rotation: gsap.utils.random(-1.5, 1.5),
        scale: 1,
      });

      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        defaults: { ease: "sine.inOut" },
        delay: i * 0.12, // soft wave
      });

      tl.to(card, {
        y: gsap.utils.random(-10, -6),
        rotation: gsap.utils.random(-2, 2),
        scale: 1.03,
        duration: gsap.utils.random(2.2, 3.2),
      });

      // Pause on hover (premium feel)
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.06,
          duration: 0.3,
          ease: "power2.out",
        });
        tl.pause();
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        tl.resume();
      });
    });
  };
};