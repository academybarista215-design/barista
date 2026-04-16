/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyChooseUs from "./components/WhyChooseUs";
import Courses from "./components/Courses";
import SuccessStory from "./components/SuccessStory";
import TrainingProcess from "./components/TrainingProcess";
import SkillsGrid from "./components/SkillsGrid";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-secondary-container selection:text-on-secondary-fixed-variant relative">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhyChooseUs />
        <Courses />
        <SuccessStory />
        <TrainingProcess />
        <SkillsGrid />
        <Reviews />
        <CTA />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/#" // Placeholder link
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </motion.a>
    </div>
  );
}
