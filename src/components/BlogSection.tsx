import { motion } from "motion/react";
import { ArrowRight, Clock, User } from "lucide-react";

const posts = [
  {
    title: "How to Become a Professional Barista in Bangladesh",
    titleBn: "বাংলাদেশে কীভাবে প্রফেশনাল বারিস্তা হবেন",
    excerpt: "Barista হওয়ার জন্য কী কী দক্ষতা দরকার, কোথায় ট্রেনিং নেবেন, এবং বাংলাদেশে বারিস্তা ক্যারিয়ার কেমন — সব কিছু জানুন এই গাইডে।",
    author: "Rayhan Ahmed",
    readTime: "5 min read",
    tag: "Career Guide",
    tagColor: "bg-primary/20 text-primary border-primary/30"
  },
  {
    title: "Barista Salary in Dhaka 2026 – What to Expect",
    titleBn: "ঢাকায় বারিস্তার বেতন ২০২৬ সালে",
    excerpt: "ঢাকার ক্যাফে ও রেস্তোরাঁয় একজন বারিস্তার গড় বেতন কত? অভিজ্ঞতার সাথে কীভাবে বাড়ে income — জানুন বিস্তারিত।",
    author: "Rayhan Ahmed",
    readTime: "4 min read",
    tag: "Salary & Jobs",
    tagColor: "bg-green-500/20 text-green-400 border-green-500/30"
  },
  {
    title: "Top 5 Coffee Skills Every Barista Must Learn",
    titleBn: "প্রতিটি বারিস্তার শেখা উচিত এমন ৫টি কফি স্কিল",
    excerpt: "Espresso extraction থেকে latte art পর্যন্ত — এই ৫টি দক্ষতা একজন সফল বারিস্তাকে অন্যদের থেকে আলাদা করে তোলে।",
    author: "Rayhan Ahmed",
    readTime: "6 min read",
    tag: "Skills",
    tagColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
  }
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-[#110a08] relative overflow-hidden" id="blog">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Blog & Resources
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3rem)] font-serif font-bold text-on-surface mb-4"
          >
            Barista Career Guides & Tips
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg max-w-xl mx-auto"
          >
            বারিস্তা ক্যারিয়ার, কফি ট্রেনিং এবং ইন্ডাস্ট্রি সম্পর্কে জানুন
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary/25 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col"
            >
              {/* Tag */}
              <span className={`self-start text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border mb-6 ${post.tagColor}`}>
                {post.tag}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-primary/70 font-medium mb-4">{post.titleBn}</p>

              {/* Excerpt */}
              <p className="text-on-surface-variant text-sm leading-relaxed flex-1 mb-6">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-5 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
                  <User className="w-3 h-3" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>

              {/* Read More */}
              <button className="mt-5 flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
