import { useEffect, useRef } from "react";
import { animateHeroImage } from "../../animations/hero";

const Hero = () => {
  const imageCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!imageCardRef.current) return;

    const animation = animateHeroImage({
      image: imageCardRef.current,
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden px-6 pt-24 md:px-10"
    >
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[30rem] w-[30rem] rounded-full bg-white/20 blur-[140px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
            Software Engineer
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white md:text-7xl">
            I build tools that eliminate busywork.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/70 md:text-lg">
            I reduce friction, automate workflows, and improve developer
            productivity. If it can be automated, I automate it.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              Let’s Talk
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/45 md:justify-start">
            <span>Built for scale</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Automation-first</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Developer focused</span>
          </div>
        </div>

        <div className="relative hidden w-full justify-center md:flex md:justify-end">
          <div
            ref={imageCardRef}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur-xl will-change-transform"
          >
            <img
              src="/hero-image.png"
              alt="Manisha Kumari"
              className="h-[34rem] w-[26rem] rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
