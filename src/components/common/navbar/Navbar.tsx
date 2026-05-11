import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const sections = [
  "#hero",
  "#about",
  "#skills",
  "#projects",
  "#experience",
  "#contact",
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("#hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const current = sections.find((id) => {
        const el = document.querySelector(id);
        if (!el) return false;

        const rect = el.getBoundingClientRect();
        const trigger = window.innerHeight * 0.3;

        return rect.top <= trigger && rect.bottom >= trigger;
      });

      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 md:px-10 ${
            isScrolled
              ? "h-16 border-b border-white/10 bg-black/50 backdrop-blur-2xl"
              : "h-20 bg-transparent"
          }`}
        >
          <a href="#hero" className="text-xl font-semibold text-white">
            Manisha Kumari
          </a>

          <div className="hidden md:block">
            <NavLinks active={active} />
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-5 py-2 text-sm text-white transition hover:bg-white/5"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-5 rounded-full bg-white" />
            <span className="block h-0.5 w-5 rounded-full bg-white" />
            <span className="block h-0.5 w-5 rounded-full bg-white" />
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
