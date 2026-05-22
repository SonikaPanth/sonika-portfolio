import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "MNNIT Connect Hub",
    category: "NETWORKING PLATFORM",
    description:
      "A networking platform for MNNIT students and alumni — bridging the gap across graduating years with collaboration and interaction tools.",
    image: "/assets/project1.png",
    link: "https://project-2024-chi.vercel.app/",
    accentClass: "text-primary",
  },
  {
    title: "Task Manager",
    category: "PRODUCTIVITY APP",
    description:
      "A sleek task management application with intuitive UI for organizing, tracking, and completing tasks efficiently.",
    image: "/assets/project2.png",
    link: "https://elite-fit-task-ten.vercel.app/",
    accentClass: "text-secondary",
  },
  {
    title: "ToolifyX",
    category: "AI POWERED TOOLS",
    description:
      "A browser-native productivity platform providing AI-powered and utility-based tools for students, developers, and professionals.",
    image: "/assets/project3.png",
    link: "https://toolify-x-9sct-qou8nztq1-sonika-panths-projects.vercel.app/",
    accentClass: "text-primary-container",
  },
];

export default function ProjectsGallery() {
  return (
    <section
      className="py-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      id="work"
    >
      <ScrollReveal direction="up" delay={0.1}>
        <h2 className="font-headline-lg text-headline-lg mb-16">
          Selected <span className="text-primary-container">Frontiers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden glass-panel flex flex-col"
            >
              {/* Image Container — fixed aspect ratio */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <span
                  className={`font-label-sm text-label-sm text-${project.accentClass} tracking-widest uppercase mb-3`}
                >
                  {project.category}
                </span>
                <h3 className="font-headline-md text-[22px] leading-tight mb-3 text-on-surface">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant font-body-md text-[14px] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <a
                  className="inline-flex items-center gap-2 font-bold text-primary text-sm group/link hover:gap-4 transition-all duration-300"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <span
                    className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
