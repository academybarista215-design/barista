export default function SuccessStory() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 text-white overflow-hidden relative">
          {/* Subtle background texture could go here */}
          <div className="w-full lg:w-1/2">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf6rddvcudvYohT7QkpcBl8KflWh1YI2zRaCU-Fvg0rA6EZuj4_H6gxnn4QNKYDtKBDRD2LhsE-xvtTVyeRERBqUYUjopr6KG1teDml12b5N2EbczFnx_xDbhfb-FdWcUP6jyNb98h2zrL-faVN2uRpcMyFtmM_vPOfFFyLKeAtWxO8xX8GU6OkImnjHWzMZrAE_fr3eOjtZjFWKreEQ5r5XhYbflrBiBWvFHerSgyBaYAtmB59JLATNkzHEwQCMwrnGQ500DQtKI" 
              alt="Student Success Story" 
              className="w-full h-[400px] md:h-[550px] object-cover object-center rounded-2xl shadow-2xl ring-1 ring-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-12 bg-white/30"></div>
              <span className="text-secondary-fixed font-bold tracking-widest uppercase text-sm">সফলতার গল্প</span>
            </div>
            <h2 className="text-[clamp(1.4rem,4vw,2.2rem)] font-serif font-bold mb-6 leading-[1.6]">
              "অ্যাকাডেমির প্র্যাকটিক্যাল ট্রেনিং আমাকে আজ ঢাকার টপ ক্যাফেতে চাকরি পাইয়ে দিয়েছে"
            </h2>
            <p className="text-[clamp(1.1rem,3vw,1.6rem)] opacity-90 mb-8 leading-[1.6]">— রহিম ইসলাম (প্রাক্তন শিক্ষার্থী)</p>
            
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-[clamp(1.4rem,4vw,2.2rem)] font-bold text-secondary-fixed leading-[1.6]">৩ মাস</p>
                <p className="opacity-70 text-sm">প্রশিক্ষণ সময়কাল</p>
              </div>
              <div>
                <p className="text-[clamp(1.4rem,4vw,2.2rem)] font-bold text-secondary-fixed leading-[1.6]">১০০%</p>
                <p className="opacity-70 text-sm">আত্মবিশ্বাস</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
