import { Globe, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-primary/10 bg-surface py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <img 
            src="https://lh3.googleusercontent.com/aida/ADBb0ugGOMBiuArZI6TOuPKIFmBS1IIhvk4RjB2xFZ7qZLp-neKLxZ2AI0Hr9hzLcqmqgC1ylW54R67JLYqekbD_z62tf3ikXYKVB08I23iC6uSSgMd60UCOtcjS2HTF7vNGsu_IBWYi_qc2_fB9FTJL0G3ZGIxsQuIZLlUJP-O3PUnDClgyFVghw8qWiOzB8gF8e9JTukP2g-4gvHdPAiYjjzdZ_e9iMOpHXNNXafzIFtv_OuDeZEkKD9biQQWmIVmEAGEYMxu74ayr6w" 
            alt="Barista Academy Logo" 
            className="h-16 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <p className="text-on-surface-variant text-sm">© ২০২৪ বারিস্টা ট্রেনিং একাডেমি। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>

        <div className="flex gap-8 text-sm">
          <a href="#" className="text-primary/60 hover:underline decoration-tertiary transition-opacity">গোপনীয়তা নীতি</a>
          <a href="#" className="text-primary/60 hover:underline decoration-tertiary transition-opacity">শর্তাবলী</a>
          <a href="#" className="text-primary/60 hover:underline decoration-tertiary transition-opacity">সচরাচর জিজ্ঞাস্য</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-secondary-container transition-colors" title="WhatsApp">
            <MessageCircle className="w-5 h-5 text-primary" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-secondary-container transition-colors">
            <Globe className="w-5 h-5 text-primary" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-secondary-container transition-colors">
            <Mail className="w-5 h-5 text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
}
