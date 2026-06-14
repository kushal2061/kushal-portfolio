import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import heroimg from "../assets/heroimg.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-bg dark:bg-bg-dark text-ink dark:text-text-dark">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* ROLE */}
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-px bg-teal dark:bg-teal-dm" />
            <p className="text-xs tracking-[0.4em] uppercase text-warm dark:text-warm-dm font-semibold">
              Full Stack Developer
            </p>
          </div>

          {/* NAME */}
          <h1 className="font-bold leading-[1.05]">
            <div className="text-5xl md:text-7xl">Hi, I'm</div>

            <div className="text-5xl md:text-7xl mt-2">
              <span className="text-primary dark:text-gold-dm">Kushal</span>{" "}
              <span className="italic font-normal text-teal dark:text-teal-dm">
                Kandel
              </span>
            </div>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl text-ink-light dark:text-text-dark-2 leading-relaxed max-w-xl">
            I build modern, responsive, and scalable web applications using
            React and Django. I focus on clean UI, smooth UX, and
            performance-first development.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 bg-primary dark:bg-primary-dm text-white font-medium uppercase text-sm px-7 py-3 rounded-sm shadow-lg shadow-primary/20 dark:shadow-primary-dm/20 hover:scale-105 transition"
            >
              View Work <ArrowRight size={16} />
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-ink/20 dark:border-white/20 text-ink dark:text-white uppercase text-sm px-7 py-3 rounded-sm hover:border-primary dark:hover:border-gold-dm hover:text-primary dark:hover:text-gold-dm transition"
            >
              <Play size={14} className="text-teal dark:text-teal-dm" />
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-end">
          {/* IMAGE WRAPPER */}
          <div className="relative">
            <img
              src={heroimg}
              alt="Kushal Kandel"
              className="w-[320px] md:w-[380px] h-[420px] object-cover rounded-2xl shadow-2xl border border-ink/10 dark:border-white/10"
            />

            {/* SOFT GLOW */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal/20 dark:bg-teal-dm/20 blur-2xl rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-primary/20 dark:bg-primary-dm/20 blur-2xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
