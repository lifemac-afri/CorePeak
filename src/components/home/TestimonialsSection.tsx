import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "CorePeak Creatives delivered our website on time and exactly to brief. The attention to detail in both the design and the communication throughout was exceptional.",
      author: "Adjoa Mensah",
      role: "Executive Director, Harmonia NGO",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      quote:
        "From logo to full brand kit to our final website — everything was cohesive, professional, and genuinely reflected who we are. Highly recommended.",
      author: "Kwame Asante",
      role: "Founder, Archbridge Consulting",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white border-t border-slate-100 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#15294A]">
            What our <span className="text-[#D4AF37]">clients say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-md relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#D4AF37]/20 rotate-180" />
                <p className="text-lg font-medium text-slate-700 mb-8 relative z-10 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                    <AvatarImage src={t.avatar} alt={t.author} />
                    <AvatarFallback>{t.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-[#15294A]">{t.author}</p>
                    <p className="text-sm font-medium text-[#4B5A75]">{t.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
