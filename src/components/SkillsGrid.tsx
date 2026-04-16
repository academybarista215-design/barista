import { Settings, Wind, MousePointer2, Brush } from "lucide-react";

export default function SkillsGrid() {
  const skills = [
    { icon: <Settings className="w-10 h-10" />, label: "Grinding" },
    { icon: <Wind className="w-10 h-10" />, label: "Frothing" },
    { icon: <MousePointer2 className="w-10 h-10" />, label: "Tamping" },
    { icon: <Brush className="w-10 h-10" />, label: "Latte Art" },
  ];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[clamp(20px,4vw,36px)] font-serif font-bold text-primary mb-4 leading-[1.4]">যেসব দক্ষতায় আপনি সেরা হবেন</h2>
          <div className="h-1 w-24 bg-tertiary rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl flex flex-col items-center transition-all hover:bg-secondary-container cursor-default"
            >
              <div className="text-primary mb-4">
                {skill.icon}
              </div>
              <span className="font-bold text-primary text-[clamp(16px,3vw,28px)] leading-[1.4]">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
