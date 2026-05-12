'use client'

import ScrollReveal from "./ScrollReveal";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "sonner";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_effu4ue",
        "template_okfxjds",
        formRef.current,
        "dQvIXycxadBESP9q1"
      )
      .then(
        () => {
          toast.success("Signal sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send signal.");
        }
      );
  };
  return (
    <section className="py-[120px] px-margin-mobile md:px-margin-desktop bg-surface" id="contact">
      <ScrollReveal direction="up" delay={0.1}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg mb-4">Start a <span className="text-primary">Conversation</span></h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg mb-12">Have a project that needs a digital frontier? Let's build something extraordinary together.</p>
          <div className="glass-panel p-8 md:p-12 rounded-3xl text-left border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-[120px]" data-icon="mail">mail</span>
            </div>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Name</label>
                  <input className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-6 py-4 focus:border-primary-container focus:ring-0 text-on-surface transition-colors placeholder:opacity-30" placeholder="John Doe" type="text" name="user_name" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Email</label>
                  <input className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-6 py-4 focus:border-primary-container focus:ring-0 text-on-surface transition-colors placeholder:opacity-30" placeholder="john@frontier.com" type="email" name="user_email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Message</label>
                <textarea className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-6 py-4 focus:border-primary-container focus:ring-0 text-on-surface transition-colors placeholder:opacity-30" placeholder="Tell me about your vision..." rows={4} name="message"></textarea>
              </div>
              <button className="w-full py-5 bg-primary-container text-on-primary-container font-bold rounded-xl neon-glow-blue hover:scale-[1.02] active:scale-[0.98] transition-all" type="submit">Send Signal</button>
            </form>
          </div>
          <div className="mt-16 flex flex-col items-center gap-8">
            <div className="flex gap-10">
              <a className="group flex flex-col items-center gap-2" href="https://github.com/SonikaPanth">
                <div className="w-16 h-16 glass-panel rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl" data-icon="code">code</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
              </a>
              <a className="group flex flex-col items-center gap-2" href="www.linkedin.com/in/sonika-panth78">
                <div className="w-16 h-16 glass-panel rounded-full flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl" data-icon="work">work</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
              </a>

            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
