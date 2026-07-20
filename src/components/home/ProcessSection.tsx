import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We begin by understanding your business, objectives, audience, and challenges. Every project starts with listening before planning.",
    rotate: "rotate-2",
  },
  {
    num: "02",
    title: "Strategize",
    desc: "We develop the right approach—whether it's a brand identity, website, digital solution, or project plan—designed around your goals.",
    rotate: "-rotate-2",
  },
  {
    num: "03",
    title: "Create",
    desc: "Our team brings the strategy to life through thoughtful design, engaging content, technical development, and careful execution.",
    rotate: "rotate-1",
  },
  {
    num: "04",
    title: "Deliver & Grow",
    desc: "We launch, refine, and provide ongoing support to ensure your solution continues to deliver value as your business grows.",
    rotate: "-rotate-3",
  },
];

const ProcessCard = ({ step, index }: { step: typeof steps[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl shadow-[#15294A]/5 border border-slate-200/60 relative transform ${step.rotate} hover:rotate-0 hover:-translate-y-2 transition-all duration-300 z-10`}
  >
    {/* The Pin/Screw */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#15294A] border-4 border-white shadow-sm flex items-center justify-center">
      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full opacity-50" />
    </div>

    <h4 className="text-2xl font-bold text-[#15294A] mb-3">
      <span className="text-[#D4AF37] font-black mr-2 text-sm uppercase tracking-widest block mb-1">
        {step.num}
      </span>
      {step.title}
    </h4>
    <p className="text-[#4B5A75] text-sm leading-relaxed">
      {step.desc}
    </p>
  </motion.div>
);

// Connector draws a curved dashed line from the center of current item to the center of the next item
const Connector = ({ direction, heightClass = "h-[calc(100%+6rem)]" }: { direction: 'right' | 'left', heightClass?: string }) => (
  <div 
    className={`hidden md:block absolute top-[50%] ${direction === 'right' ? 'left-[50%]' : 'right-[50%]'} w-[100%] ${heightClass} z-0 pointer-events-none opacity-40`}
  >
    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
      {direction === 'right' ? (
        <path d="M 0,0 C 50,0 50,100 100,100" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6,6" vectorEffect="non-scaling-stroke" />
      ) : (
        <path d="M 100,0 C 50,0 50,100 0,100" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6,6" vectorEffect="non-scaling-stroke" />
      )}
    </svg>
  </div>
);

export function ProcessSection() {
  return (
    <section
      id="process"
      className="pt-24 pb-48 md:pb-64 bg-white relative z-10 overflow-hidden"
    >
      {/* Blueprint Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
          backgroundPosition: 'center center'
        }}
      />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">

        {/* Single Column Alternating Layout */}
        <div className="flex flex-col space-y-24 relative">

          {/* 0. Text Block (Left) */}
          <div className="w-full md:w-1/2 self-start flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-sm text-center md:text-left z-10 bg-white/50 backdrop-blur-sm p-4 rounded-3xl"
            >

              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#15294A] leading-tight">
                Let us show you how we drive your brand to <span className="text-[#D4AF37]">new heights</span>
              </h2>
              <p className="text-[#4B5A75] text-lg leading-relaxed">
                A proven, structured approach ensures transparency and exceptional quality from the first meeting to final delivery.
              </p>
            </motion.div>
            <Connector direction="right" />
          </div>

          {/* 1. Step 01 (Right) */}
          <div className="w-full md:w-1/2 self-end flex justify-center relative">
            <ProcessCard step={steps[0]} index={0} />
            <Connector direction="left" />
          </div>

          {/* 2. Step 02 (Left) */}
          <div className="w-full md:w-1/2 self-start flex justify-center relative">
            <ProcessCard step={steps[1]} index={1} />
            <Connector direction="right" />
          </div>

          {/* 3. Step 03 (Right) */}
          <div className="w-full md:w-1/2 self-end flex justify-center relative">
            <ProcessCard step={steps[2]} index={2} />
            <Connector direction="left" />
          </div>

          {/* 4. Step 04 (Left) */}
          <div className="w-full md:w-1/2 self-start flex justify-center relative">
            <ProcessCard step={steps[3]} index={3} />
            <Connector direction="right" heightClass="h-[calc(50%+7rem)]" />
          </div>

          {/* 5. Ready Text (Right) */}
          <div className="w-full md:w-1/2 self-end flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="w-full max-w-sm text-center font-caveat text-3xl text-[#15294A] transform -rotate-2 z-10 mt-4"
            >
              Ready to be delivered!
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
