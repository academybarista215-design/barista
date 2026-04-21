export default function SuccessStory() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#1c100b] rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 text-white overflow-hidden relative border border-white/5 shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          
          <div className="w-full lg:w-1/2 relative z-10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf6rddvcudvYohT7QkpcBl8KflWh1YI2zRaCU-Fvg0rA6EZuj4_H6gxnn4QNKYDtKBDRD2LhsE-xvtTVyeRERBqUYUjopr6KG1teDml12b5N2EbczFnx_xDbhfb-FdWcUP6jyNb98h2zrL-faVN2uRpcMyFtmM_vPOfFFyLKeAtWxO8xX8GU6OkImnjHWzMZrAE_fr3eOjtZjFWKreEQ5r5XhYbflrBiBWvFHerSgyBaYAtmB59JLATNkzHEwQCMwrnGQ500DQtKI" 
              alt="Student Success Story" 
              className="w-full h-[400px] md:h-[550px] object-cover object-center rounded-[2rem] shadow-3xl ring-1 ring-white/10"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-full lg:w-1/2 relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-12 bg-primary/50"></div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Success Stories</span>
            </div>
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-serif font-bold mb-8 leading-[1.3] text-on-surface">
              "অ্যাকাডেমির প্র্যাকটিক্যাল ট্রেনিং আমাকে আজ ঢাকার টপ ক্যাফেতে চাকরি পাইয়ে দিয়েছে"
            </h2>
            <p className="text-[clamp(1.1rem,3vw,1.4rem)] text-on-surface-variant mb-10 leading-[1.6]">— Rahim Islam (Alumni)</p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-primary leading-tight">৩ মাস</p>
                <p className="text-on-surface-variant text-sm mt-1">প্রশিক্ষণ সময়কাল</p>
              </div>
              <div>
                <p className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-primary leading-tight">১০০%</p>
                <p className="text-on-surface-variant text-sm mt-1">ক্যারিয়ার সাফল্য</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
