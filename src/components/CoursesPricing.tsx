import { motion } from "motion/react";
import { Check, Clock, Coffee, MessageCircle, Flame, Star } from "lucide-react";

interface Course {
  id: number;
  name: string;
  duration: string;
  originalPrice: string;
  discountedPrice: string;
  popular?: boolean;
}

const withAccommodation: Course[] = [
  { id: 1, name: "Barista Mocktail Course", duration: "8 Day", originalPrice: "17550 tk", discountedPrice: "13500 tk" },
  { id: 2, name: "Professional Barista Course", duration: "10 Day", originalPrice: "20150 tk", discountedPrice: "15500 tk", popular: true },
  { id: 3, name: "Professional Barista Course", duration: "15 Day", originalPrice: "30160 tk", discountedPrice: "23200 tk" },
  { id: 4, name: "Professional Barista Course", duration: "20 Day", originalPrice: "40300 tk", discountedPrice: "31000 tk" },
];

const withoutAccommodation: Course[] = [
  { id: 5, name: "Barista Mocktail Course", duration: "8 Day", originalPrice: "13000 tk", discountedPrice: "10000 tk" },
  { id: 6, name: "Professional Barista Course", duration: "10 Day", originalPrice: "15600 tk", discountedPrice: "12000 tk", popular: true },
  { id: 7, name: "Professional Barista Course", duration: "15 Day", originalPrice: "23400 tk", discountedPrice: "18000 tk" },
  { id: 8, name: "Professional Barista Course", duration: "20 Day", originalPrice: "31200 tk", discountedPrice: "24000 tk" },
];

export default function CoursesPricing() {
  const renderCourseGrid = (courses: Course[], title: string, subtitle: string) => (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-black text-white mb-2">{title}</h3>
        <p className="text-primary font-bold text-sm tracking-widest uppercase">{subtitle}</p>
      </div>
      
      <div className="flex overflow-x-auto pt-10 pb-12 snap-x snap-mandatory gap-6 no-scrollbar -mx-6 px-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col h-full flex-shrink-0 w-[280px] sm:w-[350px] snap-center ${
              course.popular 
                ? 'bg-gradient-to-br from-[#2a1a14] to-[#1c100b] border-primary/50 shadow-[0_20px_50px_rgba(255,107,0,0.15)]' 
                : 'bg-[#1c100b] border-white/5 hover:border-primary/30 shadow-xl'
            }`}
          >
            {course.popular && (
              <div className="absolute -top-4 right-8 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl z-20">
                <Flame className="w-3 h-3 fill-current" />
                Most Popular
              </div>
            )}

            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                <Coffee className="w-6 h-6" />
              </div>
              <span className="bg-orange-500/10 text-orange-500 text-[11px] font-black px-3 py-1.5 rounded-lg border border-orange-500/20 uppercase tracking-tighter">
                30% OFF Limited Offer
              </span>
            </div>

            <h4 className="text-2xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
              {course.name}
            </h4>
            
            <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-6">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-bold text-primary/80 uppercase tracking-wide">{course.duration} Intensive Training</span>
            </div>

            <div className="mb-8 p-6 rounded-2xl bg-white/5 border border-white/5 mt-auto">
              <p className="text-on-surface-variant/50 text-sm line-through mb-1 font-medium">
                {course.originalPrice}
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-black text-primary tracking-tight">
                  {course.discountedPrice.split(' ')[0]}
                </p>
                <p className="text-xl font-bold text-primary/60">TK</p>
              </div>
            </div>

            <ul className="space-y-3 mb-10 px-2">
              <li className="flex items-center gap-3 text-sm text-on-surface-variant font-medium">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Modern Espresso Machine Practice</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant font-medium">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Professional Barista Certificate</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant font-medium">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>100% Job Placement Assistance</span>
              </li>
            </ul>

            <a 
              href={`https://wa.me/8801701959331?text=I%20want%20to%20join%20the%20${encodeURIComponent(course.name)}%20(${course.duration}).%20Please%20give%20me%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative overflow-hidden bg-primary hover:bg-orange-600 text-white font-black py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Enroll Now
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-32 bg-[#0d0907] relative overflow-hidden" id="courses">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6"
          >
            Course Fees & Pricing 2024
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight"
          >
            Our <span className="text-primary italic">Courses</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Choose the best <span className="text-primary">Professional Barista Course</span> in Bangladesh. We offer hands-on training at our <span className="text-primary">Coffee Training Academy</span> in Dhaka.
          </motion.p>
        </div>

        {/* Group 1: With Accommodation */}
        {renderCourseGrid(withAccommodation, "থাকা-খাওয়া সহ", "With Accommodation")}

        {/* Separator */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-32"></div>

        {/* Group 2: Without Accommodation */}
        {renderCourseGrid(withoutAccommodation, "থাকা-খাওয়া ছাড়া", "Without Accommodation")}

      </div>
    </section>
  );
}
