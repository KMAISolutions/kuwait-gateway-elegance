import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Satellite, Mountain, Navigation } from "lucide-react";

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapStyle, setMapStyle] = useState('satellite');
  const [isLoaded, setIsLoaded] = useState(false);

  // Key locations in Kuwait
  const kuwaitLocations = [
    { name: "Kuwait City", coordinates: [47.9774, 29.3759], type: "capital" },
    { name: "Failaka Island", coordinates: [48.3281, 29.4347], type: "archaeological" },
    { name: "Al Jahra", coordinates: [47.6581, 29.3375], type: "city" },
    { name: "Hawalli", coordinates: [48.0281, 29.3326], type: "city" },
    { name: "Al Ahmadi", coordinates: [48.0851, 29.0769], type: "industrial" },
    { name: "Kuwait Towers", coordinates: [47.9634, 29.3903], type: "landmark" },
    { name: "Bubiyan Island", coordinates: [48.2667, 29.8667], type: "island" },
    { name: "Warbah Island", coordinates: [48.1167, 30.0167], type: "island" },
  ];

  const mapStyles = [
    { id: 'satellite', name: 'Satellite', icon: Satellite },
    { id: 'terrain', name: 'Terrain', icon: Mountain },
    { id: 'streets', name: 'Streets', icon: Navigation },
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Simulate loading the map
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const LocationMarker = ({ location }: { location: typeof kuwaitLocations[0] }) => {
    const getMarkerColor = (type: string) => {
      switch (type) {
        case 'capital': return 'bg-red-500';
        case 'city': return 'bg-blue-500';
        case 'industrial': return 'bg-orange-500';
        case 'landmark': return 'bg-purple-500';
        case 'island': return 'bg-green-500';
        case 'archaeological': return 'bg-yellow-500';
        default: return 'bg-gray-500';
      }
    };

    return (
      <div 
        className={`absolute w-3 h-3 rounded-full ${getMarkerColor(location.type)} border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform cursor-pointer`}
        style={{
          left: `${((location.coordinates[0] - 46.5) / (49.0 - 46.5)) * 100}%`,
          top: `${((30.1 - location.coordinates[1]) / (30.1 - 28.5)) * 100}%`,
        }}
        title={location.name}
      />
    );
  };

  return (
    <Card className="marble-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-kuwait-green" />
            Interactive Map of Kuwait
          </CardTitle>
          <div className="flex gap-2">
            {mapStyles.map((style) => (
              <Button
                key={style.id}
                variant={mapStyle === style.id ? "default" : "outline"}
                size="sm"
                onClick={() => setMapStyle(style.id)}
                className={mapStyle === style.id ? "bg-kuwait-green hover:bg-primary-glow" : ""}
              >
                <style.icon className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
          {!isLoaded ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-kuwait-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading interactive map...</p>
              </div>
            </div>
          ) : (
            <>
              {/* Kuwait coastline and geographical features simulation */}
              <div 
                ref={mapContainer} 
                className={`w-full h-full ${
                  mapStyle === 'satellite' ? 'bg-gradient-to-br from-blue-200 via-green-200 to-yellow-100' :
                  mapStyle === 'terrain' ? 'bg-gradient-to-br from-green-100 via-yellow-100 to-brown-100' :
                  'bg-gray-100'
                }`}
              >
                {/* Kuwait shape approximation */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                  <path
                    d="M 50 150 Q 100 120 150 130 L 200 140 Q 250 145 300 160 L 340 180 Q 350 200 340 220 L 300 240 Q 250 250 200 245 L 150 240 Q 100 235 70 200 Q 40 170 50 150 Z"
                    fill={mapStyle === 'satellite' ? '#d4a574' : mapStyle === 'terrain' ? '#c2b280' : '#e5e5e5'}
                    stroke="#8b7355"
                    strokeWidth="2"
                    opacity="0.8"
                  />
                  {/* Persian Gulf */}
                  <path
                    d="M 0 0 L 400 0 L 400 150 Q 350 140 300 160 L 200 140 Q 100 120 50 150 Q 30 170 0 200 Z"
                    fill={mapStyle === 'satellite' ? '#4a90e2' : '#87ceeb'}
                    opacity="0.6"
                  />
                  {/* Islands */}
                  <circle cx="320" cy="120" r="8" fill="#d4a574" stroke="#8b7355" strokeWidth="1" />
                  <circle cx="330" cy="100" r="12" fill="#d4a574" stroke="#8b7355" strokeWidth="1" />
                  <circle cx="340" cy="110" r="6" fill="#d4a574" stroke="#8b7355" strokeWidth="1" />
                </svg>

                {/* Location markers */}
                {kuwaitLocations.map((location, index) => (
                  <LocationMarker key={index} location={location} />
                ))}

                {/* Interactive overlay */}
                <div className="absolute inset-0 bg-transparent hover:bg-black/5 transition-colors cursor-pointer" />
              </div>

              {/* Map controls */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                  <Navigation className="w-4 h-4" />
                </Button>
                <div className="bg-white/90 rounded px-2 py-1 text-xs">
                  {mapStyle === 'satellite' ? 'Satellite View' : 
                   mapStyle === 'terrain' ? 'Terrain View' : 'Street View'}
                </div>
              </div>

              {/* Location legend */}
              <div className="absolute top-4 left-4 bg-white/90 rounded-lg p-3 text-xs space-y-1 shadow-lg">
                <div className="font-semibold mb-2">Locations</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Capital</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Cities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Islands</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Landmarks</span>
                </div>
              </div>
            </>
          )}
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Interactive map showing key locations across Kuwait. Click markers to explore each area.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveMap;