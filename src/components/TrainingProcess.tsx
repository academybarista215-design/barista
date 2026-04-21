import { UserPlus, BookOpen, Coffee, CheckCircle } from "lucide-react";

export default function TrainingProcess() {
  const steps = [
    { icon: <UserPlus className="w-8 h-8" />, title: "ভর্তি", description: "কাঙ্খিত কোর্সটি বেছে নিন" },
    { icon: <BookOpen className="w-8 h-8" />, title: "শেখা", description: "থিউরিটিক্যাল জ্ঞান অর্জন" },
    { icon: <Coffee className="w-8 h-8" />, title: "প্র্যাকটিস", description: "সরাসরি মেশিনে অনুশীলন" },
    { icon: <CheckCircle className="w-8 h-8" />, title: "Job Ready", description: "সার্টিফিকেশন ও নিয়োগ", highlight: true },
  ];

  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Step-by-Step Training</p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-serif font-bold text-on-surface leading-[1.3]">আমাদের প্রশিক্ষণ ধাপসমূহ</h2>
        </div>
        <div className="relative flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-4">
          <div className="absolute top-10 left-0 w-full h-[1px] bg-white/10 hidden lg:block"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center group max-w-xs">
              <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center text-white mb-6 shadow-2xl transition-all group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-primary/20 ${step.highlight ? 'bg-primary shadow-primary/30' : 'bg-[#1c100b] border border-white/5'}`}>
                <div className={`${step.highlight ? 'text-white' : 'text-primary'}`}>
                  {step.icon}
                </div>
              </div>
              <h4 className="text-[clamp(1.3rem,3vw,1.5rem)] font-bold text-on-surface leading-tight mb-3 transition-colors group-hover:text-primary">{step.title}</h4>
              <p className="text-on-surface-variant text-[clamp(0.95rem,2vw,1rem)] leading-relaxed text-center group-hover:text-on-surface transition-colors">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
