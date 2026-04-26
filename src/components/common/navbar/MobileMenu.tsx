import { useEffect, useRef } from "react";
import { animateMobileMenu } from "../../../animations/navbar";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!isOpen || !menuRef.current || !linksRef.current) return;

    const tl = animateMobileMenu({
      menu: menuRef.current,
      links: linksRef.current,
    });

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-[60] bg-black px-6 pt-32 md:hidden"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 z-[70] inline-flex h-10 w-10 items-center justify-center"
        aria-label="Close menu"
      >
        <span className="absolute block h-0.5 w-5 rotate-45 rounded-full bg-white" />
        <span className="absolute block h-0.5 w-5 -rotate-45 rounded-full bg-white" />
      </button>

      <ul ref={linksRef} className="flex flex-col gap-10">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={onClose}
              className="text-3xl font-semibold text-white transition-opacity hover:opacity-80 active:opacity-60"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-14 inline-flex w-fit rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5 active:scale-[0.98] active:opacity-80"
      >
        Resume
      </a>
    </div>
  );
};

export default MobileMenu;
