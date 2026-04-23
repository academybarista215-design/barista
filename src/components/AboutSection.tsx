import { motion } from "motion/react";
import { MapPin, Phone, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#0d0907] relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: SEO Content Block */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
            >
              About Our Academy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-serif font-bold text-on-surface mb-6 leading-tight"
            >
              Best Barista Training Academy in Dhaka, Bangladesh
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-5 text-on-surface-variant text-lg leading-relaxed"
            >
              <p>
                <strong className="text-on-surface">Professional Barista Training Academy</strong> is Dhaka's leading coffee training institute, located in Mirpur-11. We offer comprehensive <strong className="text-primary">barista courses in Dhaka</strong> designed for beginners and working professionals who want to build a career in the coffee industry.
              </p>
              <p>
                আমাদের একাডেমি বাংলাদেশের সেরা বারিস্তা ট্রেনিং সেন্টার, যেখানে আপনি হাতে-কলমে শিখতে পারবেন এস্প্রেসো মেকিং, লাতে আর্ট, ক্যাপুচিনো, মকটেইল তৈরি এবং কফি শপ ম্যানেজমেন্ট। আমাদের <strong className="text-primary">বারিস্তা কোর্সে</strong> ৫০০+ শিক্ষার্থী সফলভাবে প্রশিক্ষণ নিয়েছেন।
              </p>
              <p>
                Our <strong className="text-on-surface">Barista Training in Dhaka</strong> covers everything from espresso machine operation and milk texturing to latte art and café management. Whether you're a coffee enthusiast or a career changer, our hands-on curriculum gets you job-ready fast.
              </p>
              <p>
                আপনি যদি একজন প্রফেশনাল বারিস্টা হতে চান এবং ক্যারিয়ার গড়তে চান কফি ইন্ডাস্ট্রিতে, তাহলে আমাদের <strong className="text-primary">বারিস্তা ট্রেনিং কোর্স</strong> আপনার জন্যই। কোর্স শেষে সার্টিফিকেট এবং চাকরির সহায়তা প্রদান করা হয়।
              </p>
            </motion.div>
          </div>

          {/* Right: Local SEO Card + Map */}
          <div className="flex flex-col gap-8">
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10"
            >
              <h3 className="text-xl font-bold text-on-surface mb-6">📍 Find Us in Dhaka</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface text-sm uppercase tracking-wider mb-1">Address</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      House-21, Road-01, Block-B, <br />
                      <strong className="text-on-surface">Mirpur-11, Dhaka-1216, Bangladesh</strong>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface text-sm uppercase tracking-wider mb-1">Phone (Call / WhatsApp)</p>
                    <a href="tel:+8801701959331" className="text-primary font-black text-xl hover:underline">
                      01701-959331
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface text-sm uppercase tracking-wider mb-1">Open Hours</p>
                    <p className="text-on-surface-variant text-sm">Saturday – Thursday: <strong className="text-on-surface">10:00 AM – 7:00 PM</strong></p>
                    <p className="text-on-surface-variant text-sm mt-1">Friday: <strong className="text-on-surface">Closed</strong></p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Map Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl h-64"
            >
              <iframe
                title="Barista Training Academy Location - Mirpur-11 Dhaka"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.6!2d90.3654!3d23.8223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ5JzIwLjMiTiA5MMKwMjEnNTUuNCJF!5e0!3m2!1sen!2sbd!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
