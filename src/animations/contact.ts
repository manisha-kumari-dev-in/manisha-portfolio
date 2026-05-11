import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateContact = (container: HTMLDivElement) => {
  const shell = container.querySelector(".contact-shell");
  const eyebrow = container.querySelector(".contact-eyebrow");
  const heading = container.querySelector(".contact-heading");
  const subheading = container.querySelector(".contact-subheading");
  const links = container.querySelectorAll(".contact-link");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 90%",
      once: true,
      invalidateOnRefresh: true
    },
  });

  tl.fromTo(
    shell,
    {
      opacity: 0,
      y: 28,
      scale: 0.985,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      ease: "power3.out",
    },
  )
    .fromTo(
      [eyebrow, heading, subheading],
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.55",
    )
    .fromTo(
      links,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.35",
    );

  gsap.to(shell, {
    y: -4,
    duration: 2.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  return tl;
};
