import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import lifemacCover from "../../assets/images/lifemac/cover.png"

// import lifemacHome from "../../assets/images/lifemac/home.png"
// import lifemacPrograms from "../../assets/images/lifemac/programs.png"
// import lifemacImpact from "../../assets/images/lifemac/impact.png"

import gathereaseCover from "../../assets/images/gather/cover.png"

import tbssCover from "../../assets/images/tbss/cover.png"

import mentorlingsCover from "../../assets/images/mentorlings/cover.png"


const projects = [
  {
    id: 0,
    title: "LIFE-MAC Africa",
    subtitle: "Empowering Communities Across Africa",
    description:
      "LIFE-MAC Africa is a social enterprise dedicated to empowering individuals and underserved communities through education, technology, health, gender equality, mentorship, and civic engagement. The platform showcases the organization's programs, impact stories, events, partnerships, and opportunities for volunteering and donations while serving as the digital hub for its mission-driven initiatives.",
    tags: [
      "Nonprofit",
      "Social Impact",
      "Education",
      "STEM",
      "Community",
      "Events",
      "Donations",
      "Volunteering"
    ],
    image: lifemacCover,
    thumbnails: [

    ],
  },
  {
    id: 1,
    title: "GatherEase",
    subtitle: "Create a Seamless Event Experience",
    description:
      "An all-in-one SaaS event management platform that enables organizations to create, manage, and scale professional events. Features include online registrations, QR ticketing, secure payments, attendee management, instant withdrawals, real-time analytics, and automated event workflows for conferences, meetups, workshops, and large-scale events.",
    tags: [
      "SaaS",
      "Events",
      "QR Ticketing",
      "Payments",
      "Analytics",
      "Registration",
      "Dashboard",
      "Cloud",
      "Automation"
    ],
    image: gathereaseCover,
    thumbnails: [

    ],
  },

  {
    id: 2,
    title: "TBSS",
    subtitle: "Discover Your Next Great Read",
    description:
      "A modern digital platform built to help readers discover books, explore curated collections, and enjoy an engaging online reading experience.",
    tags: [
      "Books",
      "Library",
      "Education",
      "Reading",
      "Content"
    ],
    image: tbssCover,
    thumbnails: [

    ],
  },
  {
    id: 3,
    title: "Mentorlings",
    subtitle: "Nurturing Africa's Next Generation of Leaders",
    description:
      "Mentorlings is Africa's premier youth-focused mentorship platform, connecting mentees with expert mentors for life-changing guidance. The platform combines secure 1-on-1 mentorship, structured programs, milestone-based tracking, and AI-powered matching to help young Africans unlock their full potential, access exclusive opportunities, and build brighter futures.",
    tags: [
      "SaaS",
      "Mentorship",
      "Youth",
      "Education",
      "Content"
    ],
    image: mentorlingsCover,
    thumbnails: [

    ],
  },

];

export function WorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[activeIndex];

  return (
    <section id="works" className="py-24 bg-slate-50 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#15294A]">
            Projects we're <span className="text-[#D4AF37]">proud of.</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl md:rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row min-h-[450px] md:min-h-[500px] mb-12"
            >

              {/* Left Side: Visuals */}
              <div className="lg:w-1/2 relative bg-slate-100 p-2 md:p-3">
                <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden min-h-[200px] md:min-h-[300px] lg:min-h-full">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-contain bg-slate-100"
                  />

                  {/* Floating Thumbnails (Left Edge) */}
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 bg-white/30 backdrop-blur-md p-1.5 rounded-2xl border border-white/40">
                    {currentProject.thumbnails.map((thumb, idx) => (
                      <div key={idx} className="w-10 h-10 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 border-white shadow-md">
                        <img src={thumb} alt="thumbnail" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Right Side: Details */}
              <div className="lg:w-1/2 p-5 md:p-8 lg:p-12 flex flex-col justify-center relative bg-white">



                {/* Title & Subtitle */}
                <h3 className="text-3xl md:text-5xl font-black text-[#15294A] tracking-tight mb-2 md:mb-3 leading-none mt-4 md:mt-6">
                  {currentProject.title}
                </h3>
                <p className="text-base md:text-lg font-bold text-[#15294A] mb-4 md:mb-6">
                  {currentProject.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-sm">
                  {currentProject.description}
                </p>

                {/* Action Row */}
                <div className="flex items-center gap-6">
                  <button className="bg-[#15294A] hover:bg-black text-white rounded-full py-2.5 md:py-3 px-5 md:px-6 font-bold flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#15294A]/20 text-sm md:text-base">
                    <span>Start a Project</span>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowUpRight size={16} className="text-white" />
                    </div>
                  </button>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>



          {/* Carousel Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 lg:-left-8 z-20">
            <button
              onClick={prevProject}
              className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-center text-[#15294A] hover:scale-110 transition-transform hover:text-[#D4AF37]"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 lg:-right-8 z-20">
            <button
              onClick={nextProject}
              className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-center text-[#15294A] hover:scale-110 transition-transform hover:text-[#D4AF37]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
