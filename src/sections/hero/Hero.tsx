import { useEffect, useRef } from "react";
import { animateHero } from "../../animations/hero";

const Hero = () => {
  const imageCardRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current || !imageCardRef.current) return;

    const tl = animateHero({
      text: textRef.current,
      image: imageCardRef.current,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden px-6 pt-20 md:px-10 md:pt-24"
    >
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[22rem] w-[22rem] rounded-full bg-white/20 blur-[120px] md:h-[30rem] md:w-[30rem] md:blur-[140px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div
          ref={textRef}
          className="flex w-full flex-col items-center text-center md:items-start md:text-left"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60 md:text-sm">
            Software Engineer • Platform & DevOps
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-7xl">
            I build systems that reduce friction in development.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            I automate workflows, streamline tooling, and improve developer
            productivity.
            <span className="mt-2 block text-white font-medium">
              If it can be automated, I automate it.
            </span>
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90 text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5 text-center"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/45 md:justify-start">
            <span>Built for scale</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <span>Automation-first</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
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
