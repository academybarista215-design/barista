import { motion } from "motion/react";
export default function TrainingGallery() {
  const images = [
    { src: "/gallery-1.png", caption: "Latte Art Practice", alt: "Barista training in Dhaka - student practicing latte art" },
    { src: "/gallery-2.png", caption: "Espresso Training", alt: "Barista training in Dhaka - espresso machine training" },
    { src: "/gallery-3.png", caption: "Real Café Experience", alt: "Barista training in Dhaka - student cafe experience" },
    { src: "/gallery-4.png", caption: "Milk Texturing Skills", alt: "Barista training in Dhaka - milk steaming practice" },
    { src: "/gallery-5.png", caption: "Professional Grinding", alt: "Barista training in Dhaka - coffee grinder calibration" },
    { src: "/gallery-6.png", caption: "Perfect Extraction", alt: "Barista training in Dhaka - professional espresso extraction" },
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
    <section className="py-24 bg-[#0d0907] overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Our Training Highlights
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Hands-on <span className="text-primary italic">Training Gallery</span> — বাস্তব প্রশিক্ষণ এক নজরে
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant max-w-2xl mx-auto text-lg"
          >
            আমাদের আধুনিক একাডেমিতে শিক্ষার্থীদের সরাসরি প্রশিক্ষণের কিছু স্থিরচিত্র। 
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((img, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative rounded-3xl overflow-hidden shadow-2xl bg-surface-container-low aspect-[4/3]"
            >
              <motion.img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0907] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Hands-on Session</p>
                  <h4 className="text-xl font-bold text-white">{img.caption}</h4>
                </div>
              </div>
              
              {/* Subtle Border Overlay */}
              <div className="absolute inset-0 border border-white/5 group-hover:border-primary/20 transition-colors pointer-events-none rounded-3xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
