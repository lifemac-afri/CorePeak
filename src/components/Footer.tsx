import { Twitter, Instagram, Linkedin, Facebook, CalendarDays } from "lucide-react";
import logoWithTextWhite from "@/assets/images/logos/logo_with_text_white.png";

interface FooterProps {
  onScrollTo?: (id: string) => void;
}

export function Footer({ onScrollTo }: FooterProps) {
  const handleScroll = (id: string) => {
    if (onScrollTo) {
      onScrollTo(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B1527] text-white pt-24 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-24">

          {/* Left Column - Brand & Info */}
          <div className="lg:max-w-sm">
            <div className="mb-6 cursor-pointer inline-block" onClick={() => handleScroll("home")}>
              <img
                src={logoWithTextWhite}
                alt="Core Peak Creatives"
                className="h-8 object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-16 max-w-[300px]">
              Core Peak helps organizations transform complex challenges into beautiful, reliable digital solutions with industry-leading precision.
            </p>

            <p className="text-slate-400 text-xs">
              Core Peak Ltd. © 2025
            </p>
          </div>

          {/* Right Columns - Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-16 lg:pr-12">

            {/* Column 1: Services */}
            <div>
              <h4 className="font-bold mb-6 text-white text-sm tracking-wide">Services</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><button onClick={() => handleScroll("services")} className="hover:text-[#D4AF37] transition-colors">Web Design</button></li>
                <li><button onClick={() => handleScroll("services")} className="hover:text-[#D4AF37] transition-colors">Branding</button></li>
                <li><button onClick={() => handleScroll("services")} className="hover:text-[#D4AF37] transition-colors">Development</button></li>
                <li><button onClick={() => handleScroll("services")} className="hover:text-[#D4AF37] transition-colors">Consulting</button></li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h4 className="font-bold mb-6 text-white text-sm tracking-wide">Company</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><button onClick={() => handleScroll("about")} className="hover:text-[#D4AF37] transition-colors">About Us</button></li>
                <li><button onClick={() => handleScroll("process")} className="hover:text-[#D4AF37] transition-colors">Process</button></li>
                <li><button onClick={() => handleScroll("works")} className="hover:text-[#D4AF37] transition-colors">Works</button></li>
                <li><button onClick={() => handleScroll("home")} className="hover:text-[#D4AF37] transition-colors">Contact</button></li>
              </ul>
            </div>

            {/* Column 3: Social */}
            <div>
              <h4 className="font-bold mb-6 text-white text-sm tracking-wide">Social</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">X/Twitter</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Facebook</a></li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h4 className="font-bold mb-6 text-white text-sm tracking-wide">Legal</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Terms</a></li>
              </ul>

              {/* Cute CTA */}
              <div className="mt-10">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-consult-modal"))}
                  className="group flex items-center gap-2.5 bg-[#15294A]/80 border border-[#15294A] hover:border-[#D4AF37]/50 hover:bg-[#15294A] text-slate-300 hover:text-white px-4 py-2.5 rounded-full text-xs font-bold transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_-6px_rgba(212,175,55,0.2)]"
                >
                  <div className="bg-white p-1.5 rounded-lg group-hover:bg-[#D4AF37]/10 transition-colors">
                    <CalendarDays size={14} className="text-[#D4AF37]" />
                  </div>
                  Start a Project
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Giant Watermark Text at the bottom */}
      <div className="w-full flex justify-center items-end leading-none overflow-hidden select-none pointer-events-none mt-12 pb-0">
        <h1
          className="font-black text-center tracking-tighter"
          style={{
            fontSize: 'min(28vw, 420px)',
            lineHeight: '0.75',
            marginBottom: '-2%',
            backgroundImage: 'radial-gradient(circle, #15294A 1.5px, transparent 2px)',
            backgroundSize: '8px 8px',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
        >
          Core Peak
        </h1>
      </div>
    </footer>
  );
}
