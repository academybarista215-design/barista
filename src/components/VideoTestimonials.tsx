import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play } from "lucide-react";

// Import local videos
import video1 from "../assets/videos/AQOpwSYF2wMSSEUNozbUKXc2Az-VqCrmIWwtnJqDnNVnl4xRojWx9M9hS5p-vXjYkXH4H4XO2hgfDJFQCvIA0pweD6Vzi13ujCcBJFK9sVbANA.mp4";
import video2 from "../assets/videos/AQOysd5uQT1hsSzVGuPSlKYhtsNjvZmRjE40F3vg_nus6f16a3NtYEfRWLHL-Xbu3w-kUO86ttivGX1vnpKxSWfAJqmV0MrKuRkVPuxdyTIUaw.mp4";

function VideoCard({ url, label, description, index }: { url: string; label: string; description: string; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="flex flex-col gap-6"
    >
      <div 
        className="group relative aspect-video rounded-[2rem] overflow-hidden bg-surface-container-low border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-primary/10 hover:border-primary/20 cursor-pointer"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          controls={isPlaying} // Only show native controls when playing to avoid UI clash
          preload="metadata"
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Icon Overlay */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors pointer-events-none"
            >
              <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="px-4">
        <h4 className="text-xl font-bold text-on-surface mb-2">{label}</h4>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function VideoTestimonials() {
  const testimonials = [
    {
      url: video1,
      label: "Student Experience",
      description: "Real feedback from our baristas in training."
    },
    {
      url: video2,
      label: "Why Choose Our Academy",
      description: "Discover what makes us the best training center."
    }
  ];

  return (
    <section className="py-24 bg-[#0d0907] relative overflow-hidden" id="testimonials">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Why Students Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface"
          >
            Student <span className="text-primary italic">Success Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant max-w-2xl mx-auto text-lg"
          >
            Our success is defined by our students' growth. Watch their stories and see the professional environment we provide for every aspiring barista.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {testimonials.map((video, index) => (
            <VideoCard 
              key={index}
              index={index}
              url={video.url}
              label={video.label}
              description={video.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
