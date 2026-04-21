import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="py-24 bg-surface px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-primary/5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative overflow-hidden rounded-[3.5rem] bg-[#1c100b] border border-white/5 p-12 md:p-24 text-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div 
            className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay scale-110"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1447933630913-221b4a60bc61')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-[#1c100b]"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-sm uppercase tracking-widest mb-8"
            >
              Limited Seats Available
            </motion.div>
            <h2 className="text-[clamp(2.2rem,6vw,4rem)] font-serif font-bold mb-8 leading-[1.2] drop-shadow-2xl">
              আজই শুরু করুন আপনার <br /> <span className="text-primary italic">Barista</span> ক্যারিয়ার
            </h2>
            <p className="text-[clamp(1.1rem,3vw,1.4rem)] text-on-surface-variant font-medium mb-12 max-w-2xl mx-auto leading-[1.6]">
              সঠিক প্রশিক্ষণ আর অভিজ্ঞ মেন্টরশিপ নিয়ে নিজেকে একজন দক্ষ বারিস্টা হিসেবে প্রতিষ্ঠিত করুন। ৩টি নতুন ব্যাচ শুরু হচ্ছে।
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-container text-white px-12 py-5 rounded-2xl text-[clamp(1rem,2vw,1.2rem)] font-bold shadow-3xl shadow-primary/30 transition-all hover:-translate-y-1"
            >
              Enroll Now (30% OFF)
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
