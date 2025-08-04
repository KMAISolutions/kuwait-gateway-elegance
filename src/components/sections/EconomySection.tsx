import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Building2, 
  Plane, 
  BarChart3, 
  DollarSign,
  MapPin,
  Factory,
  Users
} from "lucide-react";
import { 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart
} from "recharts";

export const EconomySection = () => {
  const [activeTab, setActiveTab] = useState("oil-gas");

  const oilReservesData = [
    { name: "Kuwait", value: 102, color: "#2D5A3D" },
    { name: "Saudi Arabia", value: 297, color: "#4A7C59" },
    { name: "Iran", value: 208, color: "#8B5A2B" },
    { name: "Iraq", value: 145, color: "#A0A0A0" },
    { name: "Others", value: 500, color: "#D4D4AA" }
  ];

  const economicGrowthData = [
    { year: "2019", gdp: 134.6, oilPrice: 64 },
    { year: "2020", gdp: 105.9, oilPrice: 42 },
    { year: "2021", gdp: 124.3, oilPrice: 71 },
    { year: "2022", gdp: 175.4, oilPrice: 95 },
    { year: "2023", gdp: 162.9, oilPrice: 82 },
    { year: "2024", gdp: 158.7, oilPrice: 75 }
  ];

  const sectorContribution = [
    { sector: "Oil & Gas", value: 50, budget: 90 },
    { sector: "Financial Services", value: 15, budget: 5 },
    { sector: "Trade & Commerce", value: 12, budget: 2 },
    { sector: "Construction", value: 8, budget: 1 },
    { sector: "Manufacturing", value: 6, budget: 1 },
    { sector: "Tourism", value: 3, budget: 1 },
    { sector: "Others", value: 6, budget: 0 }
  ];

  const investmentProjects = [
    { name: "Infrastructure", amount: 27.6, foreign: 10.2, domestic: 17.4 },
    { name: "Energy", amount: 15.8, foreign: 8.9, domestic: 6.9 },
    { name: "Petrochemicals", amount: 8.4, foreign: 3.2, domestic: 5.2 },
    { name: "Water & Utilities", amount: 6.8, foreign: 2.1, domestic: 4.7 },
    { name: "Logistics", amount: 4.6, foreign: 1.8, domestic: 2.8 }
  ];

  const tabs = [
    {
      id: "oil-gas",
      label: "Oil & Gas",
      icon: Factory,
      title: "Oil & Gas Sector",
      description: "The backbone of Kuwait's economy with massive reserves and production capacity"
    },
    {
      id: "finance",
      label: "Banking & Finance",
      icon: Building2,
      title: "Banking & Financial Services",
      description: "Sophisticated financial sector with the world's largest sovereign wealth fund"
    },
    {
      id: "tourism",
      label: "Tourism",
      icon: Plane,
      title: "Tourism & Hospitality",
      description: "Growing tourism sector with world-class cultural attractions and infrastructure"
    },
    {
      id: "trade",
      label: "Trade & Investment",
      icon: BarChart3,
      title: "Trade, Import & Export Statistics",
      description: "Strategic trade hub with major investment initiatives and free zones"
    },
    {
      id: "investment",
      label: "Investment Zones",
      icon: MapPin,
      title: "Investment & Free Trade Zones",
      description: "Special economic zones and major infrastructure projects attracting global investment"
    }
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section id="economy" className="py-20 bg-gradient-to-b from-background to-marble">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-kuwait-green border-kuwait-green">
            اقتصاد • Economy
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Kuwait's Economy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover Kuwait's diversified economy, from oil wealth to financial services and emerging sectors
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
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
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </Button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-foreground mb-2">
                {currentTab.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                {currentTab.description}
              </p>
            </div>

            {activeTab === "oil-gas" && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-kuwait-green/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Factory className="w-5 h-5 text-kuwait-green" />
                        Global Oil Reserves
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={oilReservesData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({name, value}) => `${name}: ${value}B barrels`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {oilReservesData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card className="border-kuwait-green/20">
                    <CardHeader>
                      <CardTitle>Oil Sector Statistics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Metric</TableHead>
                            <TableHead>Value</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Proven Reserves</TableCell>
                            <TableCell className="text-kuwait-green font-bold">102B barrels</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Global Share</TableCell>
                            <TableCell className="text-kuwait-green font-bold">~6%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Export Share</TableCell>
                            <TableCell className="text-kuwait-green font-bold">~95%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Government Revenue</TableCell>
                            <TableCell className="text-kuwait-green font-bold">~90%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">GDP Contribution</TableCell>
                            <TableCell className="text-kuwait-green font-bold">50%+</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "finance" && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-kuwait-green/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-kuwait-green" />
                        Economic Indicators
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={economicGrowthData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis />
                          <Tooltip />
                          <Area 
                            type="monotone" 
                            dataKey="gdp" 
                            stroke="#2D5A3D" 
                            fill="#2D5A3D" 
                            fillOpacity={0.3}
                            name="GDP (Billion USD)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card className="border-kuwait-green/20">
                    <CardHeader>
                      <CardTitle>Financial Highlights</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-kuwait-green/10 rounded-md">
                          <span className="font-medium">GDP per Capita</span>
                          <span className="text-kuwait-green font-bold">$32,290</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-kuwait-green/10 rounded-md">
                          <span className="font-medium">Sovereign Wealth Fund</span>
                          <span className="text-kuwait-green font-bold">$970B</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-kuwait-green/10 rounded-md">
                          <span className="font-medium">Current Account Surplus</span>
                          <span className="text-kuwait-green font-bold">30% of GDP</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-kuwait-green/10 rounded-md">
                          <span className="font-medium">Credit Rating</span>
                          <span className="text-kuwait-green font-bold">A+ Stable</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "tourism" && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-kuwait-green/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Plane className="w-5 h-5 text-kuwait-green" />
                        Tourism Revenue Growth
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm">Domestic Tourism 2023</span>
                            <span className="text-sm text-kuwait-green font-bold">KD 4.39B</span>
                          </div>
                          <Progress value={92} className="h-2" />
                          <p className="text-xs text-muted-foreground mt-1">+9.2% vs 2022</p>
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm">Foreign Tourism 2023</span>
                            <span className="text-sm text-kuwait-green font-bold">KD 533M</span>
                          </div>
                          <Progress value={60} className="h-2" />
                          <p className="text-xs text-muted-foreground mt-1">+60% growth</p>
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm">Cultural Investment</span>
                            <span className="text-sm text-kuwait-green font-bold">$1B+</span>
                          </div>
                          <Progress value={100} className="h-2" />
                          <p className="text-xs text-muted-foreground mt-1">National Cultural District</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-kuwait-green/20">
                    <CardHeader>
                      <CardTitle>Tourism Attractions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-3 bg-kuwait-green/10 rounded-md">
                          <Building2 className="w-5 h-5 text-kuwait-green mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Kuwait Towers</h4>
                            <p className="text-sm text-muted-foreground">Iconic symbol of modern Kuwait</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-kuwait-green/10 rounded-md">
                          <Building2 className="w-5 h-5 text-kuwait-green mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Al-Hamra Tower</h4>
                            <p className="text-sm text-muted-foreground">Tallest building in Kuwait</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-kuwait-green/10 rounded-md">
                          <Building2 className="w-5 h-5 text-kuwait-green mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Grand Mosque</h4>
                            <p className="text-sm text-muted-foreground">Largest mosque in Kuwait</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-kuwait-green/10 rounded-md">
                          <Building2 className="w-5 h-5 text-kuwait-green mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Cultural District</h4>
                            <p className="text-sm text-muted-foreground">World's largest museum complex</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "trade" && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-kuwait-green/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-kuwait-green" />
                        Economic Sector Contribution
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={sectorContribution}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="sector" angle={-45} textAnchor="end" height={80} />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="value" fill="#2D5A3D" name="GDP %" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card className="border-kuwait-green/20">
                    <CardHeader>
                      <CardTitle>Trade Statistics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Category</TableHead>
                            <TableHead>Share</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Oil Exports</TableCell>
                            <TableCell className="text-kuwait-green font-bold">95%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Petrochemicals</TableCell>
                            <TableCell className="text-kuwait-green font-bold">3%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Other Exports</TableCell>
                            <TableCell className="text-kuwait-green font-bold">2%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Import Dependency</TableCell>
                            <TableCell className="text-kuwait-green font-bold">High</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Trading Partners</TableCell>
                            <TableCell className="text-kuwait-green font-bold">Global</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "investment" && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-kuwait-green/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-kuwait-green" />
                        Investment Projects 2023
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={investmentProjects}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="foreign" fill="#2D5A3D" name="Foreign Investment (B USD)" />
                          <Bar dataKey="domestic" fill="#4A7C59" name="Domestic Investment (B USD)" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card className="border-kuwait-green/20">
                    <CardHeader>
                      <CardTitle>Investment Zones</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-3 bg-kuwait-green/10 rounded-md">
                          <MapPin className="w-5 h-5 text-kuwait-green mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Shuwaikh Free Zone</h4>
                            <p className="text-sm text-muted-foreground">Established 1999, duty & tax exemptions</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-kuwait-green/10 rounded-md">
                          <Factory className="w-5 h-5 text-kuwait-green mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Infrastructure Pipeline</h4>
                            <p className="text-sm text-muted-foreground">$27.6B worth of projects</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-kuwait-green/10 rounded-md">
                          <DollarSign className="w-5 h-5 text-kuwait-green mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Foreign Investment</h4>
                            <p className="text-sm text-muted-foreground">$10.2B in 2023</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-kuwait-green/10 rounded-md">
                          <TrendingUp className="w-5 h-5 text-kuwait-green mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Vision 2035</h4>
                            <p className="text-sm text-muted-foreground">Economic diversification plan</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>

          {/* Statistics Sidebar */}
          <div className="space-y-6">
            <h4 className="text-2xl font-playfair font-bold text-foreground">
              Key Economic Indicators
            </h4>
            <div className="grid gap-4">
              <Card className="hover:scale-105 transition-transform duration-300 marble-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">
                        Total GDP
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        2024 estimate
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-kuwait-green">
                        $158.7B
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:scale-105 transition-transform duration-300 marble-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">
                        Oil Reserves
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Proven reserves
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-kuwait-green">
                        102B bbls
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:scale-105 transition-transform duration-300 marble-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">
                        Sovereign Wealth
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        World's largest fund
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-kuwait-green">
                        $970B
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info Card */}
            <Card className="bg-gradient-to-br from-kuwait-green/5 to-gold/5 border-kuwait-green/20">
              <CardHeader>
                <CardTitle className="text-kuwait-green">Did You Know?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Kuwait's sovereign wealth fund is worth nearly $970 billion, making it the largest in the world relative to GDP and one of the oldest, established in 1953.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};