import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { dark, setDark } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleContact = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
    setOpen(false);
  };

  const links = [
    { label: "Home", to: "/" },
    { label: "About Me", to: "/about" },
    { label: "Work", to: "/work" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/95 dark:bg-bg-dark/95 backdrop-blur-md shadow-sm border-b border-ink/5 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-2xl font-bold tracking-wide text-ink dark:text-text-dark"
        >
          Kushal<span className="text-primary dark:text-gold-dm">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm tracking-widest uppercase transition-colors font-medium relative group ${
                pathname === l.to
                  ? "text-primary dark:text-gold-dm"
                  : "text-ink dark:text-white hover:text-primary dark:hover:text-gold-dm"
              }`}
            >
              {l.label}
              {pathname === l.to && (
                <span className="absolute -bottom-1 left-0 w-full h-px bg-primary dark:bg-gold-dm" />
              )}
            </Link>
          ))}

          <button
            onClick={handleContact}
            className="flex items-center gap-2 bg-primary dark:bg-primary-dm text-white text-sm tracking-widest uppercase px-6 py-2.5 hover:bg-primary-dark transition-all duration-300 font-medium rounded-sm"
          >
            Contact Me
          </button>

          {/* Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 flex items-center justify-center border border-ink/15 dark:border-white/15 text-ink dark:text-white hover:border-primary dark:hover:border-gold-dm hover:text-primary dark:hover:text-gold-dm transition-all duration-300 rounded-sm"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 flex items-center justify-center border border-ink/15 dark:border-white/15 text-ink dark:text-white transition-all duration-300 rounded-sm"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            className="text-ink dark:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-surface dark:bg-surface-dark border-t border-ink/5 dark:border-white/5 px-6 py-6 flex flex-col gap-6 shadow-lg">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase text-ink dark:text-white hover:text-primary dark:hover:text-gold-dm transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={handleContact}
            className="text-sm tracking-widest uppercase text-primary dark:text-gold-dm font-semibold text-left"
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
}
