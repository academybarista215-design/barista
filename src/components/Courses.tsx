import { motion } from "motion/react";

export default function Courses() {
  const courses = [
    {
      title: "Master Barista Course",
      tag: "Premium",
      description: "সম্পূর্ণ প্রফেশনাল বারিস্টা কোর্স যেখানে কফি বিন থেকে সার্ভিসিং সব শেখানো হয়।",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPj5UoSDENHiAdqxfYeNBT0C1Kd0LQWIsks0ixuucF3D5RcN_IkpwQKULpZnaiWKMUlnjD_ljkpp07YVW6P4HTasv3fhRofwWE0dQznf2jp3qqWjymnGRO3jjkRWCdf8AxCWv99m_FhqL7hOpbwO49o_kkb_biQ7_RggbydddP8orW1suk5UadR50NzuluH10n5NX1T4LgqjYlkA8kyNXOVUnDmFbgi0LFioazb1xulGV_ZePsImKml-bazuMsLqy1fH-6okAI9Es"
    },
    {
      title: "Short Skill Course",
      tag: "Fast-track",
      description: "কফি শপ ম্যানেজমেন্ট এবং বেসিক কফি মেকিং-এর জন্য ৭ দিনের শর্ট কোর্স।",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTjB22PbWVoZ5S9k80Y0MvO24CoqUBfFtK2UOa8GbSO2DHsmsBN9teA_pkTC4fkF9_bDzEZ-5cS1RgOfQZ34rRPcUIcg24rte0DzyjpAmyi4HKMVvxYGzwr0cYISysBCvKNzOu8v_x1o5pRvvPgLEdM335kPztSPJotwZOwHSHhH1FBH_Snw63FNkx5QJckxkdZsqs5Lxvavo4VavixbnN2-l0ped6ZQSR2pSf7D3ehnu902hMobKoemkBGqb468aCa5HFwYXGWYc"
    },
    {
      title: "Latte Art Masterclass",
      tag: "Specialty",
      description: "এস্প্রেসো এক্সট্রাকশন এবং মিল্ক ফ্রদিং-এর উপর বিশেষ মাস্টারক্লাস কোর্স।",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL3xQ7YEA2hsNsevoMc9AIaDLmIajpYFl_16AmoYRCGlfhxrdD8s7fvdR389ey0XekMepWhPdHMZ0ZxhC8NXGja8FJQ-iaS0tPJX8UoeujwEseh6vw6Nvbs6d6HNSvjOUdAeMw3K2QgZu4Go611hPwHWAlQVprogjsLwlzJB9dRnQYaQMJYzeJ5jtpjQsYdZr3S4sLdX7n4gJHsvUnDHNrZ5hJw8GBv2YigrQYS-0TZmGiOoKtyodm2CxGJKwwrwrJ_k-JOBDxDBA"
    }
  ];

  return (
    <section className="py-24 bg-[#1c100b] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Programs</p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-serif font-bold text-on-surface leading-[1.3]">আমাদের কোর্স সমূহ</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="group bg-surface rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-300 hover:shadow-3xl hover:shadow-primary/10"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-surface to-transparent z-10"></div>
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-6 right-6 z-20 bg-primary/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{course.tag}</span>
              </div>
              <div className="p-8 relative z-10">
                <h3 className="text-[clamp(1.4rem,2.5vw,1.6rem)] font-bold text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="text-on-surface-variant mb-8 text-[clamp(0.95rem,2vw,1rem)] leading-[1.6] line-clamp-2">{course.description}</p>
                <button className="w-full py-4 rounded-2xl bg-surface-container-highest text-on-surface font-bold hover:bg-primary hover:text-white transition-all shadow-lg border border-white/5 group-hover:border-primary">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
