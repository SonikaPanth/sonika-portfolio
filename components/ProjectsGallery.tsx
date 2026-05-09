import ScrollReveal from "./ScrollReveal";

export default function ProjectsGallery() {
  return (
    <section className="py-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="work">
      <ScrollReveal direction="up" delay={0.1}>
        <h2 className="font-headline-lg text-headline-lg mb-16">Selected <span className="text-primary-container">Frontiers</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Project 1 */}
          <div className="md:col-span-8 group relative rounded-3xl overflow-hidden glass-panel h-[500px]">
            <img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ1WaUMmgdhY0-WVzEjjaKiiRoki5c1-aMAaL_NJrV6TMXjeTGEdZ0XwF7Oaw52gjjfBgmv-mfoftm9PYnSr49PdrzEOpNsgHcGyz4JqJKeW7X4wWtGs-srwpEDCOsgGk-5lR82fFLjTYQLgNoURc9gQdu9Y1FhWPTatIGjX0Zxuqb9w2k-CmKGKcEPZHSNNBIMFGotqozVce4hXx2CVDn2wsNrzR8zUj4ipiRLVBXI-No_ZYlD--4bSNY0qflENShICOvHWuEghT6" alt="The Vortex Dashboard"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <div className="font-label-sm text-label-sm text-primary mb-4">WEBGL EXPERIMENT</div>
              <h3 className="font-headline-md text-headline-md mb-4">The Vortex Dashboard</h3>
              <div className="flex items-center justify-between">
                <p className="text-on-surface-variant font-body-md text-body-md max-w-md">A real-time 3D data visualization suite built with Three.js and React, processing millions of data points per second.</p>
                <a className="flex items-center gap-2 font-bold text-primary group/link" href="#">
                  Live Demo <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="md:col-span-4 group relative rounded-3xl overflow-hidden glass-panel h-[500px]">
            <img className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWrF3e7WfFr1jMSyGzfMJTNzZf6msDpD4YklHqW4aSyq_QOXdOak4Xht_NoXYGHlKg5URqFYjdTETFLZR6GbmVxezKX1ji_5nl-_msS_rAlb-0a8lD9J1m3T1CR2_kP57dxPYIzhVkbpBv6E7VlPKU8ALVjWFEVvmLsoYvxOEf1b1-ua-_JCcQHuM1YwB7cb69ZLU5AnXhdheYZjwzwEb8yJvK4DhFHbk2Io8tzLlffevkIr9t6322wBrI3nZpb2HQQ2KFnL4Lqbm5" alt="Neon Retail"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="font-label-sm text-label-sm text-secondary mb-3">E-COMMERCE</div>
              <h4 className="font-headline-md text-headline-md mb-2">Neon Retail</h4>
              <p className="text-on-surface-variant font-body-md text-body-md mb-6">Immersive shopping for digital assets.</p>
              <a className="inline-block p-3 rounded-full glass-panel border-white/20 hover:border-secondary transition-colors" href="#">
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
                <img className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKOb3eL6I08OiHhGt1WoPXsmBIGSOU1wxwN-jQin-ABAOLivJJ44ReK1QROrwaQYymitGRq9J0nqxcuG9Cv-l9KXHdTGAfOFY7pBe1hsG8aIFYYRPhWYrGYmxjSnb3r6RfGA6b8wY88iyTbybADpZ-yerAx3Z4zMhrun4fHvxCJkBz3v6-Fc-Wj3cGIqPflSSKF5oPVz4KivWy9aFDURfIN04hSCLoCTVVF-xMMjiDqDBa1ZanWT7wRCHeo8FdBhgPbbUtbJCVU3oM" alt="Neural Node Mobile"/>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
