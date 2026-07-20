import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PricingSection() {
  const plans = [
    {
      name: "Starter Website",
      price: "$499",
      desc: "For individuals & small businesses",
      features: [
        "Up to 5 pages",
        "Mobile-responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "2 rounds of revisions",
      ],
    },
    {
      name: "Brand + Web",
      price: "$999",
      desc: "Full identity & online presence",
      popular: true,
      features: [
        "Everything in Starter",
        "Logo & brand identity",
        "Social media graphics kit",
        "Branded marketing materials",
        "CMS setup & training",
      ],
    },
    {
      name: "Full Suite",
      price: "Custom",
      desc: "For organisations & institutions",
      features: [
        "Full website development",
        "Complete brand system",
        "Digital strategy consulting",
        "Project coordination",
        "Ongoing maintenance & support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#15294A]">
            Clear, project-based <span className="text-[#D4AF37]">packages</span>
          </h2>
          <p className="text-[#4B5A75] text-lg">
            Transparent scoping. No surprises. Quality delivered on time and within budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                className={`p-8 rounded-[2rem] flex flex-col h-full ${
                  plan.popular
                    ? "border-[#15294A] border-2 shadow-2xl relative bg-white"
                    : "border border-slate-200/80 shadow-lg bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#15294A] text-white border border-[#D4AF37]/50 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2 text-[#15294A]">
                  {plan.name}
                </h3>
                <p className="text-sm font-medium text-[#4B5A75] mb-6 h-10">
                  {plan.desc}
                </p>

                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tighter text-[#15294A]">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-[#4B5A75] font-medium">/ project</span>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-700">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full h-14 text-base font-bold transition-all ${
                    plan.popular
                      ? "bg-[#15294A] hover:bg-[#1c3660] text-white shadow-lg shadow-[#15294A]/25 border border-[#D4AF37]/50"
                      : "bg-slate-100 text-[#15294A] hover:bg-slate-200"
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
