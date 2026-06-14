const skillGroups = [
  {
    category: "Frontend",
    color: "text-primary dark:text-primary-dm",
    bg: "bg-primary/10 dark:bg-primary-dm/10",
    border: "border-primary/20 dark:border-primary-dm/20",
    line: "bg-primary dark:bg-primary-dm",
    skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js"],
  },
  {
    category: "Backend",
    color: "text-teal dark:text-teal-dm",
    bg: "bg-teal/10 dark:bg-teal-dm/10",
    border: "border-teal/20 dark:border-teal-dm/20",
    line: "bg-teal dark:bg-teal-dm",
    skills: ["Python", "Django", "REST API"],
  },
  {
    category: "Tools & Technologies",
    color: "text-warm dark:text-warm-dm",
    bg: "bg-warm/10 dark:bg-warm-dm/10",
    border: "border-warm/20 dark:border-warm-dm/20",
    line: "bg-warm dark:bg-warm-dm",
    skills: ["GitHub", "Git", "Vercel", "Render"],
  },
];

export default function Skills() {
  return (
    <section className="py-32 bg-bg dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-teal dark:bg-teal-dm" />
          <p className="text-warm dark:text-warm-dm text-xs tracking-[0.4em] uppercase font-semibold">
            Expertise
          </p>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-ink dark:text-text-dark">
          Tools I{" "}
          <span className="text-primary dark:text-gold-dm italic">Use</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`border ${group.border} bg-surface dark:bg-surface-dark p-8 rounded-sm hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-300 relative overflow-hidden group`}
            >
              {/* Animated left line */}
              <div
                className={`absolute top-0 left-0 w-0.5 h-0 ${group.line} group-hover:h-full transition-all duration-500`}
              />

              <div
                className={`inline-block px-3 py-1 ${group.bg} rounded-sm mb-6`}
              >
                <span
                  className={`text-xs tracking-widest uppercase font-semibold ${group.color}`}
                >
                  {group.category}
                </span>
              </div>

              <ul className="flex flex-col gap-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-ink-light dark:text-text-dark-2 text-sm"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${group.line}`}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
