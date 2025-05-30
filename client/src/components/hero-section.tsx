import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Autark & Traditionell</h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Die Verbindung zwischen nachhaltiger Hausgestaltung und indigenen Bautechniken für eine autarke Zukunft
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-light text-white px-8 py-3 text-lg font-semibold"
            onClick={() => scrollToSection("was-ist-das")}
          >
            Projekt entdecken
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-earth-900 px-8 py-3 text-lg font-semibold backdrop-blur-sm"
            onClick={() => scrollToSection("indigene-bauweisen")}
          >
            Traditionen erforschen
          </Button>
        </div>
      </div>
    </section>
  );
}
