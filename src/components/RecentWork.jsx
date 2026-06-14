import { useState } from "react";
import projects from "../data/projects";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function RecentWork() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-24 bg-bg-2 dark:bg-bg-dark-2">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER (RESTORED) */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-teal dark:bg-teal-dm" />
              <p className="text-warm dark:text-warm-dm text-xs tracking-[0.4em] uppercase font-semibold">
                Portfolio
              </p>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink dark:text-text-dark">
              Recent Work
            </h2>
          </div>

          {/* VIEW ALL (DESKTOP) */}
          <Link
            to="/work"
            className="hidden md:flex items-center gap-2 text-primary dark:text-gold-dm text-sm tracking-widest uppercase font-medium hover:gap-4 transition-all duration-300"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects
            .filter((p) => p.featured)
            .slice(0, 6)
            .map((project, i) => (
              <div
                key={i}
                onClick={() => setSelected(project)}
                className="group cursor-pointer bg-surface dark:bg-surface-dark rounded-sm overflow-hidden border border-ink/10 dark:border-white/10 hover:-translate-y-1 transition"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-xs uppercase tracking-widest">
                      Click to Preview
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg text-ink dark:text-text-dark">
                    {project.title}
                  </h3>

                  <p className="text-sm text-ink-light dark:text-text-dark-2">
                    {project.description.slice(0, 85)}...
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm bg-ink/5 dark:bg-white/10 text-ink dark:text-text-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(project);
                    }}
                    className="text-sm font-medium text-primary dark:text-gold-dm hover:underline"
                  >
                    Preview Project →
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* VIEW ALL (MOBILE) */}
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-primary dark:text-gold-dm text-sm tracking-widest uppercase border border-primary dark:border-gold-dm px-8 py-3 hover:bg-primary dark:hover:bg-gold-dm hover:text-white transition-all duration-300 rounded-sm"
          >
            View All Work <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-surface dark:bg-surface-dark max-w-3xl w-full mx-4 rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-primary"
            >
              <X size={18} />
            </button>

            {/* IMAGE */}
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full max-h-[60vh] object-cover"
            />

            {/* CONTENT */}
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-ink dark:text-text-dark">
                {selected.title}
              </h3>

              <p className="text-sm text-ink-light dark:text-text-dark-2">
                {selected.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {selected.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs uppercase tracking-widest px-2 py-1 rounded-sm bg-ink/5 dark:bg-white/10 text-ink dark:text-text-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* LIVE LINK */}
              <a
                href={selected.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary dark:text-gold-dm text-sm font-medium mt-3 hover:gap-3 transition"
              >
                Open Live Project <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
