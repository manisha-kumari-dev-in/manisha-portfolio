import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const motion = {
  ease: {
    primary: "power3.out",
    soft: "power2.out",
  },

  duration: {
    fast: 0.25,
    medium: 0.45,
    slow: 0.75,
  },

  distance: {
    small: 10,
    medium: 20,
    large: 40,
  },
};

export const projectsAnimations = {
  init(container: HTMLElement) {
    const cards = container.querySelectorAll(".project-card");

    return gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 65%",
          once: true,
        },
      })
      .fromTo(
        cards,
        { opacity: 0, y: 24, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: motion.duration.medium,
          stagger: 0.12,
          ease: motion.ease.primary,
        },
      );
  },

  archive(container: HTMLElement, open: boolean) {
    const rows = container.querySelectorAll(".archive-row");

    const tl = gsap.timeline();

    if (open) {
      tl.to(container, {
        height: "auto",
        duration: motion.duration.medium,
        ease: motion.ease.primary,
      }).fromTo(
        rows,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: motion.duration.medium,
        },
        "-=0.1",
      );
    } else {
      tl.to(container, {
        height: 0,
        duration: motion.duration.fast,
      });
    }

    return tl;
  },
};
