import gsap from "gsap";

type AnimateHeroParams = {
  text: HTMLDivElement;
  image: HTMLDivElement;
};

export const animateHero = ({ text, image }: AnimateHeroParams) => {
  const tl = gsap.timeline();

  tl.fromTo(
    text.children,
    {
      opacity: 0,
      y: 24,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.85,
      stagger: 0.14,
      ease: "power3.out",
    },
  );

  tl.fromTo(
    image,
    {
      opacity: 0,
      y: 40,
      scale: 0.97,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.45",
  );

  const floatTween = gsap.to(image, {
    y: -1,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  return () => {
    tl.kill();
    floatTween.kill();
  };
};
