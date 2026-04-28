import gsap from "gsap";

type AnimateHeroParams = {
  text: HTMLDivElement;
  image: HTMLDivElement;
};

export const animateHero = ({ text, image }: AnimateHeroParams) => {
  const tl = gsap.timeline();

  tl.fromTo(
    text.children,
    { opacity: 0, y: 28 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.2,
    },
  );

  tl.fromTo(
    image,
    { opacity: 0, y: 50, scale: 0.94 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.1,
      ease: "power3.out",
    },
    "-=0.5",
  );

  tl.add(() => {
    gsap.to(image, {
      yPercent: -3,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return tl;
};
