import { Wrench, Coffee, GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Hands-on Training",
      description: "বাস্তব অভিজ্ঞতার মাধ্যমে সরাসরি কফি মেকিং প্র্যাকটিস করার সুযোগ।"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Real Coffee Machines",
      description: "লেটেস্ট মডেলের কফি মেশিনে কাজ শেখার অনন্য অভিজ্ঞতা।"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Expert Trainer",
      description: "অভিজ্ঞ প্রশিক্ষকের প্রত্যক্ষ তত্ত্বাবধানে বিশেষ কোর্স মডিউল।"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Job-Ready Skills",
      description: "কোর্সের পর ইন্টার্নশিপ এবং চাকরির বিশেষ সহায়তায় আমরা সবসময় পাশে আছি।"
    }
  ];

  return (
    <section className="py-24 bg-[#0d0907] relative overflow-hidden" id="why-choose-us">
      {/* Decorative texture */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Why Choose Our Barista Academy in Dhaka?
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Best Environment for <span className="text-primary">Professional Coffee Training</span> — কেন আমাদের বেছে নেবেন?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant max-w-2xl mx-auto text-lg"
          >
            আমরা শুধু কফি বানানো শেখাই না, আমরা আপনাকে একজন দক্ষ প্রফেশনাল হিসেবে গড়ে তুলি। আমাদের আধুনিক মডিউল আপনাকে গ্লোবাল স্ট্যান্ডার্ডে দক্ষ করে তুলবে।
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-on-surface flex items-center gap-2">
                {feature.title}
              </h4>
              <p className="text-on-surface-variant leading-relaxed text-sm group-hover:text-on-surface transition-colors">
                {feature.description}
              </p>
              
              <div className="mt-6 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-4 h-4" />
                Learn More
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
