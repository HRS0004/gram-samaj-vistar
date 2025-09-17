import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import heroPanchayat from '@/assets/hero-panchayat.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPanchayat}
          alt="शिवपूर पंचायत दृश्य"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* National Emblem Placeholder */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
              <span className="text-3xl">🏛️</span>
            </div>
            <div className="text-sm opacity-90">राष्ट्रीय चिन्ह | National Emblem</div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-marathi leading-tight">
            शिवपूर पंचायतात आपले स्वागत आहे
          </h1>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-lg md:text-xl mb-8 opacity-90">
            <MapPin className="w-5 h-5" />
            <span className="font-marathi">तालुका - पुरंदर, जिल्हा - पुणे, महाराष्ट्र</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed font-marathi">
            आधुनिक तंत्रज्ञान आणि पारंपरिक मूल्यांसह नागरिकांना सेवा देण्यासाठी वचनबद्ध
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-elevated"
            >
              आमच्या सेवा पहा
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
            >
              आमच्याशी संपर्क साधा
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">२,५००+</div>
              <div className="text-sm opacity-75">कुटुंबे</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">१५+</div>
              <div className="text-sm opacity-75">योजना</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">९५%</div>
              <div className="text-sm opacity-75">डिजिटल सेवा</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">२४/७</div>
              <div className="text-sm opacity-75">ऑनलाइन सहाय्य</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;