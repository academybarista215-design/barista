import { motion } from "motion/react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-[#0d0907] relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Find Our Academy
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.2rem,5vw,3.5rem)] font-serif font-bold text-on-surface mb-6"
          >
            Professional <span className="text-primary italic">Barista Training Academy</span> in Dhaka
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-primary/20 transition-all">
              <h3 className="text-2xl font-bold text-on-surface mb-8 flex items-center gap-3">
                <Navigation className="w-6 h-6 text-primary" />
                Visit Our Academy Today
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface text-sm uppercase tracking-wider mb-1">Address</p>
                    <p className="text-on-surface-variant text-lg leading-relaxed">
                      House-21, Road-01, Block-B, <br />
                      <strong className="text-on-surface">Mirpur-11, Dhaka-1216, Bangladesh</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface text-sm uppercase tracking-wider mb-1">Phone (Call / WhatsApp)</p>
                    <a href="tel:+8801701959331" className="text-primary font-black text-2xl hover:underline">
                      01701-959331
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface text-sm uppercase tracking-wider mb-1">Open Hours</p>
                    <p className="text-on-surface-variant text-base">Saturday – Thursday: <strong className="text-on-surface">10:00 AM – 7:00 PM</strong></p>
                    <p className="text-on-surface-variant text-sm mt-1">Friday: <strong className="text-on-surface">Closed</strong></p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button className="w-full bg-primary hover:bg-primary-container text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/20">
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[450px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative"
          >
            <iframe
              title="Professional Barista Training Academy Location in Dhaka"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.15383921226!2d90.3665091!3d23.8131568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1b52e37e951%3A0xc367098e987c6999!2sBarista%20Training%20Academy!5e0!3m2!1sen!2sbd!4v1713878000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
