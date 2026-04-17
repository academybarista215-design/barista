import { Wrench, Coffee, GraduationCap, Briefcase } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Hands-on training",
      description: "বাস্তব অভিজ্ঞতার মাধ্যমে সরাসরি কফি মেকিং প্র্যাকটিস করার সুযোগ।"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Real coffee machines",
      description: "লেটেস্ট মডেলের কফি মেশিনে কাজ শেখার অনন্য অভিজ্ঞতা।"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Expert Trainer",
      description: "সোহাগ স্যারের প্রত্যক্ষ তত্ত্বাবধানে বিশেষ কোর্স মডিউল।"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Job-ready skills",
      description: "কোর্সের পর ইন্টার্নশিপ এবং চাকরির বিশেষ সহায়তায় আমরা সবসময় পাশে আছি।"
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-tertiary font-bold tracking-widest uppercase text-sm mb-4">কেন আমাদের বেছে নেবেন</p>
            <h2 className="text-[clamp(1.4rem,4vw,2.2rem)] font-serif font-bold text-primary leading-[1.6]">অভিজ্ঞতার সাথে শেখার সেরা পরিবেশ</h2>
          </div>
          <p className="text-on-surface-variant max-w-sm text-[clamp(1rem,2vw,1.2rem)] leading-[1.6]">আমরা শুধু কফি বানানো শেখাই না, আমরা আপনাকে একজন দক্ষ প্রফেশনাল হিসেবে গড়ে তুলি।</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-surface-container-low hover:bg-primary hover:text-white transition-all duration-500"
            >
              <div className="text-primary group-hover:text-secondary-fixed mb-6 block transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-[clamp(1.2rem,3vw,1.6rem)] font-bold mb-4 leading-[1.6]">{feature.title}</h4>
              <p className="opacity-80 text-[clamp(0.9rem,2vw,1.1rem)] leading-[1.6]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
