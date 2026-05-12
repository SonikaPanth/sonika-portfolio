import ScrollReveal from "./ScrollReveal";

export default function ProjectsGallery() {
  return (
    <section className="py-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="work">
      <ScrollReveal direction="up" delay={0.1}>
        <h2 className="font-headline-lg text-headline-lg mb-16">Selected <span className="text-primary-container">Frontiers</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Project 1 */}
          <div className="md:col-span-8 group relative rounded-3xl overflow-hidden glass-panel h-[500px]">
            <img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
              src="/assets/project1.png" alt="The Vortex Dashboard" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500">

              <h3 className="font-headline-md text-headline-md mb-4">MNNIT Connect Hub</h3>
              <div className="flex items-center justify-between">
                <p className="text-on-surface-variant font-body-md text-body-md max-w-md">
                  MNNIT Connect Hub is a networking platform designed specifically for the students of Motilal Nehru National Institute of Technology (MNNIT). This platform aims to bridge the gap between current students and alumni, fostering collaboration and interaction across different graduating years.</p>
                <a className="flex items-center gap-2 font-bold text-primary group/link" href="https://project-2024-chi.vercel.app/ ">
                  Live Demo <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="md:col-span-4 group relative rounded-3xl overflow-hidden glass-panel h-[500px]">
            <img className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
              src="/assets/project2.png" alt="Neon Retail" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full">

              <h4 className="font-headline-md text-headline-md mb-2">Task Manager</h4>
              <p className="text-on-surface-variant font-body-md text-body-md mb-6">Immersive shopping for digital assets.</p>
              <a className="inline-block p-3 rounded-full glass-panel border-white/20 hover:border-secondary transition-colors" href="https://elite-fit-task-ten.vercel.app/">
                <span className="material-symbols-outlined" data-icon="open_in_new">open_in_new</span>
              </a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="md:col-span-12 group relative rounded-3xl overflow-hidden glass-panel h-[400px]">
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <div className="font-label-sm text-label-sm text-tertiary-fixed-dim mb-4">MOBILE APP</div>
                <h3 className="font-headline-md text-headline-md mb-4">Neural Node Mobile</h3>
                <p className="text-on-surface-variant font-body-md text-body-md mb-8">A decentralized social networking mobile app focusing on privacy and p2p communication layers.</p>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary-container" data-icon="phone_iphone">phone_iphone</span>
                  <span className="material-symbols-outlined text-primary-container" data-icon="shield">shield</span>
                  <span className="material-symbols-outlined text-primary-container" data-icon="hub">hub</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative overflow-hidden">
                <img className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKOb3eL6I08OiHhGt1WoPXsmBIGSOU1wxwN-jQin-ABAOLivJJ44ReK1QROrwaQYymitGRq9J0nqxcuG9Cv-l9KXHdTGAfOFY7pBe1hsG8aIFYYRPhWYrGYmxjSnb3r6RfGA6b8wY88iyTbybADpZ-yerAx3Z4zMhrun4fHvxCJkBz3v6-Fc-Wj3cGIqPflSSKF5oPVz4KivWy9aFDURfIN04hSCLoCTVVF-xMMjiDqDBa1ZanWT7wRCHeo8FdBhgPbbUtbJCVU3oM" alt="Neural Node Mobile" />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
