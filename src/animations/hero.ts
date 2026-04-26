import gsap from "gsap";

type AnimateHeroImageParams = {
  image: HTMLDivElement;
};

export const animateHeroImage = ({ image }: AnimateHeroImageParams) => {
  return gsap.to(image, {
    y: -20,
    duration: 2.1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    force3D: true,
    autoAlpha: 1,
  });
};
