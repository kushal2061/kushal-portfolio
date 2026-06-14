import { useState } from "react";
import projects from "../data/projects";
import { X, ExternalLink } from "lucide-react";

const categories = ["All", "FrontEnd", "BackEnd", "Full Stack"];

export default function WorkPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <p className="text-warm dark:text-warm-dm text-xs tracking-[0.4em] uppercase mb-4 font-semibold">
          Portfolio
        </p>

        <h1 className="font-display text-5xl md:text-7xl font-black text-ink dark:text-text-dark mb-16">
          All Work
        </h1>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs tracking-widest uppercase px-6 py-3 border transition rounded-sm ${
                active === cat
                  ? "bg-primary text-white border-primary dark:bg-gold-dm dark:border-gold-dm"
                  : "border-ink/15 dark:border-white/10 text-ink-light dark:text-muted-dark hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <div
              key={index}
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

                {/* overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-xs uppercase tracking-widest">
                    View Project
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg text-ink dark:text-text-dark">
                  {project.title}
                </h3>

                <p className="text-sm text-ink-light dark:text-text-dark-2">
                  {project.description.slice(0, 80)}...
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase px-2 py-1 bg-ink/5 dark:bg-white/10 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY */}
        {filtered.length === 0 && (
          <p className="text-center text-ink-muted dark:text-muted-dark py-20">
            No projects found.
          </p>
        )}
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
              className="absolute top-4 right-4 w-9 h-9 bg-black/60 text-white rounded-full"
            >
              <X size={18} />
            </button>

            {/* IMAGE */}
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full max-h-[60vh] object-cover"
            />

            {/* INFO */}
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-ink dark:text-text-dark">
                {selected.title}
              </h3>

              <p className="text-sm text-ink-light dark:text-text-dark-2">
                {selected.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {selected.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs uppercase px-2 py-1 bg-ink/5 dark:bg-white/10 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* LINK */}
              <a
                href={selected.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary dark:text-gold-dm text-sm font-medium hover:gap-3 transition"
              >
                Open Project <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
