import { motion } from "framer-motion";
import { Target, Briefcase, Calendar, Wrench } from "lucide-react";
import { useParallaxScroll } from "@/hooks/useParallaxScroll";
import heroPerson from "@/assets/images/hero-person.jpg";

const points = [
  {
    title: "You have a problem worth solving",
    desc: "You know where your business is losing time, money, or opportunities. You don't need all the answers—you need the right team to help find them.",
    icon: <Target className="w-6 h-6 text-[#15294A]" />,
  },
  {
    title: "You value quality over shortcuts",
    desc: "You understand that lasting results come from thoughtful planning, strong execution, and solutions built to perform beyond launch day.",
    icon: <Briefcase className="w-6 h-6 text-[#15294A]" />,
  },
  {
    title: "You're looking for a trusted partner",
    desc: "You want a team that listens, communicates clearly, and works alongside you—not just another service provider ticking off tasks.",
    icon: <Calendar className="w-6 h-6 text-[#15294A]" />,
  },
  {
    title: "You're building for the future",
    desc: "Whether you're improving operations, strengthening your brand, or embracing digital transformation, you're investing in solutions that can grow with your business.",
    icon: <Wrench className="w-6 h-6 text-[#15294A]" />,
  },
];

export function WhoWeWorkWithSection() {
  const sectionRef = useParallaxScroll();

  return (
    <section
      ref={sectionRef}
      id="who-we-work-with"
      className="pt-24 pb-32 lg:pb-40 bg-[#15294A] relative z-10"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight">
            Great solutions start with <br className="hidden md:block" />
            <span className="text-[#D4AF37]">the right partnership.</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            We work with organizations that value quality, collaboration, and long-term results over quick fixes.
          </p>
        </motion.div>

        {/* 3-Column Layout */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* Left Column (Points 0 and 1) */}
          <div className="flex flex-col gap-6">
            {[points[0], points[1]].map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-6 lg:p-8 h-full flex flex-col hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    {point.icon}
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-white leading-tight">{point.title}</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Column (Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block relative h-full min-h-[500px] rounded-[2rem] overflow-hidden"
          >
            <img
              src={heroPerson}
              alt="Ideal Client Profile"
              className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Right Column (Points 2 and 3) */}
          <div className="flex flex-col gap-6">
            {[points[2], points[3]].map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-6 lg:p-8 h-full flex flex-col hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    {point.icon}
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-white leading-tight">{point.title}</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
