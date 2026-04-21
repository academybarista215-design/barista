import { Star } from "lucide-react";

export default function Stats() {
  const stats = [
    { value: "১০০+", label: "শিক্ষার্থী প্রশিক্ষণ নিয়েছে" },
    { value: "৪.৯", label: "রেটিং", icon: <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" /> },
    { value: "৮০%", label: "শিক্ষার্থী কাজ পেয়েছে" },
    { value: "৩+", label: "বছর অভিজ্ঞতা" },
  ];

  return (
    <section className="py-20 bg-surface-container-low border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#1c100b] p-8 rounded-3xl text-center transition-transform hover:-translate-y-2 duration-300 shadow-xl border border-white/5"
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                <h3 className="text-[clamp(1.4rem,4vw,2.2rem)] font-serif font-bold text-primary leading-[1.6]">{stat.value}</h3>
                {stat.icon}
              </div>
              <p className="text-on-surface-variant font-medium text-[clamp(0.9rem,2vw,1.1rem)] leading-[1.6]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
