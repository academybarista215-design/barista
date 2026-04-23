import { motion } from "motion/react";
import { CheckCircle, Award, Star, Quote } from "lucide-react";
import trainerImg from "../assets/trainer.png";

export default function Trainer() {
  const features = [
    "5+ Years Experience",
    "Certified Barista Trainer",
    "Hands-on Training Expert",
    "Latte Art Specialist"
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
            className="text-[clamp(2rem,5vw,3rem)] font-serif font-bold text-on-surface mb-4"
          >
            Meet Your Trainer — <span className="text-primary">প্রশিক্ষকের সাথে পরিচিত হোন</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto"
          >
            Learn from an experienced professional barista in Bangladesh. বারিস্তা হিসেবে ক্যারিয়ার শুরু করার সেরা দিকনির্দেশনা পান।
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
            <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] border border-white/10 shadow-2xl">
              <img 
                src={trainerImg} 
                alt="Professional Barista Trainer" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
              <h3 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-on-surface leading-tight">Md. Rayhan Ahmed</h3>
              <p className="text-primary text-xl md:text-2xl font-bold tracking-wide">Head Barista & Certified Trainer</p>
            </div>

            <p className="text-on-surface-variant text-lg md:text-xl leading-[1.8] font-medium">
              ৫+ বছরের অভিজ্ঞতা সম্পন্ন একজন প্রফেশনাল বারিস্তা, যিনি বহু শিক্ষার্থীকে সফলভাবে প্রশিক্ষণ দিয়েছেন। বাস্তব অভিজ্ঞতার মাধ্যমে সহজভাবে শেখানোই তার লক্ষ্য। <br className="hidden md:block" />
              Expert in espresso extraction, milk texturing, and coffee shop management.
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
              <button className="bg-primary hover:bg-primary-container text-white px-12 py-4 rounded-xl text-lg font-bold shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 w-full sm:w-auto">
                Join Training
              </button>
            </div>

            {/* Student Testimonial Snippet */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-6 p-6 rounded-3xl bg-surface-container-low border border-white/5 relative"
            >
              <Quote className="text-primary/10 w-16 h-16 absolute top-4 right-4" />
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />)}
              </div>
              <p className="text-on-surface-variant italic text-sm md:text-base leading-relaxed mb-4 relative z-10">
                "Rayhan Sir-এর হাত ধরে কফি মেকিং শেখা আমার জন্য সেরা অভিজ্ঞতা ছিল। উনার শেখানোর কৌশল খুবই চমৎকার।"
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary border border-primary/20">S</div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Sumit Hassan</p>
                  <p className="text-[10px] uppercase tracking-widest text-primary/70">Ex-Student</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
