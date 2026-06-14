import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
  };

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kushal-kandel/" },
    { label: "Github", href: "https://github.com/kushal2061/" },
    { label: "Email", href: "mailto:kushalkandel25@gmail.com" },
  ];

  return (
    <footer className="border-t border-ink/8 dark:border-white/5 py-10 bg-surface dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold tracking-widest text-xl text-ink dark:text-text-dark">
          Kushal<span className="text-primary dark:text-gold-dm">.</span>
        </span>
        <p className="text-ink-muted dark:text-muted-dark text-sm">
          © 2025 Kushal. All rights reserved.
        </p>
        <div className="flex gap-6 text-ink-muted dark:text-muted-dark text-sm">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary dark:hover:text-gold-dm transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
