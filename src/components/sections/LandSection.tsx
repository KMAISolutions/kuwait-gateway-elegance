import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mountain, Waves, Thermometer, MapPin, Camera } from "lucide-react";

export const LandSection = () => {
  const [activeTab, setActiveTab] = useState("geography");

  const tabs = [
    { id: "geography", label: "Geography", icon: Mountain, arabic: "الجغرافيا" },
    { id: "climate", label: "Climate", icon: Thermometer, arabic: "المناخ" },
    { id: "coastline", label: "Coastline", icon: Waves, arabic: "الساحل" },
    { id: "islands", label: "Islands", icon: MapPin, arabic: "الجزر" },
    { id: "terrain", label: "Terrain", icon: Camera, arabic: "التضاريس" },
  ];

  const landData = {
    geography: {
      title: "Geography & Topography",
      arabic: "الجغرافيا والتضاريس",
      stats: [
        { label: "Total Area", value: "17,818 km²", detail: "6,880 sq mi" },
        { label: "Land Area", value: "17,818 km²", detail: "100% land" },
        { label: "Highest Point", value: "Al-Shiqaya", detail: "290 m above sea level" },
        { label: "Borders", value: "Iraq & Saudi Arabia", detail: "462 km total" },
      ],
      description: "Kuwait is a small country located in the northeastern corner of the Arabian Peninsula at the head of the Persian Gulf. The country is mostly flat desert with a few oases.",
      arabicDesc: "الكويت دولة صغيرة تقع في الركن الشمالي الشرقي من شبه الجزيرة العربية عند رأس الخليج العربي. البلد عبارة عن صحراء مسطحة في الغالب مع بعض الواحات.",
    },
    climate: {
      title: "Desert Climate & Seasons",
      arabic: "المناخ الصحراوي والفصول",
      stats: [
        { label: "Summer High", value: "54°C", detail: "129°F peak" },
        { label: "Winter Low", value: "8°C", detail: "46°F minimum" },
        { label: "Annual Rainfall", value: "25-180 mm", detail: "Very arid" },
        { label: "Humidity", value: "High in summer", detail: "Coastal influence" },
      ],
      description: "Kuwait has a hot desert climate with extremely hot summers and warm winters. The country receives minimal rainfall and experiences high humidity due to its coastal location.",
      arabicDesc: "الكويت لديها مناخ صحراوي حار مع صيف شديد الحرارة وشتاء دافئ. تتلقى البلاد هطول أمطار قليل وتشهد رطوبة عالية بسبب موقعها الساحلي.",
    },
    coastline: {
      title: "Kuwait Bay & Coastline",
      arabic: "خليج الكويت والساحل",
      stats: [
        { label: "Coastline", value: "499 km", detail: "310 miles" },
        { label: "Kuwait Bay", value: "Natural harbor", detail: "Deep water port" },
        { label: "Beaches", value: "Multiple", detail: "Sandy shores" },
        { label: "Maritime Zone", value: "Territorial waters", detail: "Fishing grounds" },
      ],
      description: "Kuwait's coastline along the Persian Gulf features Kuwait Bay, a natural deep-water harbor that has been central to the country's maritime heritage and modern economy.",
      arabicDesc: "ساحل الكويت على طول الخليج العربي يضم خليج الكويت، وهو ميناء طبيعي للمياه العميقة كان محورياً في التراث البحري للبلاد والاقتصاد الحديث.",
    },
    islands: {
      title: "Island Heritage",
      arabic: "تراث الجزر",
      stats: [
        { label: "Failaka Island", value: "Archaeological site", detail: "3rd millennium BC" },
        { label: "Bubiyan Island", value: "Largest island", detail: "863 km²" },
        { label: "Warbah Island", value: "Northern island", detail: "37 km²" },
        { label: "Auhha Island", value: "Small island", detail: "8 km²" },
      ],
      description: "Kuwait's islands, particularly Failaka, hold significant archaeological importance with evidence of human settlement dating back to the 3rd millennium BC, serving as ancient trading posts.",
      arabicDesc: "جزر الكويت، وخاصة فيلكا، تحمل أهمية أثرية كبيرة مع أدلة على الاستيطان البشري يعود إلى الألفية الثالثة قبل الميلاد، حيث كانت بمثابة مراكز تجارية قديمة.",
    },
    terrain: {
      title: "Interactive Terrain Map",
      arabic: "خريطة التضاريس التفاعلية",
      stats: [
        { label: "Elevation Range", value: "Sea level to 290m", detail: "Relatively flat" },
        { label: "Desert Coverage", value: "90%+", detail: "Arid landscape" },
        { label: "Oases", value: "Few scattered", detail: "Fresh water sources" },
        { label: "Topography", value: "Gently undulating", detail: "Minimal hills" },
      ],
      description: "Kuwait's terrain is characterized by flat-to-gently undulating desert plains, with the highest elevation at Al-Shiqaya hill in the west reaching 290 meters above sea level.",
      arabicDesc: "تتميز تضاريس الكويت بسهول صحراوية مسطحة إلى متموجة بلطف، مع أعلى ارتفاع في تل الشقايا في الغرب يصل إلى 290 متراً فوق مستوى سطح البحر.",
    },
  };

  const currentData = landData[activeTab as keyof typeof landData];

  return (
    <section id="land" className="py-20 bg-gradient-to-b from-background to-marble">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-kuwait-green border-kuwait-green">
            الأرض • Land
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            The Land of Kuwait
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the geography, climate, and natural features that shape the State of Kuwait
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 ${
                activeTab === tab.id
                  ? "bg-kuwait-green hover:bg-primary-glow text-white"
                  : "border-kuwait-green text-kuwait-green hover:bg-kuwait-green hover:text-white"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span>{tab.label}</span>
                <span className="text-xs opacity-70">• {tab.arabic}</span>
              </div>
            </Button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-foreground mb-2">
                {currentData.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-4 font-arabic">
                {currentData.arabic}
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                {currentData.description}
              </p>
              <p className="text-muted-foreground leading-relaxed font-arabic text-right">
                {currentData.arabicDesc}
              </p>
            </div>

            {/* Interactive Map Placeholder */}
            <Card className="marble-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-kuwait-green" />
                  Interactive Map View
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-kuwait-green/20 to-gold/20 rounded-lg flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Camera className="w-12 h-12 mx-auto mb-4 text-kuwait-green" />
                    <p>Interactive terrain map loading...</p>
                    <p className="text-sm mt-2">Click to explore Kuwait's geography</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistics */}
          <div className="space-y-6">
            <h4 className="text-2xl font-playfair font-bold text-foreground">
              Key Statistics
            </h4>
            <div className="grid gap-4">
              {currentData.stats.map((stat, index) => (
                <Card key={index} className="hover:scale-105 transition-transform duration-300 marble-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">
                          {stat.label}
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          {stat.detail}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-kuwait-green">
                          {stat.value}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info Card */}
            <Card className="bg-gradient-to-br from-kuwait-green/5 to-gold/5 border-kuwait-green/20">
              <CardHeader>
                <CardTitle className="text-kuwait-green">Did You Know?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Kuwait is one of the smallest countries in the world by area, yet it holds approximately 10% of the world's proven oil reserves, making it one of the most resource-rich nations per capita.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};