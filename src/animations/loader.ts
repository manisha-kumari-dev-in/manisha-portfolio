import gsap from "gsap";

type LoaderAnimationParams = {
  loader: HTMLDivElement;
  image: HTMLImageElement;
  text: HTMLParagraphElement;
  onComplete?: () => void;
};

export const animateLoader = ({
  loader,
  image,
  text,
  onComplete,
}: LoaderAnimationParams) => {
  const tl = gsap.timeline({ onComplete });

  tl.fromTo(
    image,
    { opacity: 0, scale: 0.94, y: 16 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    },
  )
    .fromTo(
      text,
      { opacity: 0, y: 8 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3",
    )
    .to(loader, {
      opacity: 0,
      y: -12,
      duration: 0.8,
      ease: "power3.inOut",
      delay: 1,
    });

  return tl;
};
