import { motion } from "framer-motion";
import { ChevronRight, PenTool, Terminal, BarChart, Pen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useParallaxScroll } from "@/hooks/useParallaxScroll";

const services = [
  {
    title: "Brand Identity",
    desc: "Logo design, visual systems, and strategic brand positioning.",
    icon: <PenTool className="w-6 h-6" />,
    dark: true,
  },
  {
    title: "Digital Media",
    desc: "UI/UX design, web solutions, and creative collaborations.",
    icon: <Terminal className="w-6 h-6" />,
    dark: false,
  },
  {
    title: "Digital Business Solutions",
    desc: "Custom software, specialized digital tools, and technical integrations built to scale your operations.",
    icon: <BarChart className="w-6 h-6" />,
    dark: false,
  },
  {
    title: "Content Creation",
    desc: "Engaging content strategies designed to elevate your brand's digital presence.",
    icon: <Pen className="w-6 h-6" />,
    dark: false,
  },
];

export function ServicesSection() {
  const sectionRef = useParallaxScroll();

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-slate-50 relative z-10 overflow-hidden min-h-screen flex items-center">
      {/* Wireframe blueprint background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', 
          backgroundSize: '4rem 4rem',
          backgroundPosition: 'center center'
        }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Title Block (Frosted Glass) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 bg-white/70 backdrop-blur-xl border border-slate-200/80 shadow-2xl shadow-[#15294A]/5 relative"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#15294A] leading-[1.15]">
              What Do You Need? <br /> We Can Do It.
            </h2>
            <p className="text-[#4B5A75] text-lg leading-relaxed">
              From responsive websites to full brand identities — we design, build, and deliver with clarity, precision, and purpose. We handle the complexities so you can focus on growth.
            </p>
          </motion.div>

          {/* Right Bento Grid */}
          <div className="grid sm:grid-cols-2 gap-6 relative">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={i % 2 !== 0 ? "sm:mt-12 sm:-mb-12" : ""}
              >
                <Card 
                  className={`p-8 h-full rounded-none backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between border ${
                    service.dark 
                      ? 'bg-[#15294A]/95 text-white border-[#15294A] shadow-[#15294A]/20' 
                      : 'bg-white/70 text-[#15294A] border-slate-200/80 shadow-slate-200/50'
                  }`}
                >
                  <div>
                    <div className="mb-6">
                      {service.icon}
                    </div>
                    <h3 className={`text-lg font-bold mb-3 ${service.dark ? 'text-[#D4AF37]' : ''}`}>{service.title}</h3>
                    <p className={`text-sm mb-8 leading-relaxed ${service.dark ? 'text-slate-300' : 'text-[#4B5A75]'}`}>
                      {service.desc}
                    </p>
                  </div>
                  <button className={`flex items-center text-sm font-bold group w-fit ${service.dark ? 'text-white' : 'text-[#15294A]'}`}>
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Card>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
