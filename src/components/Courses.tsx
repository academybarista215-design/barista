import { motion } from "motion/react";

export default function Courses() {
  const courses = [
    {
      title: "Barista Training",
      tag: "Premium",
      description: "সম্পূর্ণ প্রফেশনাল বারিস্টা কোর্স যেখানে কফি বিন থেকে সার্ভিসিং সব শেখানো হয়।",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPj5UoSDENHiAdqxfYeNBT0C1Kd0LQWIsks0ixuucF3D5RcN_IkpwQKULpZnaiWKMUlnjD_ljkpp07YVW6P4HTasv3fhRofwWE0dQznf2jp3qqWjymnGRO3jjkRWCdf8AxCWv99m_FhqL7hOpbwO49o_kkb_biQ7_RggbydddP8orW1suk5UadR50NzuluH10n5NX1T4LgqjYlkA8kyNXOVUnDmFbgi0LFioazb1xulGV_ZePsImKml-bazuMsLqy1fH-6okAI9Es"
    },
    {
      title: "Short Course",
      tag: "Fast-track",
      description: "কফি শপ ম্যানেজমেন্ট এবং বেসিক কফি মেকিং-এর জন্য ৭ দিনের শর্ট কোর্স।",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTjB22PbWVoZ5S9k80Y0MvO24CoqUBfFtK2UOa8GbSO2DHsmsBN9teA_pkTC4fkF9_bDzEZ-5cS1RgOfQZ34rRPcUIcg24rte0DzyjpAmyi4HKMVvxYGzwr0cYISysBCvKNzOu8v_x1o5pRvvPgLEdM335kPztSPJotwZOwHSHhH1FBH_Snw63FNkx5QJckxkdZsqs5Lxvavo4VavixbnN2-l0ped6ZQSR2pSf7D3ehnu902hMobKoemkBGqb468aCa5HFwYXGWYc"
    },
    {
      title: "Espresso Training",
      tag: "Specialty",
      description: "এস্প্রেসো এক্সট্রাকশন এবং মিল্ক ফ্রদিং-এর উপর বিশেষ মাস্টারক্লাস কোর্স।",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL3xQ7YEA2hsNsevoMc9AIaDLmIajpYFl_16AmoYRCGlfhxrdD8s7fvdR389ey0XekMepWhPdHMZ0ZxhC8NXGja8FJQ-iaS0tPJX8UoeujwEseh6vw6Nvbs6d6HNSvjOUdAeMw3K2QgZu4Go611hPwHWAlQVprogjsLwlzJB9dRnQYaQMJYzeJ5jtpjQsYdZr3S4sLdX7n4gJHsvUnDHNrZ5hJw8GBv2YigrQYS-0TZmGiOoKtyodm2CxGJKwwrwrJ_k-JOBDxDBA"
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[clamp(20px,4vw,36px)] font-serif font-bold text-primary mb-12 text-center leading-[1.4]">আমাদের কোর্স সমূহ</h2>
        <div className="flex overflow-x-auto pb-8 gap-8 snap-x no-scrollbar">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex-shrink-0 w-[300px] md:w-[400px] snap-center"
            >
              <div className="h-48 md:h-64 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-[clamp(16px,2.5vw,24px)] font-bold text-primary leading-[1.4]">{course.title}</h3>
                  <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full text-xs font-bold">{course.tag}</span>
                </div>
                <p className="text-on-surface-variant mb-6 text-[clamp(14px,2vw,18px)] leading-[1.4] line-clamp-3">{course.description}</p>
                <button className="w-full py-3 rounded-xl border border-primary/20 text-primary font-bold hover:bg-primary hover:text-white transition-all">
                  বিস্তারিত
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
