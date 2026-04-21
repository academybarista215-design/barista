import { Wrench, Coffee, GraduationCap, Briefcase } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Hands-on Training",
      description: "বাস্তব অভিজ্ঞতার মাধ্যমে সরাসরি কফি মেকিং প্র্যাকটিস করার সুযোগ।"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Real Coffee Machines",
      description: "লেটেস্ট মডেলের কফি মেশিনে কাজ শেখার অনন্য অভিজ্ঞতা।"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Expert Trainer",
      description: "অভিজ্ঞ প্রশিক্ষকের প্রত্যক্ষ তত্ত্বাবধানে বিশেষ কোর্স মডিউল।"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Job-Ready Skills",
      description: "কোর্সের পর ইন্টার্নশিপ এবং চাকরির বিশেষ সহায়তায় আমরা সবসময় পাশে আছি।"
    }
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative texture or subtle glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -mr-64 -mt-64"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</p>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-serif font-bold text-on-surface leading-[1.3]">অভিজ্ঞতার সাথে শেখার সেরা পরিবেশ</h2>
          </div>
          <p className="text-on-surface-variant max-w-sm text-[clamp(1rem,2vw,1.1rem)] leading-[1.6]">আমরা শুধু কফি বানানো শেখাই না, আমরা আপনাকে একজন দক্ষ প্রফেশনাল হিসেবে গড়ে তুলি।</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-surface-container-low border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#1c100b] flex items-center justify-center text-primary mb-6 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                {feature.icon}
              </div>
              <h4 className="text-[clamp(1.2rem,2.5vw,1.4rem)] font-bold mb-4 leading-[1.6] text-on-surface">{feature.title}</h4>
              <p className="text-on-surface-variant text-[clamp(0.9rem,1.5vw,1rem)] leading-[1.6] group-hover:text-on-surface transition-colors">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
