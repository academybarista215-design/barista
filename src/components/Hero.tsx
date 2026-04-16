import { motion } from "motion/react";
import { Star, Coffee } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-sm font-semibold mb-6"
        >
          <Star className="w-4 h-4 fill-current" />
          <span>Dhaka-র সেরা Barista Training Academy</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(20px,4vw,36px)] font-serif font-semibold text-primary mb-6 md:mb-8 leading-[1.4] max-w-4xl mx-auto"
        >
          আপনার ক্যারিয়ার শুরু হোক একজন <span className="text-tertiary">প্রফেশনাল বারিস্টা</span> হিসেবে
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(16px,3vw,28px)] text-on-surface-variant max-w-2xl mx-auto mb-10 leading-[1.4] font-medium"
        >
          Hands-on training, real coffee machines, এবং অভিজ্ঞ প্রশিক্ষকের মাধ্যমে সম্পূর্ণ Barista কোর্স যা আপনাকে বিশ্বমানের দক্ষতায় গড়ে তুলবে।
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:opacity-90 transition-opacity">
            Enroll Now
          </button>
          <button className="w-full sm:w-auto bg-surface-container-highest text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-surface-container-high transition-colors">
            কোর্স দেখুন
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-16 relative h-[350px] md:h-[600px] w-full max-w-5xl mx-auto px-4 md:px-0"
        >
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface to-transparent z-20"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJAVyLNbblVidt3CIR_afT7Ojwc8uyZCwoAA5uJW9Vlhw7B09rG6yHk3hWBZZrJHA2fKRca-7MfOWGCvonpn8XbLwrzkem9kctjBJFvnj6RzymnC8NFbWHy4EWdNyoQZlvHjuLyP6x8KbbR_BvhwamS6IyrHTyYfacR0vU8GZfGS_JtDy70BPumWDUglCoavrE8iujAgbxiFwd0P3i2uPWwzb0OhgkhwBdXEF4C6CikjfMBEo1QGywBXFQdNZXtpjwmnMVm7GVRI4" 
            alt="Professional coffee making" 
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl ring-1 ring-primary/5"
            referrerPolicy="no-referrer"
          />

          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-6 md:left-0 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 z-30"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdgFgRC9D2zfpTEZ91fpxERwh3Yd7RLqWUilQTpN-8LAYE2pREzLy-rJhtM6X68FR68tE3IM2mW_K2XtZ7Vwq93V7IoPYA9SPjFDztEGnm1XEX_9R6_laXAgtGkXj_Babri323tiEo_A8_t1x4P15WMpXeymkmR8Rht4p93J5l3UV_0FVnb8ywMExNufck999wmGfHPjYvVBESSIXJVOP1pODIPvMzTSWCbCrUzHNROsg5YlWzH_beWiActsLtPIEyaWcBYD48LRc" 
              alt="Student" 
              className="w-12 h-12 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="text-left">
              <p className="text-xs font-bold">১০+ নতুন শিক্ষার্থী</p>
              <p className="text-[10px] text-on-surface-variant">আজ যোগ দিয়েছেন</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -right-6 md:right-0 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 z-30"
          >
            <div className="bg-secondary-fixed p-2 rounded-lg">
              <Coffee className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold">Master Latte Art</p>
              <p className="text-[10px] text-on-surface-variant">৫টি নতুন মডিউল</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
