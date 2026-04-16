import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://lh3.googleusercontent.com/aida/ADBb0ugGOMBiuArZI6TOuPKIFmBS1IIhvk4RjB2xFZ7qZLp-neKLxZ2AI0Hr9hzLcqmqgC1ylW54R67JLYqekbD_z62tf3ikXYKVB08I23iC6uSSgMd60UCOtcjS2HTF7vNGsu_IBWYi_qc2_fB9FTJL0G3ZGIxsQuIZLlUJP-O3PUnDClgyFVghw8qWiOzB8gF8e9JTukP2g-4gvHdPAiYjjzdZ_e9iMOpHXNNXafzIFtv_OuDeZEkKD9biQQWmIVmEAGEYMxu74ayr6w" 
            alt="Barista Academy Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-serif tracking-tight">
          <a href="#" className="text-tertiary font-bold border-b-2 border-tertiary">হোম</a>
          <a href="#" className="text-primary/70 hover:text-tertiary transition-colors duration-300">কোর্স</a>
          <a href="#" className="text-primary/70 hover:text-tertiary transition-colors duration-300">গল্প</a>
          <a href="#" className="text-primary/70 hover:text-tertiary transition-colors duration-300">যোগাযোগ</a>
        </div>

        <motion.button 
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-primary to-primary-container text-white px-6 py-2.5 rounded-xl font-medium shadow-lg"
        >
          এনারোল করুন
        </motion.button>
      </div>
    </nav>
  );
}
