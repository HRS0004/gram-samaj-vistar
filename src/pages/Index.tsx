import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Officials from '@/components/Officials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import config from '../../config.json';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header config={config} />
      <main>
        <Hero config={config} />
        <About config={config} />
        <Services config={config} />
        <Officials config={config} />
        <Gallery config={config} variant="masonry" />
        <Contact config={config} />
      </main>
      <Footer config={config} />
    </div>
  );
};

export default Index;
