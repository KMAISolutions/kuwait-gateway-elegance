import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Clock, DollarSign, Menu, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(false);
  const { toast } = useToast();

  // Live data simulation
  const exchangeRate = "0.308";
  const kuwaitTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kuwait",
    hour12: true,
  });

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
    toast({
      title: isArabic ? "Language switched to English" : "تم تغيير اللغة إلى العربية",
      description: isArabic ? "Welcome to Kuwait's official portal" : "أهلاً بكم في البوابة الرسمية للكويت",
    });
  };

  const navigation = [
    { name: isArabic ? "الأرض" : "Land", href: "#land" },
    { name: isArabic ? "الشعب" : "People", href: "#people" },
    { name: isArabic ? "الاقتصاد" : "Economy", href: "#economy" },
    { name: isArabic ? "الحكومة" : "Government", href: "#government" },
    { name: isArabic ? "الثقافة" : "Culture", href: "#culture" },
    { name: isArabic ? "التاريخ" : "History", href: "#history" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 marble-gradient border-b border-border/20 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        {/* Top Info Bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-border/10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <DollarSign className="w-4 h-4" />
              <span>1 USD = {exchangeRate} KD</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Kuwait Time: {kuwaitTime}</span>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 hover:bg-primary/10"
          >
            <Globe className="w-4 h-4" />
            <span>{isArabic ? "English" : "العربية"}</span>
          </Button>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-8 relative">
                {/* Kuwait Flag */}
                <div className="absolute inset-0 bg-kuwait-green"></div>
                <div className="absolute top-0 right-0 w-6 h-8 bg-kuwait-white"></div>
                <div className="absolute top-2.5 right-0 w-6 h-1 bg-kuwait-red"></div>
                <div className="absolute top-0 left-0 w-3 h-8 bg-kuwait-black clip-triangle"></div>
              </div>
              <div>
                <h1 className="text-xl font-playfair font-bold text-kuwait-green">
                  {isArabic ? "دولة الكويت" : "State of Kuwait"}
                </h1>
                <p className="text-xs text-muted-foreground">
                  {isArabic ? "البوابة الرسمية" : "Official Portal"}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm" className="border-kuwait-green text-kuwait-green hover:bg-kuwait-green hover:text-white">
              {isArabic ? "استثمر" : "Invest"}
            </Button>
            <Button size="sm" className="bg-kuwait-green hover:bg-primary-glow gold-shadow">
              {isArabic ? "زر" : "Visit"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/10">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-border/10">
                <Button variant="outline" size="sm" className="flex-1 border-kuwait-green text-kuwait-green">
                  {isArabic ? "استثمر" : "Invest"}
                </Button>
                <Button size="sm" className="flex-1 bg-kuwait-green hover:bg-primary-glow">
                  {isArabic ? "زر" : "Visit"}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      <style>{`
        .clip-triangle {
          clip-path: polygon(0 0, 100% 50%, 0 100%);
        }
      `}</style>
    </header>
  );
};