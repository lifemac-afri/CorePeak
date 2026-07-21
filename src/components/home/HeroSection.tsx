import { motion } from "framer-motion";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import {
  ArrowRight,
  Laptop,
  Heart,
  MessageSquare,
  TrendingUp,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SiInstagram, SiTiktok, SiFacebook } from "react-icons/si";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const mockChartData = [
  { day: "Sun", value: 40 },
  { day: "Mon", value: 65 },
  { day: "Tue", value: 85 },
  { day: "Wed", value: 50 },
  { day: "Thu", value: 90 },
  { day: "Fri", value: 30 },
  { day: "Sat", value: 75 },
];

interface HeroSectionProps {
  onScrollTo?: (id: string) => void;
}

export function HeroSection({ onScrollTo }: HeroSectionProps) {
  const handleScroll = (id: string) => {
    if (onScrollTo) {
      onScrollTo(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-0 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-100/50 via-slate-50/40 to-transparent rounded-[50%] blur-3xl" />
        <div className="absolute top-24 left-1/4 w-72 h-72 bg-[#15294A]/10 rounded-full blur-3xl" />
        <div className="absolute top-24 right-1/4 w-72 h-72 bg-[#D4AF37]/15 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #15294A 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Text block */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={STAGGER}
        className="relative z-10 text-center flex flex-col items-center px-4"
      >


        <motion.h1
          variants={FADE_UP}
          className="text-5xl md:text-7xl font-extrabold leading-[1.08] tracking-tight text-[#15294A] max-w-4xl"
        >
          Creative Design &{" "}
          <span className="block text-[#D4AF37] mt-1">Digital Solutions</span>
        </motion.h1>

        <motion.p
          variants={FADE_UP}
          className="mt-5 text-lg md:text-xl text-[#4B5A75] max-w-xl leading-relaxed"
        >
          Professional, user-focused creative services that help organisations
          communicate effectively, present themselves powerfully, and operate
          efficiently.
        </motion.p>

        <motion.div variants={FADE_UP} className="mt-8 flex items-center gap-4">
          <Button
            size="lg"
            onClick={() => window.dispatchEvent(new CustomEvent("open-consult-modal"))}
            className="bg-[#15294A] hover:bg-[#1c3660] text-white border border-[#D4AF37]/50 shadow-xl shadow-[#15294A]/20 rounded-full h-14 px-6 text-base font-bold group"
          >
            Start a Project

            <div className="border border-[#D4AF37]/20 rounded-full p-2 bg-white flex items-center justify-center ml-4" >

              <ArrowRight className="w-8 h-8 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
            </div>
          </Button>

        </motion.div>

        {/* Trust bar */}
        <motion.div
          variants={FADE_UP}
          className="mt-8 flex items-center justify-center gap-3 text-sm text-[#4B5A75] font-medium"
        >
          <div className="flex -space-x-2.5">
            {[11, 12, 13, 14].map((i) => (
              <Avatar key={i} className="w-8 h-8 border-2 border-white">
                <AvatarImage src={`https://i.pravatar.cc/80?img=${i}`} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span>
            Trusted by <strong className="text-[#15294A]">5+</strong>{" "}
            organisations &amp; growing
          </span>
        </motion.div>
      </motion.div>

      {/* Visual stage */}
      <div
        className="relative mt-10 mx-auto max-w-5xl px-4"
        style={{ height: 580 }}
      >
        {/* Curved connector SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 1000 580"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 245 160 Q 340 220 430 310"
            stroke="#15294A"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            strokeOpacity="0.35"
            fill="none"
            markerEnd="url(#arrow-navy)"
          />
          <path
            d="M 755 155 Q 660 220 570 310"
            stroke="#15294A"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            strokeOpacity="0.35"
            fill="none"
            markerEnd="url(#arrow-navy)"
          />
          <path
            d="M 215 440 Q 320 400 420 370"
            stroke="#D4AF37"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            strokeOpacity="0.5"
            fill="none"
            markerEnd="url(#arrow-gold)"
          />
          <defs>
            <marker
              id="arrow-navy"
              markerWidth="8"
              markerHeight="8"
              refX="4"
              refY="4"
              orient="auto"
            >
              <path d="M 0 0 L 8 4 L 0 8 Z" fill="#15294A" fillOpacity="0.5" />
            </marker>
            <marker
              id="arrow-gold"
              markerWidth="8"
              markerHeight="8"
              refX="4"
              refY="4"
              orient="auto"
            >
              <path d="M 0 0 L 8 4 L 0 8 Z" fill="#D4AF37" fillOpacity="0.8" />
            </marker>
          </defs>
        </svg>

        {/* UPPER-LEFT — Insights Overview card */}
        <motion.div
          initial={{ opacity: 0, x: -40, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="absolute top-4 left-0 z-20"
        >
          <Card className="w-60 p-4 shadow-2xl shadow-[#15294A]/10 border border-white/80 bg-white/95 backdrop-blur-md rounded-2xl">
            <p className="text-xs font-bold text-[#4B5A75] uppercase tracking-wider mb-3">
              Project Overview
            </p>
            <div className="space-y-3">
              {[
                {
                  icon: <Laptop size={13} />,
                  label: "Web Design",
                  pct: "w-4/5",
                  val: "82%",
                  color: "bg-[#15294A]",
                },
                {
                  icon: <Heart size={13} />,
                  label: "Branding",
                  pct: "w-3/5",
                  val: "61%",
                  color: "bg-[#D4AF37]",
                },
                {
                  icon: <MessageSquare size={13} />,
                  label: "Digital",
                  pct: "w-2/3",
                  val: "67%",
                  color: "bg-sky-500",
                },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-[#15294A] flex items-center justify-center shrink-0">
                    {row.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-[#4B5A75] mb-1">
                      {row.label}
                    </p>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${row.pct} ${row.color} rounded-full`}
                      />
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#15294A] shrink-0">
                    {row.val}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[10px] text-[#4B5A75]">
                Best performance
              </span>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                +83.7%
              </span>
            </div>
          </Card>
        </motion.div>

        {/* UPPER-RIGHT — Project Activity bar chart */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="absolute top-4 right-0 z-20"
        >
          <Card className="w-64 p-4 shadow-2xl shadow-[#15294A]/10 border border-white/80 bg-white/95 backdrop-blur-md rounded-2xl">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-bold text-[#15294A]">Project Activity</p>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                +14.2%
              </span>
            </div>
            <p className="text-[10px] text-[#4B5A75] mb-3">
              This Quarter · Q2 2025
            </p>
            <div className="h-28">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockChartData} barSize={12}>
                  <Bar dataKey="value" fill="#15294A" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between mt-2 text-[9px] text-[#4B5A75] font-medium">
              {[
                ["Su", "0"],
                ["M", "1"],
                ["Tu", "2"],
                ["W", "3"],
                ["Th", "4"],
                ["F", "5"],
                ["Sa", "6"],
              ].map(([d, k]) => (
                <span key={k}>{d}</span>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[10px] text-[#4B5A75]">
                Projects delivered
              </span>
              <span className="text-[10px] font-bold text-[#15294A]">100+</span>
            </div>
          </Card>
        </motion.div>

        {/* LOWER-LEFT — Follower metric badge */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          className="absolute bottom-16 left-2 z-20"
        >
          <Card className="px-4 py-3.5 shadow-xl border border-white/80 bg-white/95 backdrop-blur-md rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/30">
              <TrendingUp size={18} />
            </div>
            <div>
              <p className="text-[10px] text-[#4B5A75] font-medium uppercase tracking-wider">
                Client Satisfaction
              </p>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-2xl font-black text-[#15294A] leading-none">
                  98%
                </span>
                <span className="text-xs font-bold text-amber-600">5-star</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* LOWER-RIGHT — Platform icon badges */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          className="absolute bottom-16 right-2 z-20"
        >
          <Card className="p-3.5 shadow-xl border border-white/80 bg-white/95 backdrop-blur-md rounded-2xl">
            <p className="text-[10px] font-bold text-[#4B5A75] uppercase tracking-wider mb-2.5">
              Our Capabilities
            </p>
            <div className="flex items-center gap-2.5">
              {[
                {
                  Icon: SiInstagram,
                  color:
                    "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400",
                  text: "text-white",
                },
                { Icon: SiFacebook, color: "bg-[#1877F2]", text: "text-white" },
                { Icon: SiTiktok, color: "bg-black", text: "text-white" },
                { Icon: Linkedin, color: "bg-[#0A66C2]", text: "text-white" },
              ].map(({ Icon, color, text }, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-xl ${color} ${text} flex items-center justify-center shadow-sm`}
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
            <div className="mt-2.5 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-[#4B5A75] font-medium">
                All platforms synced
              </span>
            </div>
          </Card>
        </motion.div>

        {/* THREE CUTOUT FIGURES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-0 left-[12%] z-10 select-none pointer-events-none"
          style={{ width: 220, height: 420 }}
        >
          <img
            src="/hero-dev.png"
            alt="Developer"
            className="w-full h-full object-contain object-bottom drop-shadow-2xl"
            draggable={false}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 select-none pointer-events-none"
          style={{ width: 300, height: 520 }}
        >
          <img
            src="/hero-media.png"
            alt="Social media professional"
            className="w-full h-full object-contain object-bottom drop-shadow-2xl"
            draggable={false}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="absolute bottom-0 right-[12%] z-10 select-none pointer-events-none"
          style={{ width: 220, height: 420 }}
        >
          <img
            src="/hero-social.png"
            alt="Social media manager"
            className="w-full h-full object-contain object-bottom drop-shadow-2xl"
            draggable={false}
          />
        </motion.div>

        {/* Glow under figures */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-24 bg-gradient-to-t from-[#15294A]/10 to-transparent rounded-full blur-2xl z-0" />
      </div>
    </section>
  );
}
