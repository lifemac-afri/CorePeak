import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
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
    <footer className="bg-[#0e1a30] text-white py-16 border-t border-[#15294A]">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img
              src={logoWithTextWhite}
              alt="CorePeak Creatives"
              className="h-10 object-contain"
            />
          </div>
          <p className="text-slate-400 max-w-sm mb-6 leading-relaxed text-sm">
            The creative branch of Core Peak Ltd. We deliver practical, high-quality digital and design solutions that help organisations communicate, present, and grow with confidence.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#15294A] transition-colors text-slate-400">
              <Twitter size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#15294A] transition-colors text-slate-400">
              <Instagram size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#15294A] transition-colors text-slate-400">
              <Linkedin size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#15294A] transition-colors text-slate-400">
              <Facebook size={18} />
            </button>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-slate-200">Services</h4>
          <ul className="space-y-3 text-slate-400 text-sm font-medium">
            <li>
              <button
                onClick={() => handleScroll("services")}
                className="hover:text-[#D4AF37] transition-colors"
              >
                Web Design & Dev
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("services")}
                className="hover:text-[#D4AF37] transition-colors"
              >
                Graphic Design & Branding
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("services")}
                className="hover:text-[#D4AF37] transition-colors"
              >
                Digital Solutions
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("services")}
                className="hover:text-[#D4AF37] transition-colors"
              >
                Consulting
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-slate-200">Company</h4>
          <ul className="space-y-3 text-slate-400 text-sm font-medium">
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="hover:text-[#D4AF37] transition-colors"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("pricing")}
                className="hover:text-[#D4AF37] transition-colors"
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("testimonials")}
                className="hover:text-[#D4AF37] transition-colors"
              >
                Testimonials
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-slate-200">Contact</h4>
          <ul className="space-y-3 text-slate-400 text-sm font-medium">
            <li>
              <button
                onClick={() => handleScroll("home")}
                className="hover:text-[#D4AF37] transition-colors text-left"
              >
                Start a Project
              </button>
            </li>
            <li>
              <span className="text-slate-400 text-xs block font-bold text-white mt-1">
                Courage Christson Tetteh
              </span>
              <span className="text-slate-500 text-xs block">
                Director, Core Peak Ltd
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800/50 text-slate-500 text-sm font-medium flex flex-col sm:flex-row justify-between gap-4">
        <p>© 2025 CorePeak Creatives — a division of Core Peak Ltd. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="hover:text-slate-300 cursor-pointer">Security</span>
          <span className="hover:text-slate-300 cursor-pointer">Sitemap</span>
        </div>
      </div>
    </footer>
  );
}
