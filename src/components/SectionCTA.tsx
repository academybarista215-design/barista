import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

interface SectionCTAProps {
  title?: string;
  buttonText?: string;
}

export default function SectionCTA({ 
  title = "Start Your Barista Career Today", 
  buttonText = "Enroll Now" 
}: SectionCTAProps) {
  return (
    <section className="py-12 bg-[#0d0907]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-[2.5rem] bg-gradient-to-r from-[#1c100b] to-primary/20 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-on-surface text-center md:text-left">
            {title}
          </h2>
          <a 
            href="https://wa.me/8801701959331?text=I%20want%20to%20join%20your%20Barista%20Training%20Course.%20Please%20give%20me%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap btn-primary px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/30 flex items-center gap-2 group"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            {buttonText}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
