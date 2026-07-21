import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, Menu, X, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoStandalone from "@/assets/images/logos/logo_standalone.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface NavbarProps {
  onScrollTo?: (id: string) => void;
}

export function Navbar({ onScrollTo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section[id], header[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleOpenModal = () => setConsultModalOpen(true);
    window.addEventListener("open-consult-modal", handleOpenModal);
    return () => window.removeEventListener("open-consult-modal", handleOpenModal);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onScrollTo) {
      onScrollTo(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState({}, "", `#${id}`);
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setConsultModalOpen(false);
      setFormSubmitted(false);
    }, 2500);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-3 md:px-0">
        <motion.div
          initial={false}
          animate={{
            width: isScrolled ? "92%" : "100%",
            maxWidth: isScrolled ? "68rem" : "100%",
            marginTop: isScrolled ? "12px" : "0px",
            borderRadius: isScrolled ? "9999px" : "0px",
            paddingTop: isScrolled ? "10px" : "16px",
            paddingBottom: isScrolled ? "10px" : "16px",
            paddingLeft: isScrolled ? "24px" : "32px",
            paddingRight: isScrolled ? "24px" : "32px",
            backgroundColor: isScrolled
              ? "rgba(255, 255, 255, 0.92)"
              : "rgba(255, 255, 255, 0.98)",
            boxShadow: isScrolled
              ? "0 20px 30px -10px rgba(21, 41, 74, 0.12), 0 10px 15px -5px rgba(0, 0, 0, 0.04)"
              : "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
          }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto backdrop-blur-xl border border-[#15294A]/10 dark:border-white/10 dark:bg-slate-900/85 pointer-events-auto"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 cursor-pointer group"
              onClick={(e) => handleNavClick(e, "home")}
            >
              <img
                src={logoStandalone}
                alt="CorePeak Creatives Logo"
                className="w-9 h-9 object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-[#15294A] dark:text-white">
                CorePeak <span className="text-[#D4AF37]">Creatives</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-7 font-medium text-sm text-[#4B5A75] dark:text-slate-300">
              {['services', 'about', 'works', 'process'].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`hover:text-[#15294A] dark:hover:text-[#D4AF37] transition-colors relative py-1 group font-semibold ${
                    activeSection === id ? "text-[#15294A] dark:text-[#D4AF37]" : ""
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all duration-200 rounded-full ${
                      activeSection === id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                onClick={() => setConsultModalOpen(true)}
                className="relative overflow-hidden bg-[#15294A] hover:bg-[#1c3660] text-white border border-[#D4AF37]/50 font-semibold rounded-full px-5 py-2.5 shadow-md shadow-[#15294A]/20 hover:shadow-lg hover:shadow-[#D4AF37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 text-sm"
              >
                <Calendar size={16} className="text-[#D4AF37]" />
                <span>Start a Project</span>
                <ArrowRight size={15} className="ml-0.5 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <Button
                onClick={() => setConsultModalOpen(true)}
                size="sm"
                className="bg-[#15294A] text-white font-medium rounded-full px-3 text-xs flex items-center gap-1.5 shadow-sm border border-[#D4AF37]/40"
              >
                <Calendar size={13} className="text-[#D4AF37]" />
                <span>Start a Project</span>
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#15294A] dark:text-slate-200 hover:bg-slate-200 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Slide-down Glassmorphic Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mx-4 mt-2 p-5 rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-white/60 dark:border-white/10 shadow-2xl shadow-purple-900/20 pointer-events-auto flex flex-col gap-4"
            >
              <nav className="flex flex-col gap-2 font-medium text-base">
                {['home', 'services', 'about', 'works', 'process'].map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className={`flex items-center justify-between p-3 rounded-2xl transition-colors ${
                      activeSection === id 
                        ? "bg-violet-50 dark:bg-slate-800 text-[#15294A] dark:text-[#D4AF37]" 
                        : "hover:bg-violet-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100"
                    }`}
                  >
                    <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                    <ArrowRight size={16} className={activeSection === id ? "text-[#D4AF37]" : "text-slate-400"} />
                  </a>
                ))}
              </nav>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setConsultModalOpen(true);
                  }}
                  className="w-full bg-[#15294A] hover:bg-[#1c3660] text-white font-bold rounded-2xl py-3 shadow-lg shadow-[#15294A]/20 flex items-center justify-center gap-2 border border-[#D4AF37]/50"
                >
                  <Calendar size={18} className="text-[#D4AF37]" />
                  <span>Start a Project</span>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Book a Consultation Modal */}
      <Dialog open={consultModalOpen} onOpenChange={setConsultModalOpen}>
        <DialogContent className="sm:max-w-lg rounded-3xl p-6 md:p-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-white/60 dark:border-white/10 shadow-2xl">
          <DialogHeader className="space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#15294A]/10 text-[#15294A] dark:text-[#D4AF37] flex items-center justify-center mb-1">
              <Sparkles size={24} className="text-[#D4AF37]" />
            </div>
            <DialogTitle className="text-2xl font-extrabold tracking-tight text-[#15294A] dark:text-white">
              Book a Strategy Consultation
            </DialogTitle>
            <DialogDescription className="text-[#4B5A75] dark:text-slate-400 text-sm">
              Schedule a 1-on-1 session with our creative & tech leadership to explore custom solutions for your organization.
            </DialogDescription>
          </DialogHeader>

          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 flex flex-col items-center text-center space-y-3"
            >
              <div className="w-16 h-16 rounded-full bg-amber-50 text-[#D4AF37] flex items-center justify-center shadow-inner border border-[#D4AF37]/30">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-xl font-bold text-[#15294A]">Consultation Requested!</h3>
              <p className="text-[#4B5A75] text-sm max-w-sm">
                Thank you! Courage Christson Tetteh and our leadership team will review your details and reach out within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleConsultSubmit} className="space-y-4 mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#15294A] dark:text-slate-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#15294A]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#15294A] dark:text-slate-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#15294A]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#15294A] dark:text-slate-300">
                  Service of Interest
                </label>
                <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#15294A] text-[#15294A] dark:text-slate-200">
                  <option value="web-dev">Web Design & Business Apps</option>
                  <option value="branding">Graphic Design & Corporate Branding</option>
                  <option value="digital-solutions">Digital Solutions & Software</option>
                  <option value="full-suite">Full Creative & Technical Suite</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#15294A] dark:text-slate-300">
                  Brief Project Goals / Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us a little bit about your timeline or project requirements..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#15294A] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#15294A] hover:bg-[#1c3660] text-white font-bold rounded-xl py-3 shadow-lg shadow-[#15294A]/25 border border-[#D4AF37]/50 mt-2 flex items-center justify-center gap-2"
              >
                <Calendar size={18} className="text-[#D4AF37]" />
                <span>Confirm Consultation Request</span>
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
