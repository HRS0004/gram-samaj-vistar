import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

const Officials = () => {
  const officials = [
    {
      name: "श्री. रमेश शंकर शेटे",
      position: "सरपंच",
      phone: "+९१ ९८७६५ ४३२१०",
      email: "sarpanch.shivpur@gov.in",
      address: "शिवपूर गाव",
      image: "👨‍💼",
      experience: "१० वर्षे अनुभव",
      description: "ग्रामविकास आणि नागरिक सेवेत तज्ञ"
    },
    {
      name: "श्रीमती. सुनिता राजेश पाटील",
      position: "उप-सरपंच",
      phone: "+९१ ९८७६५ ४३२११",
      email: "deputy.shivpur@gov.in",
      address: "शिवपूर गाव",
      image: "👩‍💼",
      experience: "८ वर्षे अनुभव",
      description: "महिला व बाल कल्याण तज्ञ"
    },
    {
      name: "श्री. संदीप महादेव जाधव",
      position: "ग्राम सेवक",
      phone: "+९१ ९८७६५ ४३२१२",
      email: "secretary.shivpur@gov.in",
      address: "शिवपूर पंचायत कार्यालय",
      image: "👨‍💻",
      experience: "१५ वर्षे अनुभव",
      description: "प्रशासकीय कामकाज आणि नोंदी तज्ञ"
    },
    {
      name: "श्री. विकास अशोक कुलकर्णी",
      position: "लेखाधिकारी",
      phone: "+९१ ९८७६५ ४३२१३",
      email: "accounts.shivpur@gov.in",
      address: "शिवपूर पंचायत कार्यालय",
      image: "👨‍🏫",
      experience: "१२ वर्षे अनुभव",
      description: "आर्थिक व्यवस्थापन तज्ञ"
    },
    {
      name: "श्रीमती. प्रिया संजय देशमुख",
      position: "आरोग्य कर्मचारी",
      phone: "+९१ ९८७६५ ४३२१४",
      email: "health.shivpur@gov.in",
      address: "प्राथमिक आरोग्य केंद्र",
      image: "👩‍⚕️",
      experience: "७ वर्षे अनुभव",
      description: "सामुदायिक आरोग्य तज्ञ"
    },
    {
      name: "श्री. राजू मारुती भोसले",
      position: "तांत्रिक सहायक",
      phone: "+९१ ९८७६५ ४३२१५",
      email: "technical.shivpur@gov.in",
      address: "शिवपूर पंचायत कार्यालय",
      image: "👨‍🔧",
      experience: "९ वर्षे अनुभव",
      description: "पाणी व सॅनिटेशन तज्ञ"
    }
  ];

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
                      <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-4xl backdrop-blur-sm">
                        {official.image}
                      </div>
                      <h3 className="text-xl font-bold mb-2 font-marathi">{official.name}</h3>
                      <p className="text-lg opacity-90 font-marathi">{official.position}</p>
                      <p className="text-sm opacity-75 mt-1 font-marathi">{official.experience}</p>
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm mb-4 font-marathi">
                      {official.description}
                    </p>

                    {/* Contact Information */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground font-marathi">{official.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-xs">{official.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground font-marathi">{official.address}</span>
                      </div>
                    </div>

                    {/* Office Hours */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="text-xs text-muted-foreground font-marathi">
                        <strong>कार्यकाळ:</strong> सकाळी ९:३० ते सायंकाळी ५:३०
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
                  शिवपूर ग्राम पंचायत कार्यालय<br />
                  शिवपूर, तालुका - पुरंदर<br />
                  जिल्हा - पुणे, महाराष्ट्र ४१२३०२
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