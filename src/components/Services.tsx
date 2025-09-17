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

interface ServicesProps {
  config: any;
}

const Services: React.FC<ServicesProps> = ({ config }) => {
  const schemes = config.schemes;

  const getSchemeIcon = (index: number) => {
    const icons = [
      <Briefcase className="w-8 h-8 text-primary" />,
      <Home className="w-8 h-8 text-secondary" />,
      <TreePine className="w-8 h-8 text-primary" />,
      <Lightbulb className="w-8 h-8 text-secondary" />
    ];
    return icons[index % icons.length];
  };

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
              शासकीय योजना
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
                      {getSchemeIcon(index)}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(scheme.status)}`}>
                      {scheme.status}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground leading-tight font-marathi">
                    {scheme.name}
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
              कॉपीराइट © २०२४ {config.panchayat.name}. सर्व हक्क राखीव.
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