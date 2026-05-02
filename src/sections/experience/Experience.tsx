import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { animateExperience } from "../../animations/experience";
import { experiences } from "./experience.data";

const Experience = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    if (!ref.current) return;

    const anim = animateExperience(ref.current);

    return () => {
      anim?.kill();
    };
  }, []);

  if (!experiences.length) return null;

  return (
    <section
      ref={ref}
      id="experience"
      className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="max-w-3xl">
        <p className="experience-eyebrow text-sm font-medium uppercase tracking-[0.2em] text-white/45">
          Experience
        </p>

        <h2 className="experience-heading mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Where I’ve Worked
        </h2>

        <p className="experience-subheading mt-5 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
          A snapshot of the teams, roles, and systems I’ve worked across.
        </p>
      </div>

      <div className="mt-14 space-y-4 md:mt-16">
        {experiences.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={`${item.company}-${item.role}-${index}`}
              className={`experience-item overflow-hidden rounded-[1.75rem] border backdrop-blur-xl transition-all duration-500 ${
                isOpen
                  ? "border-white/14 bg-white/[0.045] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_8px_30px_rgba(255,255,255,0.025)]"
                  : "border-white/10 bg-white/[0.028] hover:border-white/16 hover:bg-white/[0.04]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`experience-panel-${index}`}
                className="group flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6 md:py-6"
              >
                <div className="grid flex-1 grid-cols-1 gap-3 md:grid-cols-[180px_1fr] md:items-center">
                  <div>
                    <p className="text-sm font-medium text-white/45">
                      {item.duration}
                    </p>
                    <span className="mt-2 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
                      {item.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-white/52 md:text-base">
                      {item.company}
                    </p>
                  </div>
                </div>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 text-white/55"
                      : "text-white/30 group-hover:text-white/45"
                  }`}
                />
              </button>

              <div
                id={`experience-panel-${index}`}
                className={`grid transition-all duration-500 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/8 px-5 py-5 md:px-6 md:py-6">
                    <div className="flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-white/52 md:text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-5 space-y-3">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-7 text-white/65 md:text-[15px]"
                        >
                          <span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;