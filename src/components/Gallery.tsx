import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, X } from 'lucide-react';
import communityImage from '@/assets/community-1.jpg';
import developmentImage from '@/assets/development-1.jpg';
import festivalImage from '@/assets/festival-1.jpg';
import agricultureImage from '@/assets/agriculture-1.jpg';
import panchayatOffice from '@/assets/panchayat-office.jpg';
import heroPanchayat from '@/assets/hero-panchayat.jpg';

interface GalleryProps {
  variant?: 'grid' | 'masonry';
}

const Gallery: React.FC<GalleryProps> = ({ variant = 'masonry' }) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const galleryImages = [
    {
      src: communityImage,
      title: "समुदायिक सभा",
      description: "ग्रामसभेत सक्रिय सहभाग घेणारे नागरिक",
      category: "सभा"
    },
    {
      src: developmentImage,
      title: "विकास प्रकल्प",
      description: "गावातील पायाभूत सुविधांचा विकास",
      category: "विकास"
    },
    {
      src: festivalImage,
      title: "सांस्कृतिक कार्यक्रम",
      description: "गावातील पारंपरिक उत्सव आणि सण",
      category: "सांस्कृतिक"
    },
    {
      src: agricultureImage,
      title: "शेती आणि शेतकरी",
      description: "आधुनिक शेती तंत्रज्ञानाचा वापर",
      category: "शेती"
    },
    {
      src: panchayatOffice,
      title: "पंचायत कार्यालय",
      description: "आधुनिक सुविधांसह सुसज्ज कार्यालय",
      category: "प्रशासन"
    },
    {
      src: heroPanchayat,
      title: "गावाचे दृश्य",
      description: "शिवपूर गावाचे सुंदर नैसर्गिक दृश्य",
      category: "निसर्ग"
    }
  ];

  const categories = ["सर्व", "सभा", "विकास", "सांस्कृतिक", "शेती", "प्रशासन", "निसर्ग"];
  const [activeCategory, setActiveCategory] = useState("सर्व");

  const filteredImages = activeCategory === "सर्व" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image: any) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const getGridClass = () => {
    if (variant === 'grid') {
      return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    }
    return 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6';
  };

  return (
    <section id="gallery" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-marathi">
              गॅलरी
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-marathi">
              आमच्या गावातील विविध कार्यक्रम, विकास प्रकल्प आणि सांस्कृतिक कार्यक्रमांचे छायाचित्र
            </p>
            <div className="w-20 h-1 bg-gradient-secondary mx-auto mt-4"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="font-marathi"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className={getGridClass()}>
            {filteredImages.map((image, index) => (
              <Card 
                key={index} 
                className={`group cursor-pointer overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 ${
                  variant === 'masonry' ? 'break-inside-avoid mb-6' : ''
                }`}
                onClick={() => openModal(image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                    <h3 className="text-white font-semibold mb-1 font-marathi">{image.title}</h3>
                    <p className="text-white/80 text-sm font-marathi">{image.description}</p>
                    <span className="inline-block bg-white/20 text-white text-xs px-2 py-1 rounded mt-2 font-marathi">
                      {image.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="font-marathi">
              अधिक छायाचित्रे पहा
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-bold mb-2 font-marathi">{selectedImage.title}</h3>
              <p className="text-white/90 font-marathi">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;