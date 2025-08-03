import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, Ship, Plane, DollarSign, BarChart3 } from "lucide-react";

export const EconomySection = () => {
  const [activeMetric, setActiveMetric] = useState("oil");

  const economicSectors = [
    {
      id: "oil",
      title: "Oil & Gas Sector",
      arabic: "قطاع النفط والغاز",
      icon: TrendingUp,
      percentage: "90%",
      description: "Kuwait holds approximately 10% of the world's proven oil reserves",
      stats: [
        { label: "Oil Reserves", value: "101.5 billion barrels", change: "+2.3%" },
        { label: "Daily Production", value: "2.7 million bpd", change: "+1.8%" },
        { label: "Export Revenue", value: "$65.2 billion", change: "+5.2%" },
        { label: "OPEC Ranking", value: "#4 Producer", change: "Stable" },
      ]
    },
    {
      id: "finance",
      title: "Financial Services",
      arabic: "الخدمات المالية",
      icon: Building2,
      percentage: "25%",
      description: "Kuwait Investment Authority manages one of the world's largest sovereign wealth funds",
      stats: [
        { label: "Sovereign Wealth", value: "$700+ billion", change: "+3.1%" },
        { label: "Banking Assets", value: "$180 billion", change: "+2.7%" },
        { label: "Stock Market Cap", value: "$140 billion", change: "+4.5%" },
        { label: "Islamic Finance", value: "30% of sector", change: "+6.2%" },
      ]
    },
    {
      id: "trade",
      title: "Port & Trade",
      arabic: "التجارة والموانئ",
      icon: Ship,
      percentage: "15%",
      description: "Strategic location connecting Asia, Europe, and Africa through maritime trade",
      stats: [
        { label: "Port Throughput", value: "2.1 million TEU", change: "+8.4%" },
        { label: "Trade Volume", value: "$95 billion", change: "+4.1%" },
        { label: "Free Zones", value: "5 Active Zones", change: "+2 New" },
        { label: "Re-export Hub", value: "40% of GCC", change: "+3.8%" },
      ]
    },
    {
      id: "tourism",
      title: "Tourism & Hospitality",
      arabic: "السياحة والضيافة",
      icon: Plane,
      percentage: "8%",
      description: "Growing sector focused on cultural heritage and business tourism",
      stats: [
        { label: "Annual Visitors", value: "1.8 million", change: "+12.5%" },
        { label: "Hotel Occupancy", value: "78%", change: "+5.3%" },
        { label: "Tourism Revenue", value: "$2.1 billion", change: "+15.2%" },
        { label: "Heritage Sites", value: "12 Registered", change: "+2 New" },
      ]
    }
  ];

  const currentSector = economicSectors.find(sector => sector.id === activeMetric) || economicSectors[0];

  return (
    <section id="economy" className="py-20 bg-gradient-to-b from-marble to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-kuwait-green border-kuwait-green">
            الاقتصاد • Economy
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Economic Powerhouse
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover Kuwait's diversified economy, from energy leadership to financial innovation
          </p>
        </div>

        {/* Economic Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:scale-105 transition-transform duration-300 marble-shadow">
            <CardContent className="p-6">
              <DollarSign className="w-12 h-12 text-kuwait-green mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">$200.5B</div>
              <div className="text-sm text-muted-foreground">Total GDP</div>
              <div className="text-xs text-kuwait-green mt-1">+3.2% YoY</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:scale-105 transition-transform duration-300 marble-shadow">
            <CardContent className="p-6">
              <TrendingUp className="w-12 h-12 text-gold mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">$41,320</div>
              <div className="text-sm text-muted-foreground">GDP per Capita</div>
              <div className="text-xs text-kuwait-green mt-1">High Income</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:scale-105 transition-transform duration-300 marble-shadow">
            <CardContent className="p-6">
              <BarChart3 className="w-12 h-12 text-kuwait-red mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">10%</div>
              <div className="text-sm text-muted-foreground">World Oil Reserves</div>
              <div className="text-xs text-kuwait-green mt-1">101.5B barrels</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:scale-105 transition-transform duration-300 marble-shadow">
            <CardContent className="p-6">
              <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">$700B+</div>
              <div className="text-sm text-muted-foreground">Sovereign Wealth</div>
              <div className="text-xs text-kuwait-green mt-1">Global Top 5</div>
            </CardContent>
          </Card>
        </div>

        {/* Sector Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {economicSectors.map((sector) => (
            <Button
              key={sector.id}
              variant={activeMetric === sector.id ? "default" : "outline"}
              onClick={() => setActiveMetric(sector.id)}
              className={`flex items-center gap-2 px-6 py-3 ${
                activeMetric === sector.id
                  ? "bg-kuwait-green hover:bg-primary-glow text-white"
                  : "border-kuwait-green text-kuwait-green hover:bg-kuwait-green hover:text-white"
              }`}
            >
              <sector.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{sector.title}</span>
              <Badge variant="secondary" className="ml-2">
                {sector.percentage}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Detailed Sector View */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="marble-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-kuwait-green/10">
                    <currentSector.icon className="w-8 h-8 text-kuwait-green" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-playfair">
                      {currentSector.title}
                    </CardTitle>
                    <p className="text-muted-foreground font-arabic">
                      {currentSector.arabic}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed mb-6">
                  {currentSector.description}
                </p>

                {/* Statistics Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {currentSector.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-gradient-to-br from-kuwait-green/5 to-gold/5 border border-kuwait-green/20"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                          <p className="text-xl font-bold text-foreground">{stat.value}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="text-kuwait-green border-kuwait-green">
                            {stat.change}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Investment Opportunities */}
            <Card className="bg-gradient-to-br from-kuwait-green/10 to-gold/10 border-kuwait-green/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-kuwait-green" />
                  Investment Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-kuwait-green mb-2">15+</div>
                    <p className="text-sm text-muted-foreground">Free Zones</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-kuwait-green mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">Foreign Ownership</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-kuwait-green mb-2">0%</div>
                    <p className="text-sm text-muted-foreground">Corporate Tax</p>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-kuwait-green hover:bg-primary-glow">
                  Download Investment Guide
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Market Data */}
            <Card className="marble-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Live Market Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded bg-kuwait-green/5">
                  <span className="text-sm">Oil Price (Brent)</span>
                  <span className="font-bold text-kuwait-green">$82.45</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded bg-gold/5">
                  <span className="text-sm">USD/KWD</span>
                  <span className="font-bold text-gold-dark">0.308</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded bg-kuwait-red/5">
                  <span className="text-sm">Boursa Kuwait</span>
                  <span className="font-bold text-kuwait-red">7,234.5</span>
                </div>
              </CardContent>
            </Card>

            {/* Key Sectors */}
            <Card className="marble-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Key Economic Indicators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Oil Revenue</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-kuwait-green h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Financial Services</span>
                    <span>25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gold h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Trade & Logistics</span>
                    <span>15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-kuwait-red h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-kuwait-green to-primary-glow text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-4">Ready to Invest?</h3>
                <p className="text-sm mb-4 opacity-90">
                  Explore business opportunities in Kuwait's thriving economy
                </p>
                <Button variant="secondary" className="w-full">
                  Contact Investment Office
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};