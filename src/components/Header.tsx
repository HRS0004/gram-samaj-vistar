import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  config: any;
}

const Header: React.FC<HeaderProps> = ({ config }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'मुख्यपृष्ठ', href: '#home' },
    { name: 'पंचायत माहिती', href: '#about' },
    { name: 'योजना', href: '#schemes' },
    { name: 'सेवा', href: '#services' },
    { name: 'पदाधिकारी', href: '#officials' },
    { name: 'गॅलरी', href: '#gallery' },
    { name: 'संपर्क', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-card">
      {/* Government Branding Bar */}
      <div className="bg-gradient-to-r from-saffron via-white to-green text-center py-2 border-b-2 border-primary">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇮🇳</span>
              <span className="text-xs font-semibold text-primary">भारत सरकार</span>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-primary">महाराष्ट्र शासन</div>
              <div className="text-xs text-muted-foreground">Government of Maharashtra</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-primary">राष्ट्रीय प्रतीक</span>
              <span className="text-2xl">🏛️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>{config.contact.phone}</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                <span>{config.contact.email}</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>सत्यमेव जयते | Satyameva Jayate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              श्री
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary font-marathi">
                {config.panchayat.name}
              </h1>
              <p className="text-sm text-muted-foreground">
                तालुका - {config.panchayat.taluka}, जिल्हा - {config.panchayat.district}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;