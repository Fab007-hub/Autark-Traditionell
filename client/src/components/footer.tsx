import { Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-earth-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Autark & Traditionell</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ein Schulprojekt über die Verbindung zwischen nachhaltiger Hausgestaltung und indigenen 
              Bautechniken für eine autarke Zukunft.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Schnellzugriff</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("was-ist-das")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Was ist das?
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("indigene-bauweisen")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Indigene Bauweisen
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("ueber-mich")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Über Mich
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("impressum")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Impressum
                </button>
              </li>
              <li><span className="text-gray-400">Datenschutz</span></li>
              <li><span className="text-gray-400">Bildnachweise</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Fabio Peuser - Schulprojekt Prismaschule Langenfeld. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
