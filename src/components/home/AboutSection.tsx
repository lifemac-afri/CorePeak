import { motion } from "framer-motion";
import { useParallaxScroll } from "@/hooks/useParallaxScroll";
import heroPerson from "@/assets/images/hero-person.jpg";

export function AboutSection() {
  const sectionRef = useParallaxScroll();

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-white relative z-10 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Top Row */}
        <div className="grid md:grid-cols-12 gap-6 mb-6">

          {/* Top Left: Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 flex flex-col justify-center pr-8"
          >


            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold mb-6 tracking-tight text-[#15294A] leading-[1.1]">
              Meet Core Peak: <br /> Your Digital Partners
            </h2>

            <p className="text-[#4B5A75] text-lg leading-relaxed max-w-xl">
              We're not just designers and developers; we're creators, problem-solvers, and your brand's best partners. At Core Peak, we live and breathe digital solutions, from captivating visuals to seamless web experiences. Think of us as an extension of your team, ready to bring your ideas to life.
            </p>
          </motion.div>

          {/* Top Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 relative"
          >
            <div className="w-full h-80 md:h-full min-h-[300px] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-xl border-4 border-white">
              <img
                src={heroPerson}
                alt="Core Peak Team"
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative squiggle/star can go here */}
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid md:grid-cols-12 gap-6">

          {/* Bottom Left: Dark Stat Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-8 bg-[#15294A] rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden text-white shadow-2xl min-h-[350px] flex flex-col justify-between"
          >
            {/* Abstract Background Waves (CSS simulated) */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
              backgroundImage: `repeating-radial-gradient(circle at 100% 100%, transparent 0, transparent 20px, rgba(255,255,255,0.1) 21px, rgba(255,255,255,0.1) 22px)`
            }} />
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{
              backgroundImage: `repeating-radial-gradient(circle at 0% 50%, transparent 0, transparent 30px, rgba(255,255,255,0.1) 31px, rgba(255,255,255,0.1) 32px)`
            }} />

            {/* Stat Content */}
            <div className="relative z-10">
              <h3 className="text-6xl md:text-7xl font-black text-white mb-2 tracking-tight">40%</h3>
              <p className="text-xl text-slate-300 font-medium">Increased growth revenues</p>
            </div>

            {/* Floating Pills */}
            <div className="relative z-10 mt-16 flex flex-wrap gap-3 items-end">
              <div className="bg-white text-[#15294A] font-bold px-6 py-3 rounded-full shadow-lg transform -rotate-2 hover:rotate-0 transition-transform cursor-default">
                Marketing
              </div>
              <div className="bg-white text-[#15294A] font-bold px-6 py-3 rounded-full shadow-lg transform rotate-2 hover:rotate-0 transition-transform cursor-default">
                Web Design
              </div>
              <div className="bg-white text-[#15294A] font-bold px-6 py-3 rounded-full shadow-lg transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
                Product Design
              </div>
              <div className="bg-white text-[#15294A] font-bold px-6 py-3 rounded-full shadow-lg transform rotate-3 hover:rotate-0 transition-transform cursor-default">
                SEO
              </div>
              <div className="bg-white text-[#15294A] font-bold px-6 py-3 rounded-full shadow-lg transform -rotate-3 hover:rotate-0 transition-transform cursor-default">
                Brand Positioning
              </div>
            </div>
          </motion.div>

          {/* Bottom Right: Second Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 relative"
          >
            <div className="w-full h-64 md:h-full min-h-[350px] rounded-[2.5rem] overflow-hidden bg-amber-50 shadow-xl border-4 border-white flex items-center justify-center p-8">
              <img
                src="/hero-media.png"
                alt="Creative Collaboration"
                className="w-full h-full object-contain filter grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
