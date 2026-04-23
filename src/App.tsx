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
import AboutSection from "./components/AboutSection";
import Mentorship from "./components/Mentorship";
import Trainer from "./components/Trainer";
import WhyChooseUs from "./components/WhyChooseUs";
import BlogSection from "./components/BlogSection";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0907] selection:bg-primary/30 selection:text-primary relative font-sans antialiased text-on-surface">
      <Navbar />

      <main className="flex flex-col">
        {/* 1. Hero - H1 keyword: "Best Barista Training Course in Dhaka" */}
        <Hero />

        {/* 2. Trust Indicators */}
        <Stats />

        {/* 3. Courses & Pricing */}
        <CoursesPricing />

        {/* 4. About / Local SEO + Map */}
        <AboutSection />

        {/* 5. Mentorship Section */}
        <Mentorship />

        {/* 6. Trainer Section */}
        <Trainer />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Blog / Content SEO */}
        <BlogSection />

        {/* 9. FAQ */}
        <FAQ />

        {/* 10. Testimonials */}
        <Reviews />

        {/* 11. Final CTA */}
        <CTA />
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

        <motion.a
          href="https://wa.me/8801701959331"
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
      </div>
    </div>
  );
}
