import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full border px-4 py-3 rounded-sm text-sm focus:outline-none";

  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

          <div className="flex items-center gap-3 mb-3">
            <Mail size={16} /> <span>your@email.com</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={16} /> <span>Kathmandu, Nepal</span>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {sent && (
            <div className="bg-green-100 text-green-700 px-3 py-2 text-sm rounded">
              Message sent successfully!
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-700 px-3 py-2 text-sm rounded">
              {error}
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className={inputCls}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className={inputCls}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className={inputCls}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white py-3 rounded flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <Send size={16} />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
