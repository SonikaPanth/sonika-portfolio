import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProjectsGallery from "@/components/ProjectsGallery";
import Contact from "@/components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 mt-unit bg-white/5 backdrop-blur-[20px] border-b border-white/10 shadow-[0px_10px_40px_rgba(0,212,255,0.1)]">
        <nav className="max-w-container-max mx-auto px-margin-desktop h-20 flex justify-between items-center">
          <div className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface">
            Sonika Panth
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a
              className="font-label-sm text-label-sm text-primary border-b-2 border-primary pb-1"
              href="#work"
            >
              Work
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href="#qualifications"
            >
              Expertise
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href="#about"
            >
              About
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href="#contact"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span
              className="material-symbols-outlined text-primary-fixed-dim"
              data-icon="terminal"
            >
              terminal
            </span>
            <button
              className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-sm
             text-label-sm hover:scale-110 hover:shadow-[0px_0px_20px_rgba(168,232,255,0.4)] 
             transition-all duration-400"
            >
              <Link href="/assets/Sonika_Panth_Resume.pdf" target="_blank">
                Resume
              </Link>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <ProjectsGallery />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative w-full py-12 bg-background border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-unit">
          <div className="font-headline-md text-headline-md text-primary">
            Sonika Panth
          </div>
          <div className="text-on-surface-variant font-body-md text-body-md opacity-80 hover:opacity-100 transition-opacity">
            © {new Date().getFullYear()} Sonika Panth. Crafted for the Digital
            Frontier.
          </div>
          <div className="flex gap-8">
            <a
              className="text-on-surface-variant hover:text-secondary transition-all duration-300 font-body-md"
              href="#"
            >
              LinkedIn
            </a>
            <a
              className="text-on-surface-variant hover:text-secondary transition-all duration-300 font-body-md"
              href="#"
            >
              GitHub
            </a>
            <a
              className="text-on-surface-variant hover:text-secondary transition-all duration-300 font-body-md"
              href="#"
            >
              Dribbble
            </a>
            <a
              className="text-on-surface-variant hover:text-secondary transition-all duration-300 font-body-md"
              href="#"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>

      {/* Bottom Nav for Mobile */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] glass-panel rounded-full py-4 px-8 flex justify-around items-center shadow-2xl">
        <a className="flex flex-col items-center text-primary" href="#work">
          <span className="material-symbols-outlined" data-icon="grid_view">
            grid_view
          </span>
        </a>
        <a
          className="flex flex-col items-center text-on-surface-variant"
          href="#experience"
        >
          <span className="material-symbols-outlined" data-icon="psychology">
            psychology
          </span>
        </a>
        <a
          className="flex flex-col items-center text-on-surface-variant"
          href="#about"
        >
          <span className="material-symbols-outlined" data-icon="person">
            person
          </span>
        </a>
        <a
          className="flex flex-col items-center text-on-surface-variant"
          href="#contact"
        >
          <span className="material-symbols-outlined" data-icon="send">
            send
          </span>
        </a>
      </div>
    </>
  );
}
