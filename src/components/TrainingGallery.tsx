import { motion } from "motion/react";
import studentImg1 from "../assets/students/30b89021-a341-4f8e-a740-26a13b31287a.jpg";
import studentImg2 from "../assets/students/70bce8f1-62d3-4455-aaa5-9001b881ae90.jpg";
import studentImg3 from "../assets/students/892de618-dae6-498f-b300-b5e6bcc324aa.jpg";
import studentImg4 from "../assets/students/c0f1baf7-5f93-4046-8e14-b0d01a95949a.jpg";
import studentImg5 from "../assets/students/d5375d48-0ecc-42ba-9558-50ba25d6b530.jpg";
import studentImg6 from "../assets/students/dfdb39ea-aecc-419c-85ce-3cab780813e6.jpg";

export default function TrainingGallery() {
  const images = [
    { src: studentImg1, alt: "Barista student hands-on training session at academy" },
    { src: studentImg2, alt: "Professional coffee brewing and espresso extraction practice" },
    { src: studentImg3, alt: "Latte art and milk steaming technique training" },
    { src: studentImg4, alt: "Students learning barista skills on commercial espresso machines" },
    { src: studentImg5, alt: "Advanced coffee preparation and grinder calibration" },
    { src: studentImg6, alt: "Practical barista exam and skill evaluation session" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-surface overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4"
          >
            Real Training Moments
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white"
          >
            Hands-on <span className="text-primary italic">Training Gallery</span> — বাস্তব প্রশিক্ষণ এক নজরে
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant max-w-2xl mx-auto text-lg mt-4"
          >
            আমাদের আধুনিক একাডেমিতে শিক্ষার্থীদের সরাসরি প্রশিক্ষণের কিছু স্থিরচিত্র। 
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          {images.map((img, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl bg-surface-container-low h-[200px] md:h-[300px]"
            >
              <motion.img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                whileHover={{ scale: 1.05 }}
              />
              
              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-surface/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Decorative Border */}
              <div className="absolute inset-0 border border-white/5 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
