import { Code, LayoutGrid, Database } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full Stack Web Development",
    tag: "React · Django · REST APIs",
    iconColor: "text-primary dark:text-primary-dm",
    iconBg: "bg-primary/10 dark:bg-primary-dm/10",
    desc: "Building scalable and responsive web applications using modern frontend and backend technologies with a focus on performance, security, and clean architecture.",
  },
  {
    icon: LayoutGrid,
    title: "Frontend Development",
    tag: "React · UI · Responsive Design",
    iconColor: "text-teal dark:text-teal-dm",
    iconBg: "bg-teal/10 dark:bg-teal-dm/10",
    desc: "Creating modern, interactive user interfaces with React, focusing on usability, responsiveness, and clean, maintainable UI design.",
  },
  {
    icon: Database,
    title: "Backend Development",
    tag: "Django · APIs · Database Design",
    iconColor: "text-warm dark:text-warm-dm",
    iconBg: "bg-warm/10 dark:bg-warm-dm/10",
    desc: "Designing secure backend systems, REST APIs, and efficient database structures using Django and best development practices.",
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-bg-2 dark:bg-bg-dark-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-teal dark:bg-teal-dm" />
          <p className="text-warm dark:text-warm-dm text-xs tracking-[0.4em] uppercase font-semibold">
            What I Do
          </p>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-20 text-ink dark:text-text-dark">
          I can help you{" "}
          <span className="text-primary dark:text-gold-dm italic">with</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-surface dark:bg-surface-dark border border-ink/8 dark:border-white/8 p-10 hover:shadow-xl dark:hover:shadow-black/30 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden rounded-sm"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-warm-light/10 dark:bg-gold-dm/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div
                className={`w-14 h-14 ${s.iconBg} flex items-center justify-center mb-6 rounded-sm`}
              >
                <s.icon size={26} className={s.iconColor} strokeWidth={1.5} />
              </div>
              <p className="text-xs tracking-widest uppercase text-ink-muted dark:text-muted-dark mb-2">
                {s.tag}
              </p>
              <h3 className="font-display text-2xl font-bold mb-4 text-ink dark:text-text-dark">
                {s.title}
              </h3>
              <p className="text-ink-light dark:text-text-dark-2 leading-relaxed text-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
