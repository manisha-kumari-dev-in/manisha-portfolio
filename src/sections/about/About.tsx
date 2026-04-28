import { useEffect, useRef } from "react";
import { animateAbout } from "../../animations/about";

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    animateAbout(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28"
    >
      <h2 className="text-3xl font-semibold text-white md:text-5xl">About</h2>

      <div className="mt-8 space-y-8 md:border-l md:border-white/10 md:pl-8">
        <p className="text-base leading-8 text-white/80 md:text-lg md:leading-9">
          I’m a software engineer working in platform services, focused on
          improving developer experience by reducing friction and building
          efficient internal systems.
        </p>

        <p className="text-base leading-8 text-white/80 md:text-lg md:leading-9">
          My work centers around automation, system design, and building
          reliable development workflows. I approach problems with a focus on
          simplicity, scalability, and long-term maintainability.
        </p>

        <p className="text-base leading-8 text-white/80 md:text-lg md:leading-9">
          I actively improve engineering quality through structured testing
          practices (unit, integration, and E2E), streamlined release processes,
          and reducing operational overhead across systems.
        </p>

        <p className="text-base leading-8 text-white/80 md:text-lg md:leading-9">
          My work aligns closely with DevOps principles, with a strong interest
          in scalable infrastructure, automation, and building systems that
          enable teams to move faster without sacrificing reliability.
        </p>
      </div>
    </section>
  );
};

export default About;
