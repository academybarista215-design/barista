import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function Reviews() {
  const reviews = [
    {
      name: "সাকিব আল হাসান",
      role: "জুনিয়র বারিস্টা",
      text: "খুবই ভালো শেখানো হয়। ট্রেইনার অনেক ধৈর্য নিয়ে সব বুঝিয়ে দেন।",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAONmoamkvIB0BrvYmBe0649dL56l1rod7mFKVyrszG6oSg2sHoonNCDCYHmrKr5AaZ52kDS32aeEmocZSRqHAwbDN7PxWuTh-MU6O-f-MvLaqZzzqj5568DCC0zSlL_KkzkFB_j6SKUJAr1XpPUOqBkHCqS-CEL_9g74V6aW8R8p3NZg5xdupD06c3ZrNYYdEH8OrXVbJz_yFe2W2xSziDEQC_FwUwmPZSIBNmE6aRi5rF4_zHukkk5vN2Hi7wcWJ9hxhGQOXesys"
    },
    {
      name: "আনিসা রহমান",
      role: "হোম ব্রিউয়ার",
      text: "অ্যাকাডেমির মেশিনগুলো লেটেস্ট হওয়ায় কাজ শেখা অনেক সহজ হয়ে যায়।",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApvQb2PdCueyazzSKBuHE-zZ6U-LZuQ61uw0n8xye7_-_FavR8pAdhzpX-CoLy7UTlyUfGZySF7FvrJsLrGhWh7TusO33FOGw_O9DjqFd2-vpOeGWTRgjW6v5Y51da8QdhBxxqOMokCZUfNrCjwx3l0Q2cQ-qdLuKk-d_C1M9nqtcfCUzBpJ9GUnsUoZ0oidshbQY0kWauwzIgpNROqplaCqUQVHroUSBOl5Uz6BkeI1il-SFplaLQzCvG6ku-3p3UdPJYrbEFBeA"
    },
    {
      name: "তানজিল আহমেদ",
      role: "বারিস্টা, কফিবিন",
      text: "কোর্স শেষের পর তারা চাকরি খুঁজে পেতে অনেক সাহায্য করেছে। ধন্যবাদ!",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd4O0M07eVLIblBGI3iII_qIJVfhY6_QysxoBM8r_8ELAT1GQ6r8d72dS0Q5samJ7G4oaHG8DgaOffPv3ULrxm1cBJzN93Bt6vthWZhFsTEfnWRvKx1nyZRFGL2P2v7AexhC5Aapf6Jgdm3wCNr7IXyAw_-RVLHiwWy66TCtmpOW4wQiv3sWLdxINlaNgN34946Reu_IZMJ29zrOymNCm6LtPMNcT3BQ7BUE90RNO6q6lo_Bx06_msM7Lki-yredynfoQAD8XEiSE"
    }
  ];

  // Duplicate reviews for seamless scrolling
  const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-[clamp(1.4rem,4vw,2.2rem)] font-serif font-bold text-primary leading-[1.6]">শিক্ষার্থীদের মতামত</h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }} // Adjust based on content width
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {duplicatedReviews.map((review, index) => (
            <div 
              key={index} 
              className="inline-block w-[400px] p-8 rounded-3xl bg-surface-container-low relative flex-shrink-0"
            >
              <Quote className="text-primary/10 w-24 h-24 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-on-surface-variant mb-8 italic relative z-10 whitespace-normal text-[clamp(1rem,2vw,1.1rem)] leading-[1.6]">"{review.text}"</p>
              <div className="flex items-center gap-4 relative z-10">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-primary">{review.name}</p>
                  <p className="text-xs opacity-60">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
