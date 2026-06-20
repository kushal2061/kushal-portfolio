import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail, IoCall } from "react-icons/io5";
import image from "/images/about.jpg";
import Skills from "../components/Skills";

const skills = {
  Frontend: ["React.js", "JavaScript", "HTML5", "CSS3"],
  Backend: ["Django", "Python", "REST APIs"],
  Tools: ["MySQL", "Git", "GitHub", "Vercel"],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* LEFT TEXT */}
          <div>
            <p className="text-warm text-xs tracking-[0.4em] uppercase mb-4 font-semibold">
              About Me
            </p>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-ink dark:text-text-dark mb-6">
              Full Stack Web Developer
            </h1>

            <p className="text-ink-light dark:text-text-dark-2 leading-relaxed mb-8">
              Full-stack web developer specializing in React.js and Django.
              Experienced in building API-driven web applications with
              authentication, database design, and responsive UI development.
              Passionate about creating scalable and secure web applications.
            </p>

            {/* CONTACT */}
            <div className="space-y-3 text-sm text-ink-light dark:text-text-dark-2">
              <div className="flex items-center gap-2">
                <IoMail /> kushalkandel25@gmail.com
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/kushal2061"
                  target="_blank"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/kushal-kandel"
                  target="_blank"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <div className="aspect-square rounded-sm overflow-hidden border border-ink/10 dark:border-white/10 shadow-lg">
              <img
                src={image}
                alt="profile"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <Skills />
      </div>
    </div>
  );
}
