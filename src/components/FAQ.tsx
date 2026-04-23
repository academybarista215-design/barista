import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Barista course fee koto? (বারিস্তা কোর্সের ফি কত?)",
    a: "আমাদের কোর্সের মূল্য কোর্সের ধরন ও সময়কালের উপর নির্ভর করে। বর্তমানে আমাদের ৩০% ডিসকাউন্ট অফার চলছে। থাকা-খাওয়া ছাড়া Basic Barista Course ৳৩,৫০০ থেকে শুরু এবং Master Barista Pro ৳১৭,৫০০ পর্যন্ত। বিস্তারিত জানতে কল করুন: 01701-959331।"
  },
  {
    q: "Course duration koto din? (কোর্সের মেয়াদ কত দিন?)",
    a: "আমাদের কোর্সগুলো ১ দিন থেকে শুরু করে ২০ দিন পর্যন্ত। Short Skill Course ৭ দিন, Professional Barista Course ১৫ দিন, এবং Master Barista Pro ২০ দিনের। প্রতিটি কোর্সে প্রতিদিন ৪-৬ ঘন্টা হাতে-কলমে প্রশিক্ষণ দেওয়া হয়।"
  },
  {
    q: "Is barista training available with accommodation? (থাকা-খাওয়াসহ কোর্স আছে?)",
    a: "Yes! We offer both options — with and without accommodation. Students from outside Dhaka can opt for our accommodation package which includes stay and meals. This is ideal for students from Chittagong, Sylhet, Rajshahi, and other districts of Bangladesh."
  },
  {
    q: "Barista course shesh howar por job pabo? (কোর্স শেষে চাকরি পাওয়া যাবে?)",
    a: "হ্যাঁ! আমাদের ৯৫% শিক্ষার্থী কোর্স শেষে কাজ পেয়েছেন। আমরা সার্টিফিকেট প্রদানের পাশাপাশি ক্যারিয়ার সাপোর্ট, রেফারেন্স লেটার এবং জব প্লেসমেন্ট সহায়তা প্রদান করি। অনেকেই বিদেশেও কাজ করছেন।"
  },
  {
    q: "Do I need prior experience for the barista course in Dhaka?",
    a: "No prior experience is required. Our Barista Training in Dhaka is designed for absolute beginners as well as those with some knowledge who want to upgrade their skills. We start from the basics of coffee beans, espresso extraction, and build up to advanced latte art and café management."
  },
  {
    q: "Certificate dewa hoy? (সার্টিফিকেট দেওয়া হয়?)",
    a: "হ্যাঁ, কোর্স শেষে সকল শিক্ষার্থীকে অফিশিয়াল সার্টিফিকেট প্রদান করা হয়। এই সার্টিফিকেট দেশে-বিদেশে কফি শপ ও হোটেলে চাকরি পেতে সহায়তা করে।"
  },
  {
    q: "Is the barista course available in Bangla (Bangla medium)?",
    a: "Yes! Our barista training classes are conducted in both Bangla and English. All demonstrations and practical sessions are explained in Bangla first, making it easy for local students to understand and learn confidently."
  },
  {
    q: "How to enroll in the barista course in Dhaka?",
    a: "Enrollment is simple. Call or WhatsApp us at 01701-959331 to book your seat. You can also visit us directly at House-21, Road-01, Block-B, Mirpur-11, Dhaka. Registration is open year-round and new batches start every month."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0d0907] relative overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3rem)] font-serif font-bold text-on-surface mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg"
          >
            Barista course সম্পর্কে সাধারণ প্রশ্নের উত্তর
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? "bg-white/5 border-primary/30 shadow-lg shadow-primary/5"
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
              }`}
            >
              <button
                id={`faq-btn-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className={`font-bold text-base md:text-lg leading-snug transition-colors ${openIndex === i ? "text-primary" : "text-on-surface"}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-primary transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-on-surface-variant text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 rounded-3xl bg-primary/10 border border-primary/20"
        >
          <p className="text-on-surface font-bold text-xl mb-2">
            আরও প্রশ্ন আছে? সরাসরি কথা বলুন।
          </p>
          <p className="text-on-surface-variant mb-6 text-sm">
            Still have questions about our Barista Course in Dhaka? We're happy to help!
          </p>
          <a
            href="tel:+8801701959331"
            className="inline-block bg-primary hover:bg-primary-container text-white px-10 py-4 rounded-xl text-lg font-bold shadow-xl shadow-primary/30 transition-all hover:-translate-y-1"
          >
            📞 Call: 01701-959331
          </a>
        </motion.div>
      </div>
    </section>
  );
}
