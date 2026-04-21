import { Settings, Wind, MousePointer2, Brush } from "lucide-react";

export default function SkillsGrid() {
  const skills = [
    { icon: <Settings className="w-10 h-10" />, label: "Precision Grinding" },
    { icon: <Wind className="w-10 h-10" />, label: "Milk Frothing" },
    { icon: <MousePointer2 className="w-10 h-10" />, label: "Perfect Tamping" },
    { icon: <Brush className="w-10 h-10" />, label: "Advanced Latte Art" },
  ];

  return (
    <section className="py-24 bg-surface-container-low border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-serif font-bold text-on-surface mb-6 leading-[1.3]">যেসব দক্ষতায় আপনি সেরা হবেন</h2>
          <div className="h-1.5 w-24 bg-primary rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-[#1c100b] p-10 rounded-[2.5rem] flex flex-col items-center border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-2 cursor-default shadow-xl"
            >
              <div className="text-on-surface-variant group-hover:text-primary mb-6 transition-all group-hover:scale-110 drop-shadow-md">
                {skill.icon}
              </div>
              <span className="font-bold text-on-surface text-[clamp(1.1rem,2.5vw,1.3rem)] leading-[1.6] group-hover:text-primary transition-colors">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
