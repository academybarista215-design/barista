import { Mail, MessageCircle, Instagram, Facebook } from "lucide-react";
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
            className="h-16 w-auto object-contain"
          />
          <p className="text-on-surface-variant text-base max-w-sm leading-relaxed font-medium">
            Professional Barista Training Academy (ESTD 2024). <br/> 
            ঢাকার সেরা কারিগরি প্রশিক্ষণ কেন্দ্র যেখানে আমরা আধুনিক পন্থায় বারিস্তা প্রশিক্ষণ প্রদান করি।
          </p>
          <div className="text-on-surface-variant text-sm mt-4 opacity-60">
            © ২০২৪-২০২৬ বারিস্টা ট্রেনিং একাডেমি। <br className="md:hidden"/> All rights reserved.
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

        {/* Social & Contact */}
        <div className="md:col-span-4 flex flex-col items-center md:items-end gap-8 text-center md:text-right">
          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="text-on-surface font-bold text-lg">Join Our Community</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-[#1c100b] flex items-center justify-center border border-white/5 hover:border-primary/50 hover:bg-primary/10 transition-all text-on-surface-variant hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-[#1c100b] flex items-center justify-center border border-white/5 hover:border-primary/50 hover:bg-primary/10 transition-all text-on-surface-variant hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-[#1c100b] flex items-center justify-center border border-white/5 hover:border-primary/50 hover:bg-primary/10 transition-all text-on-surface-variant hover:text-primary">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-[#1c100b] flex items-center justify-center border border-white/5 hover:border-primary/50 hover:bg-primary/10 transition-all text-on-surface-variant hover:text-primary">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-on-surface font-semibold">Dhaka, Bangladesh</p>
            <p className="text-on-surface-variant text-sm">Near Banani 11, Road 27</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
