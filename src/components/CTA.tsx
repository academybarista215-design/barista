import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="py-24 bg-surface px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-container to-tertiary p-12 md:p-24 text-center text-white">
          <div 
            className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1447933630913-221b4a60bc61')" }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-[clamp(24px,6vw,60px)] font-serif font-bold mb-8 leading-[1.2]">
              আজই শুরু করুন আপনার <br /> Barista ক্যারিয়ার
            </h2>
            <p className="text-[clamp(16px,3vw,28px)] opacity-90 mb-12 max-w-2xl mx-auto leading-[1.4]">
              সঠিক প্রশিক্ষণ আর অভিজ্ঞ মেন্টরশিপ নিয়ে নিজেকে একজন দক্ষ বারিস্টা হিসেবে প্রতিষ্ঠিত করুন। আসন সংখ্যা সীমিত।
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-12 py-5 rounded-full text-[clamp(16px,2vw,24px)] font-bold shadow-2xl"
            >
              Enroll Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
