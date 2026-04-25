type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

type Props = {
  active: string;
};

const NavLinks = ({ active }: Props) => {
  return (
    <ul className="flex items-center gap-8">
      {navItems.map((item) => {
        const isActive = active === item.href;

        return (
          <li key={item.href}>
            <a
              href={item.href}
              className={`text-sm font-medium transition ${
                isActive
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;