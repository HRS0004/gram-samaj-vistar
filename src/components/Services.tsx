import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  Home, 
  Heart, 
  GraduationCap, 
  Droplets, 
  Lightbulb,
  TreePine,
  Shield,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const schemes = [
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना",
      description: "ग्रामीण भागातील कुटुंबांना वर्षभरात १०० दिवस रोजगाराची हमी",
      beneficiaries: "१,२०० कुटुंबे",
      status: "सक्रिय"
    },
    {
      icon: <Home className="w-8 h-8 text-secondary" />,
      title: "प्रधानमंत्री आवास योजना - ग्रामीण",
      description: "गरीब घरकुलांना पक्के घर बांधण्यासाठी आर्थिक सहाय्य",
      beneficiaries: "३५० कुटुंबे",
      status: "सक्रिय"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "आयुष्मान भारत योजना",
      description: "गरीब कुटुंबांना ५ लाख रुपयांपर्यंत मोफत वैद्यकीय सेवा",
      beneficiaries: "२,१०० कुटुंबे",
      status: "सक्रिय"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-secondary" />,
      title: "सर्व शिक्षा अभियान",
      description: "प्राथमिक शिक्षणापासून माध्यमिक शिक्षणापर्यंत मोफत शिक्षण",
      beneficiaries: "८०० विद्यार्थी",
      status: "सक्रिय"
    },
    {
      icon: <Droplets className="w-8 h-8 text-primary" />,
      title: "जल जीवन मिशन",
      description: "प्रत्येक घरापर्यंत स्वच्छ पिण्याचे पाणी पोहोचवणे",
      beneficiaries: "९५% कव्हरेज",
      status: "अंमलबजावणी"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: "सौभाग्य योजना",
      description: "प्रत्येक घरापर्यंत वीज कनेक्शन पोहोचवणे",
      beneficiaries: "१००% कव्हरेज",
      status: "पूर्ण"
    },
    {
      icon: <TreePine className="w-8 h-8 text-primary" />,
      title: "स्वच्छ भारत मिशन",
      description: "स्वच्छता आणि खुल्या शौचालयमुक्त गाव निर्मिती",
      beneficiaries: "संपूर्ण गाव",
      status: "सक्रिय"
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "प्रधानमंत्री किसान सम्मान निधी",
      description: "शेतकर्‍यांना वर्षाला ६,००० रुपये आर्थिक सहाय्य",
      beneficiaries: "९०० शेतकरी",
      status: "सक्रिय"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'सक्रिय':
        return 'bg-green-100 text-green-800';
      case 'अंमलबजावणी':
        return 'bg-blue-100 text-blue-800';
      case 'पूर्ण':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="schemes" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-marathi">
              योजना आणि सेवा
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-marathi">
              केंद्र आणि राज्य सरकारच्या कल्याणकारी योजनांची यशस्वी अंमलबजावणी
            </p>
            <div className="w-20 h-1 bg-gradient-secondary mx-auto mt-4"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {schemes.map((scheme, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors duration-300">
                      {scheme.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(scheme.status)}`}>
                      {scheme.status}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground leading-tight font-marathi">
                    {scheme.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed font-marathi">
                    {scheme.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground font-marathi">लाभार्थी: </span>
                      <span className="font-semibold text-primary font-marathi">{scheme.beneficiaries}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover group/btn">
                      अधिक माहिती
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-marathi">
              योजनांचा लाभ घेण्यासाठी अर्ज करा
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto font-marathi">
              सर्व योजनांची संपूर्ण माहिती आणि अर्जाची प्रक्रिया ऑनलाइन उपलब्ध आहे
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold"
              >
                ऑनलाइन अर्ज करा
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              >
                संपर्क केंद्र
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;