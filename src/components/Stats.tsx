import { Star, Users, GraduationCap, Briefcase } from "lucide-react";
import { motion } from "motion/react";

export default function Stats() {
  const stats = [
    { 
      value: "1000+", 
      label: "Students Trained", 
      icon: <Users className="w-5 h-5 text-primary" />,
      sub: "Success Stories"
    },
    { 
      value: "4.9/5", 
      label: "User Rating", 
      icon: <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />,
      sub: "Google Reviews"
    },
    { 
      value: "95%", 
      label: "Job Placement", 
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      sub: "Industry Rate"
    },
    { 
      value: "5+ Years", 
      label: "Experience", 
      icon: <GraduationCap className="w-5 h-5 text-primary" />,
      sub: "Expert Mentorship"
    },
  ];

  return (
    <section className="py-16 bg-[#0d0907] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mb-4 transition-all group-hover:bg-primary/10 group-hover:border-primary/30">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-on-surface mb-1">{stat.value}</h3>
              <p className="text-primary font-bold text-sm uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-on-surface-variant text-xs opacity-60 font-medium">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
