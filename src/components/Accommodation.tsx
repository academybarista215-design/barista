import { Home, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import hostelRoom from "../assets/hostel_room.png";

export default function Accommodation() {
  return (
    <section className="py-24 bg-surface-container-low relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={hostelRoom}
                alt="safe and clean accommodation for baristas at mirpur-11 hostel"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-primary font-bold mb-2 uppercase tracking-widest text-sm">Our Facilities</p>
                <h3 className="text-2xl font-bold">Mirpur-11 এ নিরাপদ ও পরিষ্কার হোস্টেল সুবিধা</h3>
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-3xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <Home className="w-8 h-8" />
                <div>
                  <p className="text-xs uppercase tracking-tighter opacity-80">Safe & Clean</p>
                  <p className="text-lg font-bold leading-tight">থাকা-খাওয়া সহ</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-widest">
              Accommodation Facility
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-serif font-bold text-on-surface leading-tight mb-8">
              থাকা-খাওয়া সহ <br />
              <span className="text-primary">সম্পূর্ণ আবাসন ব্যবস্থা</span>
            </h2>
            <p className="text-on-surface-variant text-[clamp(1rem,2.5vw,1.2rem)] leading-relaxed mb-8">
              "Mirpur-11 এ নিরাপদ ও পরিষ্কার হোস্টেল সুবিধা। থাকা-খাওয়া সহ অপশন উপলব্ধ।"
            </p>

            <div className="space-y-4">
              {[
                "নিরাপদ ও স্বাস্থ্যসম্মত পরিবেশ",
                "তিনবেলা মানসম্মত খাবার",
                "হোস্টেলে ওয়াইফাই সুবিধা",
                "নিরাপদ অবস্থান (মিরপুর-১১ নং সেকশন)"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 text-on-surface">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-[2rem] bg-surface-container-high border border-white/5">
              <p className="text-on-surface-variant italic mb-0">
                আমাদের কোর্স চলাকালীন দূরের ছাত্র-ছাত্রীদের সুবিধার জন্য আমরা এই বিশেষ প্যাকেজটি অফার করছি।
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
