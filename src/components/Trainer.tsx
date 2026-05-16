import { motion } from "motion/react";
import { CheckCircle, Award, MessageCircle } from "lucide-react";
import trainerImg from "../assets/trainer-official.jpg";

export default function Trainer() {
  const features = [
    "15+ Years Professional Experience",
    "Worked in 5-Star & 4-Star Hotels",
    "Experience with International Coffee Chains",
    "Worked at Dhaka Club Limited",
    "Expert in Latte Art & Espresso Techniques"
  ];

  return (
    <section className="py-24 bg-[#110a08] relative overflow-hidden" id="trainer">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Certified Barista Trainer in Dhaka
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Meet Your Trainer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto"
          >
            Get the best <span className="text-primary">Barista Training in Dhaka</span> from a seasoned professional with international expertise.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] rotate-3 transition-transform group-hover:rotate-6 duration-500"></div>
            <div className="relative overflow-hidden rounded-[2.5rem] aspect-[3/2] border border-white/10 shadow-2xl">
              <img 
                src={trainerImg} 
                alt="Professional Barista Trainer" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140d0a] via-transparent to-transparent opacity-60"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-8 left-8">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="bg-primary/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl border border-white/20"
                >
                  <Award className="w-4 h-4" />
                  Certified Trainer
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-2">
              <h3 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-on-surface leading-tight">সোহেল মাহমুদ (Sohel Mahmud)</h3>
              <p className="text-primary text-xl md:text-2xl font-bold tracking-wide">Head Barista & Certified Trainer</p>
            </div>

            <p className="text-on-surface-variant text-lg md:text-xl leading-[1.8] font-medium">
              আমাদের প্রধান ট্রেইনার একজন অত্যন্ত অভিজ্ঞ প্রফেশনাল বারিস্তা, যার <strong className="text-primary">১৫+ বছরের</strong> বাস্তব অভিজ্ঞতা রয়েছে। তিনি ফাইভ স্টার হোটেল, ফোর স্টার হোটেল, ইন্টারন্যাশনাল কফি চেইন এবং বিভিন্ন ক্লাবে কাজ করার অভিজ্ঞতা অর্জন করেছেন। <br className="mt-4 block" />
              বিশেষভাবে তিনি <strong>Dhaka Club Limited</strong>-এ কাজ করেছেন, যেখানে তিনি প্রফেশনাল পরিবেশে কফি সার্ভিস ও ট্রেনিং দিয়েছেন। তার এই বাস্তব অভিজ্ঞতার মাধ্যমে তিনি শিক্ষার্থীদের হাতে-কলমে প্রশিক্ষণ প্রদান করেন।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              {features.map((feature, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 group-hover:bg-primary transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-on-surface font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <a 
                href="https://wa.me/8801701959331?text=I%20want%20to%20join%20your%20Barista%20Training%20Course.%20Please%20give%20me%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Enroll Now
              </a>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
