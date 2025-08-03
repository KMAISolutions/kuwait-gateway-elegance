import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Discover Kuwait",
      arabic: "اكتشف الكويت",
      links: [
        { name: "Land & Geography", arabic: "الأرض والجغرافيا", href: "#land" },
        { name: "People & Culture", arabic: "الشعب والثقافة", href: "#people" },
        { name: "History & Heritage", arabic: "التاريخ والتراث", href: "#history" },
        { name: "Government", arabic: "الحكومة", href: "#government" },
      ]
    },
    {
      title: "Economy & Business",
      arabic: "الاقتصاد والأعمال",
      links: [
        { name: "Investment Opportunities", arabic: "الفرص الاستثمارية", href: "#invest" },
        { name: "Trade & Commerce", arabic: "التجارة", href: "#trade" },
        { name: "Free Zones", arabic: "المناطق الحرة", href: "#zones" },
        { name: "Market Data", arabic: "بيانات السوق", href: "#data" },
      ]
    },
    {
      title: "Visit Kuwait",
      arabic: "زر الكويت",
      links: [
        { name: "Tourism Guide", arabic: "دليل السياحة", href: "#tourism" },
        { name: "Visa Information", arabic: "معلومات التأشيرة", href: "#visa" },
        { name: "Hotels & Accommodation", arabic: "الفنادق", href: "#hotels" },
        { name: "Events & Festivals", arabic: "الفعاليات", href: "#events" },
      ]
    },
    {
      title: "Government Services",
      arabic: "الخدمات الحكومية",
      links: [
        { name: "Ministries", arabic: "الوزارات", href: "#ministries" },
        { name: "Public Services", arabic: "الخدمات العامة", href: "#services" },
        { name: "Laws & Regulations", arabic: "القوانين", href: "#laws" },
        { name: "Consular Services", arabic: "الخدمات القنصلية", href: "#consular" },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-kuwait-black to-kuwait-black/95 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 relative">
                {/* Kuwait Flag */}
                <div className="absolute inset-0 bg-kuwait-green"></div>
                <div className="absolute top-0 right-0 w-8 h-10 bg-kuwait-white"></div>
                <div className="absolute top-3 right-0 w-8 h-1.5 bg-kuwait-red"></div>
                <div className="absolute top-0 left-0 w-4 h-10 bg-kuwait-black clip-triangle"></div>
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold text-white">
                  دولة الكويت
                </h3>
                <p className="text-sm text-white/80">State of Kuwait</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              The official digital portal of the State of Kuwait, showcasing our rich heritage, 
              thriving economy, and opportunities for global partnership.
            </p>
            
            <p className="text-white/70 leading-relaxed font-arabic text-right">
              البوابة الرقمية الرسمية لدولة الكويت، تعرض تراثنا الغني واقتصادنا المزدهر وفرص الشراكة العالمية.
            </p>

            {/* Social Media */}
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white hover:text-kuwait-black">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white hover:text-kuwait-black">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white hover:text-kuwait-black">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white hover:text-kuwait-black">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-playfair font-semibold text-white">
                {section.title}
              </h4>
              <p className="text-sm text-white/60 font-arabic">
                {section.arabic}
              </p>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-gold transition-colors text-sm group"
                    >
                      <span className="group-hover:text-gold">{link.name}</span>
                      <span className="block text-xs text-white/50 font-arabic">
                        {link.arabic}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gold mt-1" />
            <div>
              <h5 className="font-semibold text-white mb-1">Address</h5>
              <p className="text-white/80 text-sm">
                Kuwait City, State of Kuwait<br />
                Arabian Gulf
              </p>
              <p className="text-white/60 text-xs font-arabic mt-1">
                مدينة الكويت، دولة الكويت
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-gold mt-1" />
            <div>
              <h5 className="font-semibold text-white mb-1">Contact</h5>
              <p className="text-white/80 text-sm">
                +965 2245 0000<br />
                Government Hotline
              </p>
              <p className="text-white/60 text-xs font-arabic mt-1">
                الخط الساخن الحكومي
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-gold mt-1" />
            <div>
              <h5 className="font-semibold text-white mb-1">Email</h5>
              <p className="text-white/80 text-sm">
                info@kuwait.gov.kw<br />
                Official Portal
              </p>
              <p className="text-white/60 text-xs font-arabic mt-1">
                البوابة الرسمية
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-white/80">
            <span>© {currentYear} State of Kuwait. All rights reserved.</span>
            <span className="font-arabic">© {currentYear} دولة الكويت. جميع الحقوق محفوظة.</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#privacy" className="text-white/80 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-white/80 hover:text-gold transition-colors">
              Terms of Use
            </a>
            <a href="#accessibility" className="text-white/80 hover:text-gold transition-colors">
              Accessibility
            </a>
            <div className="flex items-center gap-1 text-white/60">
              <Globe className="w-4 h-4" />
              <span>Global Portal</span>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .clip-triangle {
          clip-path: polygon(0 0, 100% 50%, 0 100%);
        }
      `}</style>
    </footer>
  );
};