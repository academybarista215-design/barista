import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function Reviews() {
  const reviews = [
    {
      name: "সাকিব আল হাসান",
      role: "জুনিয়র বারিস্টা",
      text: "খুবই ভালো শেখানো হয়। ট্রেইনার অনেক ধৈর্য নিয়ে সব বুঝিয়ে দেন। উনার মেন্টরশিপ আমাকে একজন সফল বারিস্টা হতে সাহায্য করেছে।",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAONmoamkvIB0BrvYmBe0649dL56l1rod7mFKVyrszG6oSg2sHoonNCDCYHmrKr5AaZ52kDS32aeEmocZSRqHAwbDN7PxWuTh-MU6O-f-MvLaqZzzqj5568DCC0zSlL_KkzkFB_j6SKUJAr1XpPUOqBkHCqS-CEL_9g74V6aW8R8p3NZg5xdupD06c3ZrNYYdEH8OrXVbJz_yFe2W2xSziDEQC_FwUwmPZSIBNmE6aRi5rF4_zHukkk5vN2Hi7wcWJ9hxhGQOXesys"
    },
    {
      name: "আনিসা রহমান",
      role: "হোম ব্রিউয়ার",
      text: "অ্যাকাডেমির মেশিনগুলো লেটেস্ট হওয়ায় কাজ শেখা অনেক সহজ হয়ে যায়। বিশেষ করে লাতে আর্ট শেখার পদ্ধতিটা অসাধারণ ছিল।",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApvQb2PdCueyazzSKBuHE-zZ6U-LZuQ61uw0n8xye7_-_FavR8pAdhzpX-CoLy7UTlyUfGZySF7FvrJsLrGhWh7TusO33FOGw_O9DjqFd2-vpOeGWTRgjW6v5Y51da8QdhBxxqOMokCZUfNrCjwx3l0Q2cQ-qdLuKk-d_C1M9nqtcfCUzBpJ9GUnsUoZ0oidshbQY0kWauwzIgpNROqplaCqUQVHroUSBOl5Uz6BkeI1il-SFplaLQzCvG6ku-3p3UdPJYrbEFBeA"
    },
    {
      name: "তানজিল আহমেদ",
      role: "বারিস্টা, কফিবিন",
      text: "কোর্স শেষের পর তারা চাকরি খুঁজে পেতে অনেক সাহায্য করেছে। ট্রেইনারের গাইডেন্স ছাড়া এটা সম্ভব হতো না। ধন্যবাদ!",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd4O0M07eVLIblBGI3iII_qIJVfhY6_QysxoBM8r_8ELAT1GQ6r8d72dS0Q5samJ7G4oaHG8DgaOffPv3ULrxm1cBJzN93Bt6vthWZhFsTEfnWRvKx1nyZRFGL2P2v7AexhC5Aapf6Jgdm3wCNr7IXyAw_-RVLHiwWy66TCtmpOW4wQiv3sWLdxINlaNgN34946Reu_IZMJ29zrOymNCm6LtPMNcT3BQ7BUE90RNO6q6lo_Bx06_msM7Lki-yredynfoQAD8XEiSE"
    }
  ];

  return (
    <section className="py-24 bg-[#110a08] relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3rem)] font-serif font-bold text-on-surface"
          >
            What Our <span className="text-primary italic">Students</span> Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 relative group hover:border-primary/20 transition-all flex flex-col justify-between"
            >
              <Quote className="text-primary/10 w-20 h-20 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />
              
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-on-surface-variant mb-8 italic relative z-10 text-lg leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/5">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-on-surface text-lg">{review.name}</p>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
