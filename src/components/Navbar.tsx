import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#140d0a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Professional Barista Training Academy Dhaka - Barista Course Mirpur" 
            className="h-12 w-auto object-contain"
          />
          <div className="hidden lg:block">
            <h2 className="text-white font-serif font-bold text-sm leading-tight uppercase tracking-wider">
              Professional Barista<br/><span className="text-primary">Training Academy</span>
            </h2>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-serif tracking-tight">
          <a href="#" className="text-primary font-bold border-b-2 border-primary">Home</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-300">Courses</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-300">About Us</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-300">Contact</a>
        </div>

        <motion.a 
          href="https://wa.me/8801701959331?text=I%20want%20to%20join%20your%20Barista%20Training%20Course.%20Please%20give%20me%20details."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white px-8 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-container transition-colors flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          Enroll Now
        </motion.a>
      </div>
    </nav>
  );
}
