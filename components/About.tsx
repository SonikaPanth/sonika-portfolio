import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      className="py-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      id="about"
    >
      <ScrollReveal direction="up" delay={0.1}>
        <div className="flex flex-col md:flex-row gap-24 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="font-headline-lg text-headline-lg mb-8 text-primary">
              The Vision
            </h2>
            <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg">
              <p>
                I believe modern applications should feel effortless — fast,
                responsive, and deeply intuitive. My mission is to build digital
                experiences that combine clean engineering with meaningful user
                interaction.
              </p>
              <p>
                With experience developing scalable web and mobile applications
                using React and React Native, I bridge the gap between elegant
                frontend experiences and high-performance technical
                architecture. From optimizing product performance to crafting
                seamless cross-platform interfaces, I focus on building
                applications that are both visually polished and engineered to
                scale.
              </p>
              <div className="pt-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-[1px] bg-primary"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                    Based in India
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative w-80 h-96 glass-panel rounded-xl overflow-hidden flex items-center justify-center border-white/10">
                {/* Using a placeholder or the actual image from Stitch */}
                <img
                  alt="Sonika Panth Profile"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="/assets/profile_pic.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
