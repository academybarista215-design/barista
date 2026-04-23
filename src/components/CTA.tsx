import { motion } from "motion/react";
import { ArrowRight, Phone, MessageSquare, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-[#0d0907] px-6 relative overflow-hidden" id="contact">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-primary/10 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative overflow-hidden rounded-[4rem] bg-gradient-to-br from-[#1c100b] to-[#0d0907] border border-white/10 p-12 md:p-24 text-center shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
          {/* Subtle Texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-sm uppercase tracking-widest mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Registration is Going On
            </motion.div>
            
            <h2>
              Start Your <span className="text-primary italic">Barista Career</span> Today
            </h2>
            
            <p className="text-[clamp(1.1rem,2vw,1.4rem)] text-on-surface-variant font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              সঠিক প্রশিক্ষণ আর অভিজ্ঞ মেন্টরশিপ নিয়ে নিজেকে একজন দক্ষ বারিস্টা হিসেবে প্রতিষ্ঠিত করুন। ৩টি নতুন ব্যাচ শুরু হচ্ছে। আজই বুক করুন আপনার সিট।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a 
                href="https://wa.me/8801701959331?text=I%20want%20to%20join%20your%20Barista%20Training%20Course.%20Please%20give%20me%20details."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full sm:w-auto text-xl py-5"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                Enroll Now (30% OFF)
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </motion.a>
              
              <div className="flex items-center gap-4">
                <a href="tel:01701959331" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-on-surface hover:bg-primary/10 hover:border-primary/30 transition-all">
                  <Phone className="w-6 h-6" />
                </a>
                <a href="https://wa.me/8801701959331" target="_blank" rel="noopener" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-on-surface hover:bg-primary/10 hover:border-primary/30 transition-all">
                  <MessageSquare className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-on-surface-variant font-medium text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                House-21, Road-01, Block-B, Mirpur-11, Dhaka
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Open Saturday - Thursday: 10AM - 6PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
