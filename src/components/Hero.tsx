import { motion } from "motion/react";
import { Star, Coffee, Tag } from "lucide-react";
import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Brown/Coffee Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg}
          alt="Steaming coffee cup with latte art" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#140d0a]/80 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#140d0a] via-[#140d0a]/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full mt-10 md:mt-0">
        {/* Big Red Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-red-600 text-white text-sm md:text-lg font-bold uppercase tracking-widest mb-8 shadow-[0_0_30px_rgba(220,38,38,0.6)] border border-red-500/50"
        >
          <Tag className="w-5 h-5 fill-current" />
          <span>30% OFF!</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-sm md:text-base font-bold shadow-lg border border-primary/20">
            <Star className="w-4 h-4 md:w-5 md:h-5 fill-current text-primary-container" />
            <span>Professional Barista Training Academy Dhaka</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif font-bold text-on-surface mb-8 leading-[1.3] max-w-5xl mx-auto drop-shadow-2xl"
        >
          <span className="text-secondary-fixed">আপনার ক্যারিয়ার</span> শুরু হোক একজন <span className="text-primary bg-[#140d0a]/60 px-4 py-2 rounded-2xl inline-block mt-2 md:mt-0 backdrop-blur-md border border-primary/30">প্রফেশনাল বারিস্তা</span> হিসেবে
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(1.1rem,3vw,1.5rem)] text-on-surface-variant max-w-3xl mx-auto mb-12 leading-[1.6] font-medium drop-shadow-md"
        >
          Hands-on training, real coffee machines, এবং অভিজ্ঞ প্রশিক্ষকের মাধ্যমে সম্পূর্ণ Barista কোর্স যা আপনাকে বিশ্বমানের দক্ষতায় গড়ে তুলবে।
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button className="w-full sm:w-auto bg-primary hover:bg-primary-container text-white px-10 py-4 rounded-xl text-lg font-bold shadow-xl shadow-primary/30 transition-all hover:-translate-y-1">
            Enroll Now
          </button>
          <button className="w-full sm:w-auto bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant text-on-surface px-10 py-4 rounded-xl text-lg font-bold hover:bg-surface-container-low transition-all hover:border-primary">
            View Courses
          </button>
        </motion.div>
      </div>
    </section>
  );
}
