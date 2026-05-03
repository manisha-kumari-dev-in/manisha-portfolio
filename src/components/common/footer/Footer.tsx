const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10 bg-white/[0.02] backdrop-blur-xl py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/40 hover:text-white/60 transition">
          © {new Date().getFullYear()} Manisha Kumari. All rights reserved.
        </p>

        <p className="text-sm text-white/30 hover:text-white/60 transition">
          Built with React • GSAP • Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
