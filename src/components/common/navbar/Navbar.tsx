import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

const sections = ["#hero", "#about", "#skills", "#projects", "#experience", "#contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const current = sections.find((id) => {
        const el = document.querySelector(id);
        if (!el) return false;

        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
            className="rounded-full border border-white/15 px-5 py-2 text-sm text-white transition hover:bg-white/5"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;