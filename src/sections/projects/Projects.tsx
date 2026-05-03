import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import { featuredProjects, archivedProjects } from "./projects.data";

import { projectsAnimations } from "../../animations/projects";
import { attachTilt } from "../../animations/tilt";
import { ProjectLinks } from "./ProjectsLinks";

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const archiveRef = useRef<HTMLDivElement | null>(null);

  const [openArchive, setOpenArchive] = useState(false);
  const [expandedFeatured, setExpandedFeatured] = useState<number | null>(0);
  const [expandedArchive, setExpandedArchive] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = projectsAnimations.init(sectionRef.current);
    attachTilt(".project-card");

    return () => {
      tl?.kill?.();
      tl?.scrollTrigger?.kill?.();
    };
  }, []);

  useEffect(() => {
    if (!archiveRef.current) return;

    const tl = projectsAnimations.archive(archiveRef.current, openArchive);

    return () => {
      tl?.kill?.();
      tl?.scrollTrigger?.kill?.();
    };
  }, [openArchive]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-white/40">
          Featured Work
        </p>

        <h2 className="mt-4 text-5xl font-semibold md:text-6xl">Projects</h2>

        <p className="mt-5 leading-8 text-white/60">
          Systems built across platform engineering and automation.
        </p>
      </div>

      <div className="mt-16 space-y-6">
        {featuredProjects.map((p, index) => {
          const isExpanded = expandedFeatured === index;

          return (
            <article
              key={p.id}
              className="project-card rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl will-change-transform"
            >
              <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr]">
                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-white/50">
                      {p.type} • {p.year}
                    </div>

                    <ProjectLinks links={p.links} />
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold">{p.title}</h3>

                  <p className="mt-3 leading-7 text-white/60">
                    {p.description}
                  </p>

                  <button
                    onClick={() =>
                      setExpandedFeatured(isExpanded ? null : index)
                    }
                    className="mt-5 flex items-center gap-2 text-sm text-white/45 md:hidden"
                  >
                    <span>{isExpanded ? "Hide details" : "View details"}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-out md:block ${
                      isExpanded
                        ? "mt-5 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 md:opacity-100"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-wrap gap-2">
                        {p.stack?.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-white/60 transition-all duration-200 hover:bg-white/[0.08] hover:border-white/25 hover:text-white hover:scale-[1.03]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`grid transition-all duration-500 ease-out md:block ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0 md:opacity-100"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                      <p className="text-xs uppercase text-white/40">Impact</p>

                      <ul className="mt-4 space-y-3">
                        {p.impact?.map((i) => (
                          <li key={i} className="text-sm text-white/60">
                            • {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-16">
        <button
          onClick={() => setOpenArchive((v) => !v)}
          className="w-full rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-4 text-left transition hover:bg-white/[0.05]"
        >
          <div className="flex justify-between">
            <div>
              <p className="text-xs uppercase text-white/60">
                View more of my work
              </p>
              <p className="text-sm text-white/30">
                {archivedProjects.length} projects
              </p>
            </div>

            <ChevronDown
              className={`transition duration-300 ${
                openArchive ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        <div ref={archiveRef} className="overflow-hidden">
          <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.02]">
            {archivedProjects.map((p, index) => {
              const isExpanded = expandedArchive === index;

              return (
                <div
                  key={p.id}
                  className="archive-row border-b border-white/5 last:border-0"
                >
                  <button
                    onClick={() =>
                      setExpandedArchive(isExpanded ? null : index)
                    }
                    className="flex w-full items-center justify-between px-6 py-5 text-left md:hidden"
                  >
                    <div>
                      <p className="font-medium">{p.title}</p>
                      <p className="text-sm text-white/40">{p.year}</p>
                    </div>

                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div className="hidden md:grid md:grid-cols-[1.4fr_0.8fr_0.5fr] md:items-center md:gap-3 md:px-6 md:py-5">
                    <div>
                      <p className="font-medium">{p.title}</p>
                      <p className="text-sm text-white/50">{p.summary}</p>
                    </div>

                    <div className="text-sm text-white/40">{p.type}</div>

                    <div className="flex items-center justify-end gap-2 sm:gap-3 text-sm text-white/30">
                      <span>{p.year}</span>
                      <ProjectLinks links={p.links} />
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1 sm:gap-2">
                      {p.stack?.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[10px] text-white/60 sm:text-xs"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`grid transition-all duration-500 ease-out md:hidden ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-6 pb-5">
                      <p className="text-sm text-white/55">{p.summary}</p>

                      <div className="mt-3 text-sm text-white/40">{p.type}</div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.stack?.slice(0, 4).map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[10px] text-white/60"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex justify-end">
                        <ProjectLinks links={p.links} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
