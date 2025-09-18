import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fireplace.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/80 via-warm-brown/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center lg:text-left">
        <header>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Kominki Gdańsk – sprzedaż i montaż
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">
            Tworzymy ciepłą atmosferę w Twoim domu. Doradzimy, dostarczymy i profesjonalnie zamontujemy kominek – z gwarancją i w ustalonym terminie.
          </p>
          
          <ul className="text-white/90 mb-8 space-y-2 list-disc list-inside">
            <li>Szybkie terminy</li>
            <li>Gwarancja montażu</li>
            <li>Gdańsk i okolice</li>
          </ul>
          
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('offer')}
            className="text-lg px-8 py-6 h-auto"
          >
            Zobacz ofertę
          </Button>
        </header>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;