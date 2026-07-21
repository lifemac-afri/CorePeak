export function BrandsSection() {
  const brands = ["NGOs", "Startups", "Corporates", "Institutions", "Agencies"];

  return (
    <section className="border-y border-slate-200/80 bg-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <p className="text-center text-xs md:text-sm font-bold text-[#4B5A75] uppercase tracking-widest mb-8">
          Trusted by 5+ organizations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-16 gap-y-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-xl md:text-2xl font-black tracking-tight text-[#15294A] hover:text-[#D4AF37] transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
