import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Clock, Phone, MapPin, Star, Flame, Coffee } from "lucide-react";

interface Course {
  id: number;
  name: string;
  duration: string;
  originalPrice: string;
  discountedPrice: string;
  popular?: boolean;
}

const withAccommodation: Course[] = [
  { id: 1, name: "Master Barista Pro", duration: "20 Days", originalPrice: "৳35,000", discountedPrice: "৳24,500", popular: true },
  { id: 2, name: "Professional Barista", duration: "15 Days", originalPrice: "৳28,000", discountedPrice: "৳19,600" },
  { id: 3, name: "Advanced Skills", duration: "10 Days", originalPrice: "৳20,000", discountedPrice: "৳14,000" },
  { id: 4, name: "Fast-Track Barista", duration: "7 Days", originalPrice: "৳15,000", discountedPrice: "৳10,500" },
];

const withoutAccommodation: Course[] = [
  { id: 5, name: "Master Barista Pro", duration: "20 Days", originalPrice: "৳25,000", discountedPrice: "৳17,500", popular: true },
  { id: 6, name: "Professional Barista", duration: "15 Days", originalPrice: "৳20,000", discountedPrice: "৳14,000" },
  { id: 7, name: "Mocktail Specialist", duration: "10 Days", originalPrice: "৳15,000", discountedPrice: "৳10,500" },
  { id: 8, name: "Basic Barista", duration: "1 Day", originalPrice: "৳5,000", discountedPrice: "৳3,500" },
];

export default function CoursesPricing() {
  const [isAccommodation, setIsAccommodation] = useState(false);
  const activeCourses = isAccommodation ? withAccommodation : withoutAccommodation;

  return (
    <section className="py-24 bg-[#140d0a] relative overflow-hidden" id="courses">
      {/* Subtle Background Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Coffee className="w-[600px] h-[600px] text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Pricing Plans
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.2rem,5vw,3.5rem)] font-serif font-bold text-on-surface mb-6"
          >
            Our Barista Courses
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            Choose the perfect course to start your career
          </motion.p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-bold transition-colors ${!isAccommodation ? 'text-primary' : 'text-on-surface-variant'}`}>
              Without Accommodation
            </span>
            <button 
              onClick={() => setIsAccommodation(!isAccommodation)}
              className="w-16 h-8 rounded-full bg-surface-container-highest border border-white/10 relative p-1 transition-all"
            >
              <motion.div 
                animate={{ x: isAccommodation ? 32 : 0 }}
                className="w-6 h-6 rounded-full bg-primary shadow-lg"
              />
            </button>
            <span className={`text-sm font-bold transition-colors ${isAccommodation ? 'text-primary' : 'text-on-surface-variant'}`}>
              With Accommodation
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {activeCourses.map((course, index) => (
              <motion.div
                key={`${isAccommodation}-${course.id}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative group p-8 rounded-[2rem] border transition-all duration-300 ${
                  course.popular 
                    ? 'bg-gradient-to-b from-[#2a1a14] to-[#1c100b] border-primary/50 shadow-[0_0_40px_rgba(255,107,0,0.15)]' 
                    : 'bg-[#1c100b] border-white/5 hover:border-primary/30'
                }`}
              >
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl">
                    <Flame className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    <Coffee className="w-6 h-6 text-primary" />
                  </div>
                  <span className="bg-red-500/10 text-red-500 text-[10px] font-bold px-3 py-1 rounded-full border border-red-500/20">
                    30% OFF
                  </span>
                </div>

                <h3 className="text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                  {course.name}
                </h3>
                
                <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-6">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration} Duration</span>
                </div>

                <div className="mb-8">
                  <p className="text-on-surface-variant text-sm line-through decoration-red-500/50 mb-1">
                    {course.originalPrice}
                  </p>
                  <p className="text-3xl font-black text-primary">
                    {course.discountedPrice}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Hands-on Practice</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Certificate Provided</span>
                  </li>
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                  course.popular 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-container' 
                    : 'bg-surface-container-highest text-on-surface hover:bg-primary hover:text-white'
                }`}>
                  Enroll Now
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-r from-primary to-orange-600 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:24px_24px]"></div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest mb-4">
                Now Open
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Registration is Going On!
              </h2>
              <p className="text-white/80 font-medium text-lg">
                Book your seat now and get a 30% discount on all courses.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 flex-1 lg:flex-none">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider opacity-70">Call Us</p>
                    <p className="text-lg font-black">01701-959331</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 flex-1 lg:flex-none">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider opacity-70">Visit Us</p>
                    <p className="text-sm font-bold leading-tight">Mirpur-11, Dhaka-1216</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Student Review Snippet */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-4 bg-surface-container-low px-6 py-3 rounded-full border border-white/5">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#140d0a] bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="h-4 w-[1px] bg-white/10"></div>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />)}
              </div>
              <span className="text-xs font-bold text-on-surface-variant">500+ Students Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
