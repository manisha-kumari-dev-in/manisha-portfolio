import { useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import { animateContact } from "../../animations/contact";
import Github from "../../assets/icons/github.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import { contact } from "./contact.data";

const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const anim = animateContact(ref.current);

    return () => {
      anim?.kill();
    };
  }, []);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="contact-shell rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:p-8">
        <p className="contact-eyebrow text-sm font-medium uppercase tracking-[0.2em] text-white/45">
          Contact
        </p>

        <h2 className="contact-heading mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Let’s build something thoughtful.
        </h2>

        <p className="contact-subheading mt-5 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
          Open to thoughtful products, meaningful opportunities, and interesting
          engineering problems.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
          <a
            href={`mailto:${contact.email}`}
            className="contact-link group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-white/35">
                Email
              </p>
              <p className="mt-1 text-sm text-white/75">Connect via Email</p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition group-hover:border-white/20 group-hover:bg-white/[0.06]">
              <Mail className="h-4 w-4 text-white/70 transition group-hover:text-white" />
            </div>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-link group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-white/35">
                LinkedIn
              </p>
              <p className="mt-1 text-sm text-white/75">Connect</p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition group-hover:border-white/20 group-hover:bg-white/[0.06]">
              <img
                src={Linkedin}
                className="h-4 w-4 opacity-70 transition group-hover:opacity-100"
                alt="LinkedIn"
              />
            </div>
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="contact-link group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-white/35">
                GitHub
              </p>
              <p className="mt-1 text-sm text-white/75">View Work</p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition group-hover:border-white/20 group-hover:bg-white/[0.06]">
              <img
                src={Github}
                className="h-4 w-4 opacity-70 transition group-hover:opacity-100"
                alt="GitHub"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
