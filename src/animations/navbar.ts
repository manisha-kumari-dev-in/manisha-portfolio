import gsap from "gsap";

type AnimateMobileMenuParams = {
  menu: HTMLDivElement;
  links: HTMLUListElement;
};

export const animateMobileMenu = ({ menu, links }: AnimateMobileMenuParams) => {
  const tl = gsap.timeline();

  tl.fromTo(
    menu,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    },
  ).fromTo(
    links.children,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.08,
    },
    "-=0.1",
  );

  return tl;
};
