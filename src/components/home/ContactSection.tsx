import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Calendar, Clock, ArrowUpRight, RotateCcw } from "lucide-react";

const services = ["Brand Identity", "Web Development", "Custom Software", "UI/UX Design", "Something Else"];
const budgets = ["Under $5k", "$5k - $10k", "$10k - $25k", "$25k+"];

export function ContactSection() {
  const [service, setService] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);

  const [isCustomBudget, setIsCustomBudget] = useState(false);
  const [customBudgetValue, setCustomBudgetValue] = useState("");

  const step = !service ? 1 : !budget ? 2 : 3;

  const handleReset = () => {
    setService(null);
    setBudget(null);
    setIsCustomBudget(false);
    setCustomBudgetValue("");
  };

  const handleCustomBudgetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customBudgetValue.trim()) {
      setBudget(customBudgetValue.trim());
    }
  };

  const subject = `Inquiry: ${service || 'New Project'}`;
  const body = `Hi Core Peak team,%0D%0A%0D%0AI'd like to talk about ${service}. My budget is ${budget}.%0D%0A%0D%0ALet's connect!`;
  const mailtoLink = `mailto:hello@Core Peak.com?subject=${subject}&body=${body}`;

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#15294A] relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs md:text-sm font-bold tracking-widest uppercase">Start a Project</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 max-w-3xl leading-tight">
            Got a business problem? Let's figure out what to <span className="text-[#D4AF37]">build.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left Column: Interactive Flow */}
          <div className="lg:w-7/12">
            <div className="bg-[#0F1E3A] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl border border-white/5 min-h-[350px] md:min-h-[400px] flex flex-col justify-center relative">

              {/* Selections Summary */}
              <AnimatePresence>
                {service && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 flex items-center gap-2 flex-wrap"
                  >
                    <span className="text-slate-400">I want to talk about</span>
                    <button
                      onClick={() => { setService(null); setBudget(null); setIsCustomBudget(false); }}
                      className="px-4 py-1.5 bg-white/10 text-white font-medium rounded-full text-sm hover:bg-white/20 transition-colors border border-white/10 flex items-center gap-2"
                    >
                      {service}
                      <span className="text-slate-400 font-normal">✎</span>
                    </button>
                  </motion.div>
                )}
                {budget && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10 flex items-center gap-2 flex-wrap"
                  >
                    <span className="text-slate-400">My budget is</span>
                    <button
                      onClick={() => { setBudget(null); setIsCustomBudget(false); setCustomBudgetValue(""); }}
                      className="px-4 py-1.5 bg-white/10 text-white font-medium rounded-full text-sm hover:bg-white/20 transition-colors border border-white/10 flex items-center gap-2"
                    >
                      {budget}
                      <span className="text-slate-400 font-normal">✎</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {/* STEP 1 */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                      What can we help you with?
                    </h3>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {services.map(s => (
                        <button
                          key={s}
                          onClick={() => setService(s)}
                          className="px-5 py-2.5 md:px-6 md:py-3 rounded-xl border border-white/10 text-slate-300 font-medium hover:border-[#D4AF37] hover:text-white hover:bg-white/5 transition-all bg-[#15294A] shadow-sm text-sm md:text-base"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                      What is your estimated budget?
                    </h3>

                    {!isCustomBudget ? (
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {budgets.map(b => (
                          <button
                            key={b}
                            onClick={() => setBudget(b)}
                            className="px-5 py-2.5 md:px-6 md:py-3 rounded-xl border border-white/10 text-slate-300 font-medium hover:border-[#D4AF37] hover:text-white hover:bg-white/5 transition-all bg-[#15294A] shadow-sm text-sm md:text-base"
                          >
                            {b}
                          </button>
                        ))}
                        <button
                          onClick={() => setIsCustomBudget(true)}
                          className="px-5 py-2.5 md:px-6 md:py-3 rounded-xl border border-white/10 text-[#D4AF37] font-medium hover:border-[#D4AF37] hover:bg-white/5 transition-all bg-[#15294A] shadow-sm text-sm md:text-base"
                        >
                          Custom Amount...
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleCustomBudgetSubmit} className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md">
                        <input
                          type="text"
                          placeholder="e.g. $15k, Flexible, etc."
                          value={customBudgetValue}
                          onChange={(e) => setCustomBudgetValue(e.target.value)}
                          className="flex-1 px-4 py-3 md:px-5 md:py-4 rounded-xl border border-white/10 bg-[#15294A] text-white placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] transition-colors text-sm md:text-base"
                          autoFocus
                        />
                        <button
                          type="submit"
                          disabled={!customBudgetValue.trim()}
                          className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-[#D4AF37] text-white font-bold hover:bg-[#c4a133] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                        >
                          Next
                        </button>
                      </form>
                    )}
                  </motion.div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                      Perfect. Let's talk!
                    </h3>
                    <p className="text-slate-300 text-sm md:text-base mb-8 md:mb-10 max-w-md">
                      We've got everything we need to start the conversation. Shoot us an email with the details.
                    </p>

                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#D4AF37] text-white font-bold hover:bg-[#c4a133] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#D4AF37]/20"
                    >
                      <Mail size={20} />
                      Send an Email
                      <ArrowUpRight size={18} />
                    </a>

                    <div className="mt-12">
                      <button
                        onClick={handleReset}
                        className="flex items-center gap-2 text-slate-500 hover:text-white font-medium text-sm transition-colors"
                      >
                        <RotateCcw size={16} />
                        Start Over
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Side Info Cards */}
          <div className="lg:w-5/12 flex flex-col gap-4 md:gap-6">

            {/* Calendly Card */}
            <div className="bg-[#0F1E3A] border border-white/5 p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <Calendar className="text-[#D4AF37]" size={20} />
                <h4 className="text-white font-bold text-base md:text-lg">Prefer to talk first?</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 md:mb-6">
                Book a free 30-minute discovery call. We'll listen to your problem and tell you honestly whether we're the right fit.
              </p>
              <a href="#calendly" className="text-[#D4AF37] text-xs md:text-sm font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
                Book on Calendly →
              </a>
            </div>

            {/* Promise Card */}
            <div className="bg-[#0F1E3A] border border-white/5 p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <Clock className="text-[#D4AF37]" size={20} />
                <h4 className="text-white font-bold text-base md:text-lg">Response promise</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                We review every enquiry personally. You'll hear back from a real person within 1 business day — not an automated reply.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="bg-[#0F1E3A] border border-white/5 p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <Mail className="text-[#D4AF37]" size={20} />
                <h4 className="text-white font-bold text-base md:text-lg">Direct email</h4>
              </div>
              <a href="mailto:hello@Core Peak.com" className="text-[#D4AF37] text-sm font-bold hover:underline">
                hello@Core Peak.com
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
