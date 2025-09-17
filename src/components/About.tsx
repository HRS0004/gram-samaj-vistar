import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Calendar, Award } from 'lucide-react';
import panchayatOffice from '@/assets/panchayat-office.jpg';

const About = () => {
  const highlights = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "भौगोलिक क्षेत्र",
      value: "१२.५ चौ.कि.मी.",
      description: "एकुण क्षेत्रफळ"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "लोकसंख्या",
      value: "८,५००+",
      description: "एकुण रहिवासी"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "स्थापना",
      value: "१९५२",
      description: "पंचायत स्थापना वर्ष"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "पुरस्कार",
      value: "५+",
      description: "राज्य पुरस्कार"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-marathi">
              आमच्या पंचायताबद्दल थोडक्यात
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-marathi">
              शिवपूर ग्राम पंचायत - आधुनिकता आणि परंपरेचे मिळण
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground font-marathi">
                  शिवपूर ग्राम पंचायत पुरंदर तालुक्यातील एक अग्रगण्य पंचायत आहे. आमची स्थापना १९५२ मध्ये झाली आणि तेव्हापासून आम्ही गावातील नागरिकांच्या कल्याणासाठी निरंतर कार्य करत आहोत.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground font-marathi">
                  आमच्या पंचायतीत आधुनिक तंत्रज्ञानाचा वापर करून सर्व सेवा डिजिटल केल्या आहेत. नागरिक सेवा, योजनांची अंमलबजावणी, आणि शासकीय कामकाजात पारदर्शकता आमचे मुख्य उद्दिष्ट आहे.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground font-marathi">
                  आमची दृष्टी एक आत्मनिर्भर, शिक्षित आणि समृद्ध गाव निर्माण करण्याची आहे. महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना, स्वच्छ भारत अभियान, आणि इतर केंद्र व राज्य सरकारच्या योजनांची यशस्वी अंमलबजावणी करत आहोत.
                </p>
              </div>

              {/* Key Features */}
              <div className="bg-white p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-semibold text-primary mb-4 font-marathi">आमची वैशिष्ट्ये</h3>
                <ul className="space-y-2 text-muted-foreground font-marathi">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    १००% डिजिटल सेवा
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    पारदर्शक कामकाज
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    नागरिक सहभागातून विकास
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    पर्यावरण संरक्षण
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                <img
                  src={panchayatOffice}
                  alt="शिवपूर पंचायत कार्यालय"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold mb-2 font-marathi">शिवपूर पंचायत कार्यालय</h3>
                  <p className="text-sm opacity-90 font-marathi">आधुनिक सुविधांसह नागरिक सेवा केंद्र</p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center p-6 shadow-card hover:shadow-elevated transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2 font-marathi">{item.value}</div>
                  <div className="text-sm font-semibold text-foreground mb-1 font-marathi">{item.title}</div>
                  <div className="text-xs text-muted-foreground font-marathi">{item.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;