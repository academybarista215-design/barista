import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0a0604] py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Branding & Logo */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start gap-6 text-center md:text-left">
          <img 
            src={logo} 
            alt="Professional Barista Training Academy" 
            className="h-20 w-20 object-cover rounded-full border-2 border-primary/20 shadow-xl"
          />
          <p className="text-on-surface-variant text-base max-w-sm leading-relaxed font-medium">
            Professional Barista Training Academy (ESTD 2024). <br/> 
            The leading Barista Training Academy in Dhaka providing professional coffee training.
          </p>
          <div className="text-on-surface-variant text-sm mt-4 opacity-60">
            © 2024-2026 Professional Barista Training Academy. <br className="md:hidden"/> All rights reserved.
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 flex flex-col items-center md:items-start gap-6 text-center md:text-left">
          <h4 className="text-on-surface font-bold text-lg border-b-2 border-primary pb-1 inline-block">Quick Links</h4>
          <div className="flex flex-col gap-4 text-sm font-semibold">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Course Modules</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Success Stories</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">About Academy</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Enroll Today</a>
          </div>
        </div>

        {/* Contact */}
        <div className="md:col-span-4 flex flex-col items-center md:items-end gap-8 text-center md:text-right self-center">
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-on-surface font-semibold">Mirpur-11, Dhaka</p>
            <p className="text-on-surface-variant text-sm">House-21, Road-01, Block-B, Mirpur-11, Dhaka-1216</p>
            <p className="text-primary font-bold mt-2">Phone: 01701-959331</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
