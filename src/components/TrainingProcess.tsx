import { UserPlus, BookOpen, Coffee, CheckCircle } from "lucide-react";

export default function TrainingProcess() {
  const steps = [
    { icon: <UserPlus className="w-8 h-8" />, title: "ভর্তি", description: "কাঙ্খিত কোর্সটি বেছে নিন" },
    { icon: <BookOpen className="w-8 h-8" />, title: "শেখা", description: "থিউরিটিক্যাল জ্ঞান অর্জন" },
    { icon: <Coffee className="w-8 h-8" />, title: "প্র্যাকটিস", description: "সরাসরি মেশিনে অনুশীলন" },
    { icon: <CheckCircle className="w-8 h-8" />, title: "Job Ready", description: "সার্টিফিকেশন ও নিয়োগ", highlight: true },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[clamp(20px,4vw,36px)] font-serif font-bold text-primary mb-20 text-center leading-[1.4]">আমাদের প্রশিক্ষণ ধাপসমূহ</h2>
        <div className="relative flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-4">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 hidden lg:block -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center group">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform ${step.highlight ? 'bg-tertiary' : 'bg-primary'}`}>
                {step.icon}
              </div>
              <h4 className="text-[clamp(16px,3vw,28px)] font-bold text-primary leading-[1.4]">{step.title}</h4>
              <p className="text-on-surface-variant text-[clamp(14px,2.5vw,20px)] mt-2 leading-[1.4]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
