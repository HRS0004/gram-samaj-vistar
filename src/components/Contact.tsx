import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  User,
  MessageSquare
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "संदेश पाठविला गेला!",
      description: "आम्ही लवकरच आपल्याशी संपर्क साधू. धन्यवाद!",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "पत्ता",
      content: [
        "शिवपूर ग्राम पंचायत कार्यालय",
        "शिवपूर, तालुका - पुरंदर",
        "जिल्हा - पुणे, महाराष्ट्र ४१२३०२"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "दूरध्वनी",
      content: [
        "मुख्य कार्यालय: +९१ ९८७६५ ४३२१०",
        "आपत्कालीन: +९१ ९८७६५ ४३२००",
        "फॅक्स: +९१ २०१२ ३४५६७८"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "ईमेल",
      content: [
        "shivpur.panchayat@gov.in",
        "sarpanch.shivpur@gov.in",
        "complaints.shivpur@gov.in"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "कार्यकाळ",
      content: [
        "सोमवार ते शुक्रवार",
        "सकाळी ९:३० ते संध्याकाळी ५:३०",
        "शनिवार: सकाळी ९:३० ते दुपारी १:००"
      ]
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-marathi">
              आमच्याशी संपर्क साधा
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-marathi">
              आपल्या समस्या, सूचना किंवा तक्रारींसाठी आमच्याशी संपर्क साधा
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6 font-marathi">
                  संपर्क माहिती
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="shadow-card">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                            {info.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 font-marathi">
                              {info.title}
                            </h4>
                            <div className="space-y-1">
                              {info.content.map((line, lineIndex) => (
                                <p key={lineIndex} className="text-muted-foreground text-sm font-marathi">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="shadow-card">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted flex items-center justify-center rounded-lg">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-marathi">नकाशा येथे दिसेल</p>
                      <p className="text-sm font-marathi">Google Maps Integration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary font-marathi">
                    संदेश पाठवा
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium font-marathi">
                          नाव *
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="pl-10 font-marathi"
                            placeholder="आपले पूर्ण नाव"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium font-marathi">
                          मोबाइल नंबर *
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="+९१ १२३४५ ६७८९०"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium font-marathi">
                        ईमेल पत्ता
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="example@gmail.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium font-marathi">
                        विषय *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="font-marathi"
                        placeholder="संदेशाचा विषय"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium font-marathi">
                        संदेश *
                      </Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="pl-10 min-h-[120px] font-marathi"
                          placeholder="आपला संदेश येथे लिहा..."
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-hover font-marathi"
                    >
                      {isSubmitting ? (
                        "पाठवत आहे..."
                      ) : (
                        <>
                          संदेश पाठवा
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="mt-6 bg-destructive/10 border-destructive/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-destructive mb-2 font-marathi">
                    आपत्कालीन सेवा
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 font-marathi">
                    अत्यावश्यक परिस्थितीत खालील नंबरवर संपर्क साधा:
                  </p>
                  <div className="flex items-center gap-2 text-destructive font-semibold">
                    <Phone className="w-4 h-4" />
                    <span>+९१ ९८७६५ ४३२००</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;