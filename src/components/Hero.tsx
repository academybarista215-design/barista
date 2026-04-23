import { motion } from "motion/react";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  const benefits = [
    "Hands-on Barista Training",
    "100% Job Placement Support",
    "Certified Barista Trainer"
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Image with SEO Alt Text */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg}
          alt="Barista Training in Dhaka - Professional Coffee Machine Practice" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0d0907]/85 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0907]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Barista Course Dhaka 2026
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(2.2rem,5vw,4rem)] font-serif font-bold text-on-surface mb-8 leading-[1.2] max-w-4xl mx-auto"
        >
          Best Barista Training Course in Dhaka <br />
          <span className="text-primary">ঢাকায় প্রফেশনাল বারিস্তা কোর্স</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[clamp(1rem,2vw,1.2rem)] text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          Start your professional career with world-class Barista training in Bangladesh. Learn espresso extraction, latte art, and cafe management from industry experts in Dhaka.
        </motion.p>

        {/* Benefits List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-2 text-on-surface/90 font-semibold text-sm md:text-base">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>{benefit}</span>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button className="w-full sm:w-auto bg-primary hover:bg-primary-container text-white px-12 py-4 rounded-xl text-lg font-bold shadow-2xl shadow-primary/40 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group">
            Enroll Now (বুকিং করুন)
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
