/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import CoursesPricing from "./components/CoursesPricing";
import Trainer from "./components/Trainer";
import TrainingGallery from "./components/TrainingGallery";
import WhyChooseUs from "./components/WhyChooseUs";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionCTA from "./components/SectionCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0907] selection:bg-primary/30 selection:text-primary relative font-sans antialiased text-on-surface">
      <Navbar />

      <main className="flex flex-col gap-0">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Section */}
        <Stats />

        {/* CTA 1 */}
        <SectionCTA />

        {/* 3. Courses & Pricing */}
        <CoursesPricing />

        {/* 4. Trainer Section */}
        <Trainer />

        {/* 5. Training Gallery */}
        <TrainingGallery />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* CTA 3 */}
        <SectionCTA />

        {/* 7. Final CTA */}
        <CTA />

        {/* 8. Contact & Location */}
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <motion.a
          href="tel:+8801701959331"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary text-white p-4 rounded-full shadow-2xl flex items-center justify-center border border-white/10"
          title="Call Barista Academy Dhaka"
          aria-label="Call Barista Training Academy"
        >
          <Phone className="w-6 h-6" />
        </motion.a>

        <div className="relative group">
          <motion.a
            href="https://wa.me/8801701959331?text=I%20want%20to%20join%20your%20Barista%20Training%20Course.%20Please%20give%20me%20details."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border border-white/10"
            title="WhatsApp Barista Academy"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
          </motion.a>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-[#1c100b] border border-white/10 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl">
            Chat with us on WhatsApp
          </div>
        </div>
      </div>
    </div>
  );
}
