
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Clock, DollarSign, Menu, X, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const menuItems = [
    {
      name: isArabic ? "الأرض" : "Land",
      items: [
        "Geography & Location",
        "Climate & Seasons", 
        "Islands & Coastal Areas",
        "Natural Reserves & Wildlife",
        "Interactive Map & 3D Terrain"
      ]
    },
    {
      name: isArabic ? "الشعب" : "People",
      items: [
        "Demographics & Ethnic Groups",
        "Religion & Language",
        "Lifestyle & Social Norms", 
        "Education & Literacy",
        "Famous Kuwaitis & Public Figures"
      ]
    },
    {
      name: isArabic ? "الاقتصاد" : "Economy",
      items: [
        "Oil & Gas Sector",
        "Banking & Financial Services",
        "Tourism & Hospitality",
        "Trade, Import & Export Statistics", 
        "Investment & Free Trade Zones"
      ]
    },
    {
      name: isArabic ? "الحكومة والمجتمع" : "Government & Society",
      items: [
        "Political System & Leadership",
        "Ministries & Key Institutions",
        "Law, Justice & Security",
        "Visa & Residency Information",
        "Social Programs & Public Services"
      ]
    },
    {
      name: isArabic ? "الثقافة" : "Cultural Life", 
      items: [
        "Arts & Architecture",
        "Traditional Cuisine & Dining Guide",
        "Fashion & Modern Lifestyle",
        "Festivals, Holidays & Events",
        "Music, Dance & Entertainment"
      ]
    },
    {
      name: isArabic ? "التاريخ" : "History",
      items: [
        "Ancient Kuwait & Early Settlements",
        "Maritime & Trade Heritage", 
        "Colonial & Modern Era",
        "Independence & State Formation",
        "Interactive Historical Timeline"
      ]
    },
    {
      name: isArabic ? "المراجع وتاريخ التحرير" : "References & Edit History",
      items: [
        "Source Citations & Bibliography",
        "Contributor Credits",
        "Article Revision Logs",
        "External Links & Resources", 
        "Academic & Tourism References"
      ]
    },
    {
      name: isArabic ? "الحقائق والإحصائيات" : "Facts & Stats",
      items: [
        "Population & Demographic Figures",
        "Economic Indicators & GDP Stats",
        "Land Area & Geography Quick Facts",
        "Tourism & Visitor Statistics",
        "Fun Facts & Records"
      ]
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-kuwait-green text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                <span>1 USD = {exchangeRate} KD</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Kuwait Time: {kuwaitTime}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center gap-2 hover:bg-white/20 text-white hover:text-white"
              >
                <Globe className="w-4 h-4" />
                <span>{isArabic ? "English" : "العربية"}</span>
              </Button>
              
              <div className="hidden lg:flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 hover:text-white">
                  {isArabic ? "استثمر" : "Invest"}
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 hover:text-white">
                  {isArabic ? "زر" : "Visit"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="marble-gradient border-b border-border/20 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          {/* Title and Menu */}
          <div className="flex items-center justify-between py-3">
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className="text-sm font-medium text-foreground hover:text-primary transition-colors bg-transparent hover:bg-primary/10 data-[state=open]:bg-primary/10">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[300px] p-2 bg-background/95 backdrop-blur-sm border border-border/20">
                      <div className="grid gap-1">
                        {item.items.map((subItem, subIndex) => (
                          <NavigationMenuLink
                            key={subIndex}
                            className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-md transition-colors cursor-pointer"
                          >
                            {subItem}
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

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
            {/* Vertical Menu with Scroller */}
            <div className="max-h-96 overflow-y-auto scrollbar-hide">
              <div className="flex flex-col gap-2">
                {menuItems.map((item, index) => (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-between flex items-center gap-2 border-kuwait-green text-kuwait-green hover:bg-kuwait-green hover:text-white"
                      >
                        {item.name}
                        <ChevronDown className="w-3 h-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-72 max-h-96 overflow-y-auto bg-background/95 backdrop-blur-sm border border-border/20">
                      {item.items.map((subItem, subIndex) => (
                        <DropdownMenuItem
                          key={subIndex}
                          className="text-sm text-foreground hover:bg-primary/10 hover:text-primary cursor-pointer"
                        >
                          {subItem}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ))}
              </div>
            </div>
            {/* Mobile CTA Buttons */}
            <div className="flex gap-3 mt-4 pt-4 border-t border-border/10">
              <Button variant="outline" size="sm" className="flex-1 border-kuwait-green text-kuwait-green hover:bg-kuwait-green hover:text-white">
                {isArabic ? "استثمر" : "Invest"}
              </Button>
              <Button size="sm" className="flex-1 bg-kuwait-green hover:bg-primary-glow">
                {isArabic ? "زر" : "Visit"}
              </Button>
            </div>
          </div>
        )}
        </div>
      </div>
      
      <style>{`
        .clip-triangle {
          clip-path: polygon(0 0, 100% 50%, 0 100%);
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </header>
  );
};
