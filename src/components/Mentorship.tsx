import { motion } from "motion/react";
import { CheckCircle, Sparkles, MessageSquare, Target, Rocket } from "lucide-react";
import mentorshipImg from "../assets/mentorship.png";

export default function Mentorship() {
  const benefits = [
    {
      title: "Personal Guidance",
      desc: "One-on-one attention to perfect your extraction and latte art techniques.",
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Career Roadmap",
      desc: "Get a clear path to becoming a head barista or opening your own cafe.",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      title: "Live Support",
      desc: "Instant feedback during practical sessions to ensure professional growth.",
      icon: <MessageSquare className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 bg-[#110a08] relative overflow-hidden" id="mentorship">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
              <img 
                src={mentorshipImg} 
                alt="1-on-1 Barista Mentorship" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#110a08] via-transparent to-transparent opacity-50"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 md:right-10 bg-surface/90 backdrop-blur-xl p-6 rounded-3xl border border-primary/20 shadow-2xl max-w-[240px] z-20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Sparkles className="w-5 h-5" />
                </div>
                <p className="font-bold text-on-surface text-sm">Elite Support</p>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                "Our goal is to turn you into a world-class professional through personalized attention."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Text Content */}
          <div className="flex flex-col gap-8">
            <div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
              >
                Mentorship & Barista Training Bangladesh
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[clamp(2.2rem,5vw,3.5rem)] font-serif font-bold text-on-surface mb-6 leading-tight"
              >
                1-on-1 Mentorship <br />
                <span className="text-primary italic">১-অন-১ মেন্টরশিপ সাপোর্ট</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-on-surface-variant text-lg leading-relaxed max-w-xl"
              >
                আমরা শুধু কোর্স করাই না, আমরা আপনার সফল ক্যারিয়ার নিশ্চিত করতে ব্যক্তিগত মেন্টরশিপ প্রদান করি। বাস্তব অভিজ্ঞতার প্রতিটি ধাপে আমরা আছি আপনার সাথে।
              </motion.p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex gap-4 p-5 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">{benefit.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <button className="bg-primary hover:bg-primary-container text-white px-10 py-4 rounded-xl text-lg font-bold shadow-xl shadow-primary/30 transition-all hover:-translate-y-1">
                Get Mentorship
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
