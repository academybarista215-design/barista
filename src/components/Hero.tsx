import { motion } from "motion/react";
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import heroBg from "../assets/hero-bg.png";

export default function Hero() {

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
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
          Barista Course Dhaka 2024
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 max-w-4xl mx-auto"
        >
          Professional Barista Training Academy in Dhaka
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[clamp(1.1rem,2vw,1.3rem)] text-on-surface-variant max-w-2xl mx-auto mb-12 font-medium"
        >
          Join our <span className="text-primary">Professional Barista Course</span> for hands-on training with expert trainers and secure international career opportunities. <br />
          <span className="text-primary/90">অভিজ্ঞ ট্রেইনারের মাধ্যমে সরাসরি কফি শপে হাতে-কলমে বারিস্তা ট্রেনিং নিন</span>
        </motion.p>

        {/* Benefits List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            "Hands-on Barista Training in Dhaka",
            "Expert International Trainers",
            "100% International Career Support"
          ].map((benefit, i) => (
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
          <a 
            href="https://wa.me/8801701959331?text=I%20want%20to%20join%20your%20Barista%20Training%20Course.%20Please%20give%20me%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            Enroll Now (বুকিং করুন)
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
