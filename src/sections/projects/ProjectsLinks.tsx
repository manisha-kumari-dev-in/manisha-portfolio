import { ExternalLink } from "lucide-react";
import githubIcon from "../../assets/icons/github.svg";

export type ProjectLink = {
  type: "github" | "external";
  url: string;
};

export const ProjectLinks = ({ links = [] }: { links?: ProjectLink[] }) => {
  if (!links.length) return null;
  const base =
    "flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition hover:border-white/20 hover:bg-white/[0.06] hover:scale-105";

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {links.map((link, i) => {
        if (link.type === "github") {
          return (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={base}
            >
              <img src={githubIcon} className="h-4 w-4" alt="GitHub" />
            </a>
          );
        }

        if (link.type === "external") {
          return (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={base}
            >
              <ExternalLink size={14} />
            </a>
          );
        }

        return null;
      })}
    </div>
  );
};
