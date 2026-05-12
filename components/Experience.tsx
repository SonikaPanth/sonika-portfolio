import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <>
      {/* Experience Section */}
      <section className="py-[120px] px-margin-mobile md:px-margin-desktop bg-surface-container-lowest" id="experience">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg mb-16 text-center">Professional <span className="text-primary">Journey</span></h2>
            <div className="max-w-4xl mx-auto">
              <div className="glass-panel p-10 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <span className="material-symbols-outlined text-[140px]" data-icon="corporate_fare">corporate_fare</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="material-symbols-outlined text-primary-container text-3xl" data-icon="developer_mode">developer_mode</span>
                      <h3 className="font-headline-md text-headline-md">Associate Software Engineer</h3>
                    </div>
                    <p className="font-body-lg text-primary text-xl">Antino Labs, Gurgaon</p>
                  </div>
                  <span className="px-6 py-2 glass-panel rounded-full font-label-sm text-label-sm border-primary/30 text-primary-container">Present</span>
                </div>
                <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed mb-8 max-w-2xl">
                  Engineering scalable web architectures and immersive digital products. Working at the intersection of performance and design to deliver high-impact software solutions for global clients.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1 glass-panel text-[11px] rounded-full uppercase font-bold tracking-widest text-on-surface/70">Full Stack</span>
                  <span className="px-4 py-1 glass-panel text-[11px] rounded-full uppercase font-bold tracking-widest text-on-surface/70">React</span>
                  <span className="px-4 py-1 glass-panel text-[11px] rounded-full uppercase font-bold tracking-widest text-on-surface/70">Next.js</span>
                  <span className="px-4 py-1 glass-panel text-[11px] rounded-full uppercase font-bold tracking-widest text-on-surface/70">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Qualifications Section */}
      <section className="py-[120px] px-margin-mobile md:px-margin-desktop" id="qualifications">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg mb-20 text-center">Academic <span className="text-secondary">Foundation</span></h2>
            <div className="max-w-4xl mx-auto relative pl-12 md:pl-20">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[23px] md:left-[39px] top-4 bottom-4 timeline-line"></div>

              {/* MCA Entry */}
              <div className="relative mb-20 group">
                <div className="absolute -left-[50px] md:-left-[66px] top-0 w-12 h-12 rounded-full glass-panel border-primary/50 flex items-center justify-center bg-background z-10 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary" data-icon="school">school</span>
                </div>
                <div className="glass-panel p-8 rounded-2xl">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                    <h3 className="font-headline-md text-2xl md:text-3xl text-on-surface">Master of Computer Applications (MCA)</h3>
                    <span className="font-label-sm text-primary tracking-widest">2022 - 2025</span>
                  </div>
                  <p className="text-on-surface-variant font-body-lg text-body-lg">Motilal Nehru National Institute of Technology, Allahabad</p>
                </div>
              </div>

              {/* BCA Entry */}
              <div className="relative group">
                <div className="absolute -left-[50px] md:-left-[66px] top-0 w-12 h-12 rounded-full glass-panel border-secondary/50 flex items-center justify-center bg-background z-10 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-secondary" data-icon="history_edu">history_edu</span>
                </div>
                <div className="glass-panel p-8 rounded-2xl">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                    <h3 className="font-headline-md text-2xl md:text-3xl text-on-surface">Bachelor of Science (B.Sc)</h3>
                    <span className="font-label-sm text-secondary tracking-widest">2018 - 2021</span>
                  </div>
                  <p className="text-on-surface-variant font-body-lg text-body-lg">St.Paul Institute Of Professional Studies, Indore</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Stack & Tools Section */}
      <section className="py-[120px] px-margin-mobile md:px-margin-desktop bg-surface-container-lowest" id="stack">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg mb-16 text-center">The Stack &amp; <span className="text-primary-container neon-text-blue">Tools</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-gutter">
              {/* React.js */}
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform" data-icon="rebase_edit">rebase_edit</span>
                <h4 className="font-label-sm text-label-sm">React.js</h4>
              </div>
              {/* Next.js */}
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform" data-icon="nest_multi_room">nest_multi_room</span>
                <h4 className="font-label-sm text-label-sm">Next.js</h4>
              </div>
              {/* React Native */}
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform" data-icon="phone_iphone">phone_iphone</span>
                <h4 className="font-label-sm text-label-sm">React Native</h4>
              </div>
              {/* Node.js */}
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform" data-icon="javascript">javascript</span>
                <h4 className="font-label-sm text-label-sm">Node.js</h4>
              </div>
              {/* MongoDB */}
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform" data-icon="database">database</span>
                <h4 className="font-label-sm text-label-sm">MongoDB</h4>
              </div>
              {/* GitHub */}
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform" data-icon="terminal">terminal</span>
                <h4 className="font-label-sm text-label-sm">GitHub</h4>
              </div>
              {/* Bitbucket */}
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform" data-icon="account_tree">account_tree</span>
                <h4 className="font-label-sm text-label-sm">Bitbucket</h4>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
