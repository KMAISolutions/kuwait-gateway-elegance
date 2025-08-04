import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Users, 
  Globe, 
  GraduationCap, 
  Heart, 
  Star,
  BookOpen,
  Coffee,
  Home,
  Briefcase 
} from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

export const PeopleSection = () => {
  const [activeTab, setActiveTab] = useState("demographics");

  // Data for charts
  const populationData = [
    { name: "Kuwaiti Citizens", value: 30, color: "#2D5A3D" },
    { name: "Other Arabs", value: 27, color: "#4A7C59" },
    { name: "Asians", value: 40, color: "#8B5A2B" },
    { name: "Others", value: 3, color: "#A0A0A0" }
  ];

  const religionData = [
    { name: "Muslims", value: 74.6, color: "#2D5A3D" },
    { name: "Christians", value: 18, color: "#4A7C59" },
    { name: "Others", value: 7.4, color: "#8B5A2B" }
  ];

  const educationTrends = [
    { year: "2000", literacy: 83.5 },
    { year: "2005", literacy: 88.2 },
    { year: "2010", literacy: 92.1 },
    { year: "2015", literacy: 95.4 },
    { year: "2020", literacy: 96.8 },
    { year: "2024", literacy: 97.2 }
  ];

  const famousFigures = [
    {
      name: "Sheikha Intisar Salem Al-Ali Al-Sabah",
      role: "Social Entrepreneur & Philanthropist",
      description: "Women's empowerment advocate, film producer, and social impact leader",
      icon: Heart
    },
    {
      name: "Sheikh Ahmad Al-Fahad Al-Ahmad Al-Sabah",
      role: "Former Minister & Olympic Leader",
      description: "Ex-OPEC Secretary General, former head of Olympic Council of Asia",
      icon: Star
    },
    {
      name: "Abdullah Al-Rashidi",
      role: "Olympic Athlete",
      description: "Two-time Olympic bronze medallist in skeet shooting",
      icon: Star
    },
    {
      name: "Ameena Shah",
      role: "Olympic Sailor",
      description: "First Kuwaiti woman to qualify for Olympic sailing",
      icon: Star
    },
    {
      name: "Fayeq Abdul-Jaleel",
      role: "Poet & Playwright",
      description: "Cultural icon in Kuwait's literary history",
      icon: BookOpen
    }
  ];

  const lifestyleData = [
    { category: "Family Structure", traditional: 45, modern: 55 },
    { category: "Work Participation", male: 65, female: 35 },
    { category: "Education Level", basic: 15, higher: 85 },
    { category: "Social Activities", private: 60, public: 40 }
  ];

  const tabs = [
    {
      id: "demographics",
      label: "Demographics",
      icon: Users,
      title: "Population & Ethnic Groups",
      description: "Comprehensive overview of Kuwait's diverse population structure"
    },
    {
      id: "religion",
      label: "Religion & Language",
      icon: Globe,
      title: "Religious & Linguistic Diversity", 
      description: "Religious composition and multilingual landscape"
    },
    {
      id: "lifestyle",
      label: "Lifestyle & Social Norms",
      icon: Coffee,
      title: "Modern Kuwaiti Society",
      description: "Social structures, family values, and contemporary lifestyle"
    },
    {
      id: "education",
      label: "Education & Literacy",
      icon: GraduationCap,
      title: "Educational Excellence",
      description: "World-class education system and literacy achievements"
    },
    {
      id: "famous",
      label: "Famous Kuwaitis",
      icon: Star,
      title: "Notable Public Figures",
      description: "Distinguished Kuwaitis making global impact"
    }
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  const COLORS = ["#2D5A3D", "#4A7C59", "#8B5A2B", "#A0A0A0", "#D4D4AA"];

  return (
    <section id="people" className="py-20 bg-gradient-to-b from-marble to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-kuwait-green border-kuwait-green">
            People of Kuwait
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-kuwait-green mb-4">
            The Heart of Kuwait
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the rich tapestry of cultures, traditions, and achievements that define Kuwait's vibrant society
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 bg-white/50 backdrop-blur-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex items-center gap-2 data-[state=active]:bg-kuwait-green data-[state=active]:text-white"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Demographics Tab */}
          <TabsContent value="demographics" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-playfair font-bold text-kuwait-green mb-2">
                {currentTab.title}
              </h3>
              <p className="text-muted-foreground">{currentTab.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-kuwait-green/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-kuwait-green" />
                    Population Composition
                  </CardTitle>
                  <CardDescription>Total Population: ~4.93 million (2024)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={populationData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({name, value}) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {populationData.map((entry, index) => (
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
                  <CardTitle>Demographic Statistics</CardTitle>
                  <CardDescription>Key population figures and breakdowns</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Category</TableHead>
                        <TableHead>Percentage</TableHead>
                        <TableHead>Population</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Kuwaiti Citizens</TableCell>
                        <TableCell>~30%</TableCell>
                        <TableCell>~1.5M</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Expatriates</TableCell>
                        <TableCell>~70%</TableCell>
                        <TableCell>~3.4M</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Other Arabs</TableCell>
                        <TableCell>~27%</TableCell>
                        <TableCell>~1.3M</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Asians</TableCell>
                        <TableCell>~40%</TableCell>
                        <TableCell>~2.0M</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Religion & Language Tab */}
          <TabsContent value="religion" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-playfair font-bold text-kuwait-green mb-2">
                Religious & Linguistic Diversity
              </h3>
              <p className="text-muted-foreground">Faith traditions and languages that shape Kuwaiti society</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-kuwait-green/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-kuwait-green" />
                    Religious Composition
                  </CardTitle>
                  <CardDescription>Faith distribution across all residents</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={religionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({name, value}) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {religionData.map((entry, index) => (
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
                  <CardTitle>Languages & Religious Facts</CardTitle>
                  <CardDescription>Linguistic landscape and faith demographics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-kuwait-green/10 rounded-md">
                      <span className="font-medium">Official Language</span>
                      <span className="text-kuwait-green font-bold">Arabic</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-kuwait-green/10 rounded-md">
                      <span className="font-medium">Business Language</span>
                      <span className="text-kuwait-green font-bold">English</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-kuwait-green/10 rounded-md">
                      <span className="font-medium">Sunni Muslims (Citizens)</span>
                      <span className="text-kuwait-green font-bold">60-70%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-kuwait-green/10 rounded-md">
                      <span className="font-medium">Shia Muslims (Citizens)</span>
                      <span className="text-kuwait-green font-bold">30-40%</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-background/50 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      <strong>Other Languages:</strong> Persian, Urdu, Tagalog, Hindi, and other expatriate community languages are widely spoken.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Lifestyle Tab */}
          <TabsContent value="lifestyle" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-playfair font-bold text-kuwait-green mb-2">
                Modern Kuwaiti Society
              </h3>
              <p className="text-muted-foreground">Progressive values, family traditions, and contemporary lifestyle</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-kuwait-green/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-kuwait-green" />
                    Social Characteristics
                  </CardTitle>
                  <CardDescription>Key aspects of Kuwaiti social life</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={lifestyleData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" angle={-45} textAnchor="end" height={80} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="traditional" fill="#2D5A3D" name="Traditional" />
                      <Bar dataKey="modern" fill="#4A7C59" name="Modern" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-kuwait-green/20">
                <CardHeader>
                  <CardTitle>Lifestyle Highlights</CardTitle>
                  <CardDescription>What defines modern Kuwaiti society</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-kuwait-green/10 rounded-md">
                      <Home className="w-5 h-5 text-kuwait-green mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Family Structure</h4>
                        <p className="text-sm text-muted-foreground">Strong nuclear and extended family networks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-kuwait-green/10 rounded-md">
                      <Briefcase className="w-5 h-5 text-kuwait-green mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Women's Participation</h4>
                        <p className="text-sm text-muted-foreground">High education and workforce participation rates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-kuwait-green/10 rounded-md">
                      <Coffee className="w-5 h-5 text-kuwait-green mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Diwaniyya Culture</h4>
                        <p className="text-sm text-muted-foreground">Traditional gathering spaces for social and political discourse</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-kuwait-green/10 rounded-md">
                      <Globe className="w-5 h-5 text-kuwait-green mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Liberal Society</h4>
                        <p className="text-sm text-muted-foreground">Progressive compared to other Gulf states</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-playfair font-bold text-kuwait-green mb-2">
                Educational Excellence
              </h3>
              <p className="text-muted-foreground">World-class education system driving national development</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-kuwait-green/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-kuwait-green" />
                    Literacy Rate Progress
                  </CardTitle>
                  <CardDescription>Educational advancement over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={educationTrends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis domain={[80, 100]} />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="literacy" 
                        stroke="#2D5A3D" 
                        strokeWidth={3}
                        dot={{ fill: "#2D5A3D", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-kuwait-green/20">
                <CardHeader>
                  <CardTitle>Education System Facts</CardTitle>
                  <CardDescription>Key features of Kuwait's education</CardDescription>
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
                        <TableCell className="font-medium">Overall Literacy Rate</TableCell>
                        <TableCell className="text-kuwait-green font-bold">96-97%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Youth Literacy (15-24)</TableCell>
                        <TableCell className="text-kuwait-green font-bold">99.9%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Education Cost</TableCell>
                        <TableCell className="text-kuwait-green font-bold">Free through university</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Study Abroad Support</TableCell>
                        <TableCell className="text-kuwait-green font-bold">Government funded</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">English Education</TableCell>
                        <TableCell className="text-kuwait-green font-bold">Mandatory from age 10</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Famous Kuwaitis Tab */}
          <TabsContent value="famous" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-playfair font-bold text-kuwait-green mb-2">
                Notable Public Figures
              </h3>
              <p className="text-muted-foreground">Distinguished Kuwaitis making impact on the global stage</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {famousFigures.map((figure, index) => {
                const Icon = figure.icon;
                return (
                  <Card key={index} className="border-kuwait-green/20 hover:border-kuwait-green/40 transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-kuwait-green/10 rounded-md">
                          <Icon className="w-5 h-5 text-kuwait-green" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg leading-tight">{figure.name}</CardTitle>
                          <CardDescription className="text-kuwait-green font-medium">
                            {figure.role}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{figure.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-kuwait-green/20 mt-8">
              <CardHeader>
                <CardTitle className="text-center">Summary Overview</CardTitle>
                <CardDescription className="text-center">Quick facts about Kuwait's people</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Area</TableHead>
                      <TableHead>Key Facts</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Population</TableCell>
                      <TableCell>~4.9M total; ~30% citizen, 70% expat</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Ethnic Composition</TableCell>
                      <TableCell>Kuwaiti Arabs ~30%, Asians ~40%, other Arabs ~27%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Religion</TableCell>
                      <TableCell>~60–70% Sunni, ~30–40% Shia; expatriate Christians ~18%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Languages</TableCell>
                      <TableCell>Arabic official, English widely used, plus expatriate tongues</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Literacy Rate</TableCell>
                      <TableCell>~96–99% among citizens</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Education</TableCell>
                      <TableCell>Free through tertiary, strong women's participation</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Lifestyle & Norms</TableCell>
                      <TableCell>Liberal Gulf society; strong family networks; diwaniyya culture</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};