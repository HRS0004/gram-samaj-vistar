import React from 'react';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  config: any;
}

const Footer: React.FC<FooterProps> = ({ config }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'मुख्यपृष्ठ', href: '#home' },
    { name: 'पंचायत माहिती', href: '#about' },
    { name: 'योजना', href: '#schemes' },
    { name: 'पदाधिकारी', href: '#officials' },
    { name: 'गॅलरी', href: '#gallery' },
    { name: 'संपर्क', href: '#contact' }
  ];

  const importantLinks = [
    { name: 'महाराष्ट्र शासन', href: '#', external: true },
    { name: 'जिल्हा कलेक्टर कार्यालय', href: '#', external: true },
    { name: 'तहसील कार्यालय', href: '#', external: true },
    { name: 'Right to Information', href: '#', external: true },
    { name: 'Digital India', href: '#', external: true },
    { name: 'MyGov Portal', href: '#', external: true }
  ];

  const legalPages = [
    { name: 'गोपनीयता धोरण', href: '#privacy' },
    { name: 'अंतर्गत तपासणी', href: '#audit' },
    { name: 'शपथपत्र', href: '#disclaimer' },
    { name: 'सुलभता', href: '#accessibility' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold">
                श्री
              </div>
              <div>
                <h3 className="text-lg font-bold font-marathi">{config.panchayat.name}</h3>
                <p className="text-sm text-primary-foreground/80 font-marathi">{config.panchayat.taluka} तालुका, {config.panchayat.district}</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed font-marathi">
              आधुनिक तंत्रज्ञान आणि पारंपरिक मूल्यांसह नागरिकांची सेवा करण्यासाठी वचनबद्ध एक प्रगतिशील ग्राम पंचायत.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="font-marathi">{config.contact.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{config.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{config.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-marathi">द्रुत लिंक्स</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 font-marathi"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-marathi">महत्वपूर्ण लिंक्स</h4>
            <ul className="space-y-2">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 flex items-center gap-1 font-marathi"
                    {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-marathi">सेवा आणि माहिती</h4>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-semibold font-marathi">कार्यकाळ:</div>
                <div className="text-primary-foreground/80 font-marathi">सोमवार ते शुक्रवार</div>
                <div className="text-primary-foreground/80">९:३० - १७:३०</div>
              </div>
              
              <div className="text-sm">
                <div className="font-semibold font-marathi">आपत्कालीन सेवा:</div>
                <div className="text-primary-foreground/80">२४/७ उपलब्ध</div>
                <div className="font-semibold">+९१ ९८७६५ ४३२००</div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <div className="font-semibold mb-2 font-marathi">आमच्याशी जुड़ा:</div>
                <div className="flex gap-3">
                  <a href="#" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/80 text-center lg:text-left">
            <p className="font-marathi">
              © {currentYear} {config.panchayat.name}. सर्व हक्क राखीव.
            </p>
            <p className="mt-1">
              Powered by Digital India Initiative | Government of Maharashtra
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {legalPages.map((page, index) => (
              <React.Fragment key={index}>
                <a
                  href={page.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 font-marathi"
                >
                  {page.name}
                </a>
                {index < legalPages.length - 1 && (
                  <span className="text-primary-foreground/40">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Government Compliance */}
        <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-primary-foreground/60">
            <span className="font-marathi">भारत सरकार | Government of India</span>
            <span>•</span>
            <span className="font-marathi">महाराष्ट्र शासन | Government of Maharashtra</span>
            <span>•</span>
            <span>Website Content Managed by Shivpur Gram Panchayat</span>
          </div>
          <div className="mt-2 text-xs text-primary-foreground/60">
            <span className="font-marathi">शेवटची अपडेट:</span> {new Date().toLocaleDateString('mr-IN')} | 
            <span> Last Updated: </span> {new Date().toLocaleDateString('en-IN')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;