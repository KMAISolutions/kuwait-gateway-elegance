import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, MapPin, Users, Building, Globe, ArrowRight } from "lucide-react";
import heroImage from "@/assets/kuwait-hero.jpg";
export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    title: "دولة الكويت",
    subtitle: "State of Kuwait",
    description: "Where tradition meets innovation in the heart of the Arabian Gulf",
    arabicDesc: "حيث تلتقي التقاليد العريقة بالحداثة في قلب الخليج العربي"
  }, {
    title: "Land of Opportunities",
    subtitle: "أرض الفرص",
    description: "A thriving economy powered by innovation and rich cultural heritage",
    arabicDesc: "اقتصاد مزدهر يقوده الابتكار والتراث الثقافي الغني"
  }, {
    title: "Gateway to the Gulf",
    subtitle: "بوابة الخليج",
    description: "Your strategic partner for business, tourism, and cultural exchange",
    arabicDesc: "شريكك الاستراتيجي للأعمال والسياحة والتبادل الثقافي"
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  const quickStats = [{
    icon: Users,
    label: "Population",
    value: "5.1M",
    arabic: "5.1 مليون"
  }, {
    icon: MapPin,
    label: "Area",
    value: "17,818 km²",
    arabic: "17,818 كم²"
  }, {
    icon: Building,
    label: "GDP",
    value: "$200.5B",
    arabic: "200.5 مليار $"
  }, {
    icon: Globe,
    label: "Expats",
    value: "70%",
    arabic: "%70"
  }];
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-kuwait-black/70 via-kuwait-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-kuwait-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6">
              <span className="block text-gradient-gold">
                {slides[currentSlide].title}
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl mt-2 text-white/90">
                {slides[currentSlide].subtitle}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-4 max-w-2xl mx-auto">
              {slides[currentSlide].description}
            </p>
            <p className="text-base md:text-lg text-white/70 mb-8 max-w-2xl mx-auto font-arabic">
              {slides[currentSlide].arabicDesc}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-kuwait-green hover:bg-primary-glow text-white px-8 py-6 text-lg gold-shadow">
                Explore Kuwait
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:text-kuwait-black px-8 py-6 text-lg backdrop-blur-sm bg-red-900 hover:bg-red-800">
                <Play className="mr-2 w-5 h-5" />
                Watch Introduction
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {quickStats.map((stat, index) => <div key={index} className="marble-gradient p-6 rounded-xl marble-shadow backdrop-blur-sm text-center hover:scale-105 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-kuwait-green mx-auto mb-3" />
                <div className="text-2xl font-bold text-kuwait-black mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground/80 mt-1">
                  {stat.arabic}
                </div>
              </div>)}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {slides.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-gold scale-125" : "bg-white/40 hover:bg-white/60"}`} onClick={() => setCurrentSlide(index)} />)}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>;
};