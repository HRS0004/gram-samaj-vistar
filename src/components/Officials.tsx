import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

interface OfficialsProps {
  config: any;
}

const Officials: React.FC<OfficialsProps> = ({ config }) => {
  const officials = config.officials;

  return (
    <section id="officials" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-marathi">
              पदाधिकारी
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-marathi">
              आमच्या अनुभवी आणि समर्पित पदाधिकारी आणि कर्मचार्‍यांची ओळख
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4"></div>
          </div>

          {/* Officials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officials.map((official, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  {/* Profile Header */}
                  <div className="bg-gradient-primary p-6 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 transform rotate-12 scale-150"></div>
                    <div className="relative z-10">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center text-2xl backdrop-blur-sm">
                        👨‍💼
                      </div>
                      <h3 className="text-xl font-bold mb-2 font-marathi">{official.name}</h3>
                      <p className="text-lg opacity-90 font-marathi">{official.title}</p>
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="p-6">
                    {/* Contact Information */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{official.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-xs">{official.email}</span>
                      </div>
                    </div>

                    {/* Office Hours */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="text-xs text-muted-foreground font-marathi">
                        <strong>कार्यकाळ:</strong> {config.contact.timings}
                      </div>
                      <div className="text-xs text-muted-foreground font-marathi mt-1">
                        <strong>दिवस:</strong> सोमवार ते शुक्रवार
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-primary mb-4 font-marathi">
              कार्यालयीन वेळ आणि संपर्क माहिती
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-2 font-marathi">कार्यकाळ</h4>
                <p className="text-muted-foreground font-marathi">सकाळी ९:३० ते संध्याकाळी ५:३०</p>
                <p className="text-muted-foreground font-marathi">सोमवार ते शुक्रवार</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 font-marathi">आपत्कालीन संपर्क</h4>
                <p className="text-muted-foreground font-marathi">२४/७ उपलब्ध</p>
                <p className="text-primary font-semibold">+९१ ९८७६५ ४३२००</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 font-marathi">पत्ता</h4>
                <p className="text-muted-foreground font-marathi">
                  {config.contact.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Officials;