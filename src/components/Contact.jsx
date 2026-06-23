import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY",
      );

      setSent(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-surface dark:bg-surface-dark border border-ink/15 dark:border-white/10 text-ink dark:text-text-dark px-5 py-4 focus:outline-none focus:border-primary dark:focus:border-gold-dm transition-colors placeholder-ink-muted dark:placeholder-muted-dark text-sm rounded-sm";

  return (
    <section id="contact" className="py-32 bg-bg dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-teal dark:bg-teal-dm" />
            <p className="text-warm dark:text-warm-dm text-xs tracking-[0.4em] uppercase font-semibold">
              Get In Touch
            </p>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-ink dark:text-text-dark">
            Let's Work
            <br />
            <span className="text-primary dark:text-gold-dm italic">
              Together
            </span>
          </h2>

          <p className="text-ink-light dark:text-text-dark-2 leading-relaxed mb-12 max-w-md">
            Have a project in mind? Whether it's a brand video, social media
            content, or graphic design — I'd love to hear about it.
          </p>

          <div className="flex flex-col gap-6">
            {[
              { icon: Mail, text: "kushalkandel25@gmail.com" },
              { icon: MapPin, text: "Kathmandu, Nepal" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-4 text-ink-light dark:text-text-dark-2"
              >
                <div className="w-10 h-10 bg-primary/10 dark:bg-primary-dm/10 flex items-center justify-center flex-shrink-0 rounded-sm">
                  <Icon
                    size={18}
                    className="text-primary dark:text-primary-dm"
                  />
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {sent && (
            <div className="border border-teal/40 bg-teal/10 text-teal dark:text-teal-dm px-4 py-3 text-sm font-medium rounded-sm">
              ✓ Message sent! I'll get back to you soon.
            </div>
          )}

          {error && (
            <div className="border border-primary/40 bg-primary/10 text-primary dark:text-primary-dm px-4 py-3 text-sm rounded-sm">
              {error}
            </div>
          )}

          <div>
            <label className="text-xs tracking-widest uppercase text-ink-muted dark:text-muted-dark block mb-2">
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className={inputCls}
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-xs tracking-widest uppercase text-ink-muted dark:text-muted-dark block mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className={inputCls}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="text-xs tracking-widest uppercase text-ink-muted dark:text-muted-dark block mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className={`${inputCls} resize-none`}
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-3 bg-primary dark:bg-primary-dm text-white font-medium tracking-widest uppercase px-8 py-4 hover:bg-primary-dark transition-all duration-300 text-sm disabled:opacity-60 rounded-sm shadow-lg shadow-primary/20"
          >
            <Send size={16} />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
