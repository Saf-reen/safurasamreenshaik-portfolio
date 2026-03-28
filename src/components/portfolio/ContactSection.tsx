import { useState } from "react";
import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";
import { Mail, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = encodeURIComponent(form.name);
    const email = encodeURIComponent(form.email);
    const message = encodeURIComponent(form.message);
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.open(
      `mailto:safurasamreenshaik@gmail.com?subject=Portfolio%20Contact&body=${body}`,
      "_self"
    );
  };

  return (
    <CinematicSection id="contact" className="py-8 md:py-10 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
            <Mail size={22} className="text-muted-foreground" />
          </div>
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body">
            Feel free to reach out for web development opportunities, freelance projects, or collaboration.
          </p>
          <h2 className="cinema-heading text-3xl md:text-4xl mb-10">Contact Full Stack Developer</h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-left"
        >
          <div>
            <label className="text-sm font-body text-muted-foreground mb-1.5 block">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-4 rounded-xl border border-border bg-background font-body text-sm
                       focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 shadow-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-body text-muted-foreground mb-1.5 block">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-4 rounded-xl border border-border bg-background font-body text-sm
                       focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 shadow-sm"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-sm font-body text-muted-foreground mb-1.5 block">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-4 rounded-xl border border-border bg-background font-body text-sm resize-none
                       focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300 shadow-sm"
              placeholder="Tell me about your project..."
            />
          </div>
          <button type="submit" className="peach-btn w-full text-center block text-sm font-bold uppercase tracking-widest py-5 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
            Send Message
          </button>
        </motion.form>
      </div>
    </CinematicSection>
  );
};

export default ContactSection;
