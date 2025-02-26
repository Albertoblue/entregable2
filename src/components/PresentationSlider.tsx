import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Video, X } from 'lucide-react';

const PresentationSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  
  const slides = [
    {
      title: "Company Overview",
      subtitle: "GreenTech Solutions",
      tagline: "Transforming the Future Through Sustainable Innovation",
      content: [
        "Founded in 2018",
        "Headquarters: Barcelona, Spain",
        "Global presence: 6 countries, 12 offices",
        "250+ employees worldwide",
        "Annual revenue: €35 million"
      ]
    },
    {
      title: "Our Solutions",
      subtitle: "Innovative Product Portfolio",
      content: [],
      sections: [
        {
          title: "Clean Energy Systems",
          items: [
            "Solar integration platforms",
            "Energy storage solutions",
            "Smart grid technologies"
          ]
        },
        {
          title: "Sustainable Infrastructure",
          items: [
            "Green building management systems",
            "Water conservation technology",
            "Waste reduction solutions"
          ]
        },
        {
          title: "Digital Sustainability",
          items: [
            "Carbon footprint tracking software",
            "Environmental compliance tools",
            "Sustainability reporting platforms"
          ]
        }
      ]
    },
    {
      title: "Market Opportunity",
      subtitle: "Growing Demand for Sustainable Technology",
      content: [],
      sections: [
        {
          title: "Market Size and Growth",
          items: [
            "Global green technology market: $11.2 billion (2024)",
            "Projected CAGR: 24.3% through 2030",
            "European market share: 31%"
          ]
        },
        {
          title: "Key Drivers",
          items: [
            "Stringent environmental regulations",
            "Corporate sustainability commitments",
            "Increasing consumer environmental awareness",
            "Rising energy costs"
          ]
        },
        {
          title: "Competitive Advantage",
          items: [
            "Proprietary technology with 12 patents",
            "AI-driven optimization algorithms",
            "Scalable solutions for diverse industries"
          ]
        }
      ]
    },
    {
      title: "Key Takeaways",
      subtitle: "Why GreenTech Solutions?",
      content: [
        "Innovation: Cutting-edge sustainable technology solutions",
        "Expertise: Team of industry experts and environmental scientists",
        "Impact: Proven results with 30% average resource efficiency improvements",
        "Growth: 45% year-over-year revenue growth since 2020",
        "Vision: Committed to creating a sustainable future through accessible technology"
      ],
      footer: "Contact Information: info@greentechsolutions.com | www.greentechsolutions.com | +34 93 XXX XXXX"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const renderSlideContent = (slide) => {
    if (slide.sections) {
      return (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
          {slide.sections.map((section, idx) => (
            <div key={idx} className="bg-white/10 p-2 md:p-4 rounded-lg">
              <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">{section.title}</h3>
              <ul className="list-disc pl-4 md:pl-5 text-sm md:text-base">
                {section.items.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    return (
      <ul className="mt-4 space-y-1 md:space-y-2 text-sm md:text-lg">
        {slide.content.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mr-2 text-green-400">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-green-800 p-4 text-center">
        <h1 className="text-2xl font-bold">GreenTech Solutions</h1>
        <p className="text-sm">Innovative Sustainable Technology</p>
      </header>

      {/* Presentation area */}
      <div className="flex-1 relative overflow-auto">
        {/* Slide */}
        <div className="p-4 md:p-8 min-h-full">
          <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-lg shadow-2xl p-4 md:p-6 flex flex-col h-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-1">{slides[currentSlide].title}</h2>
            <h3 className="text-lg md:text-xl text-green-300 mb-2 md:mb-4">{slides[currentSlide].subtitle}</h3>
            
            {slides[currentSlide].tagline && (
              <p className="italic text-md md:text-lg mb-2 md:mb-4 text-blue-200">{slides[currentSlide].tagline}</p>
            )}
            
            <div className="overflow-y-auto flex-1">
              {renderSlideContent(slides[currentSlide])}
            </div>
            
            {slides[currentSlide].footer && (
              <div className="mt-4 pt-2 text-xs md:text-sm text-gray-300 border-t border-white/20">
                {slides[currentSlide].footer}
              </div>
            )}
          </div>
        </div>

        {/* Navigation and controls */}
        <div className="fixed bottom-4 right-4 flex space-x-2 z-10">
          <button 
            onClick={prevSlide}
            className="p-2 bg-green-800/90 hover:bg-green-700 rounded-full transition shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 bg-green-800/90 hover:bg-green-700 rounded-full transition shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
          <button 
            onClick={() => document.documentElement.requestFullscreen()}
            className="p-2 bg-blue-800/90 hover:bg-blue-700 rounded-full transition shadow-lg"
            aria-label="Fullscreen"
          >
            <Maximize2 size={20} />
          </button>
        </div>

        {/* Slide counter */}
        <div className="fixed bottom-4 left-4 bg-green-800/90 px-3 py-1 rounded-full text-sm shadow-lg z-10">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Floating video button */}
      <button 
        onClick={() => setVideoOpen(true)}
        className="fixed bottom-16 right-16 w-16 h-16 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-lg flex items-center justify-center z-20 transition-all duration-300 animate-pulse hover:animate-none"
        style={{ boxShadow: '0 0 0 8px rgba(34, 197, 94, 0.3)' }}
        title="Ver presentación en video"
      >
        <Video size={24} />
      </button>

      {/* Video modal */}
      {videoOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 md:p-8">
          <div className="bg-gray-800 rounded-lg w-full max-w-4xl overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="font-bold text-lg">Presentación GreenTech Solutions</h3>
              <button 
                onClick={() => setVideoOpen(false)}
                className="p-1 hover:bg-gray-700 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              {/* Reemplaza 'VIDEO_ID_AQUI' con el ID de tu video de YouTube */}
              <iframe 
                src="https://www.youtube.com/embed/Hfrj82QGWSU?autoplay=1" 
                title="Presentación GreenTech Solutions" 
                className="absolute inset-0 w-full h-full"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <div className="p-4 text-sm text-gray-300">
              <p>Entregable 2 INGLÉS PARA LOS NEGOCIOS</p>
              <p className="mt-2 text-green-300">Anabel Sol Rodriguez</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PresentationSlider;