import { useEffect, useRef } from "react";
import { animateSkills } from "../../animations/skills";
import { skillGroups } from "./skills.data";

const Skills = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    animateSkills(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      id="skills"
      className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28"
    >
      <h2 className="skills-heading text-3xl font-semibold text-white md:text-5xl lg:text-6xl">
        Skills
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="skill-card rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(255,255,255,0.04)] md:p-6"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 md:h-12 md:w-12">
                <img
                  src={group.icon}
                  alt={group.title}
                  className="h-5 w-5 object-contain opacity-90 md:h-6 md:w-6"
                />
              </div>

              <h3 className="text-lg font-medium text-white md:text-xl">
                {group.title}
              </h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5 md:mt-6 md:gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-chip group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/75 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] hover:text-white md:px-4 md:py-2 md:text-sm"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-4 w-4 object-contain opacity-70 transition-opacity duration-200 group-hover:opacity-100 md:h-5 md:w-5"
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;