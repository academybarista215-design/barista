import { Coffee, Martini, Sparkles, BookOpen, Clock } from "lucide-react";
import { motion } from "motion/react";
import mocktailImg from "../assets/mocktail_collection.png";

export default function MocktailCourse() {
  const syllabus = [
    {
      category: "Basic Coffee",
      items: ["Cappuccino", "Espresso", "Latte", "Moka", "And more..."],
      icon: <Coffee className="w-6 h-6" />
    },
    {
      category: "Ice Coffee Basic",
      items: ["Cold Brew Techniques", "Iced Latte", "Blended Frappes"],
      icon: <Clock className="w-6 h-6" />
    },
    {
      category: "Premium Mocktails",
      items: ["Virgin Mojito", "Mango Mojito", "Orange Mojito", "Passion Fruit Mojito"],
      icon: <Martini className="w-6 h-6" />
    },
    {
      category: "Bonus Skills",
      items: ["History of Coffee", "Professional Machine Use", "Latte Art: Heart & Tulip"],
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <section id="mocktail-course" className="py-24 bg-[#120a07] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-widest border border-primary/20"
          >
            Special Professional Program
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.5rem,6vw,4rem)] font-serif font-bold text-white leading-tight mb-6"
          >
            Barista Mocktail Course <br/>
            <span className="text-primary">(8 Days Intense Training)</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-xl max-w-2xl mx-auto"
          >
            কফি এবং মকটেইল তৈরির আধুনিক কৌশল শিখুন মাত্র ৮ দিনে। প্রফেশনাল ক্যারিয়ার গড়ার জন্য এটি একটি অনন্য কোর্স।
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {syllabus.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {section.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                {section.category}
              </h4>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 group-hover:text-white/90 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-sm font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden group shadow-2xl"
        >
          <img 
            src={mocktailImg} 
            alt="mocktail course bangladesh - professional mocktail training in dhaka" 
            className="w-full h-[600px] object-cover transition-transform duration-[2s] group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120a07] via-transparent to-transparent opacity-80"></div>
          
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                রঙিন মকটেইলের জাদুকরী স্বাদ
              </h3>
              <p className="text-white/80 text-lg">
                মকটেইল মেকিং এর প্রতিটি ধাপ শিখুন হাতে কলমে। আমাদের বিশেষ মডিউলে থাকছে জনপ্রিয় সকল ফ্লেভার।
              </p>
            </div>
            <div className="bg-primary px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-xl hover:bg-primary-dark transition-colors cursor-pointer">
              কোর্স মডিউল ডাউনলোড করুন
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
