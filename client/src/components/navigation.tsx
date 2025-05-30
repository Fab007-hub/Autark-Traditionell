import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-transform duration-300 ${
        isScrolled ? "transform translate-y-0" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary cursor-pointer" onClick={() => scrollToSection("home")}>
              Autark & Traditionell
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-earth-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>

              {/* Dropdown Menu */}
              <div className="relative group">
                <button className="text-earth-900 hover:text-primary px-3 py-2 text-sm font-medium flex items-center transition-colors">
                  Themen <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <button
                      onClick={() => scrollToSection("was-ist-das")}
                      className="block w-full text-left px-4 py-2 text-sm text-earth-900 hover:bg-primary hover:text-white transition-colors"
                    >
                      Was ist das?
                    </button>
                    <button
                      onClick={() => scrollToSection("indigene-bauweisen")}
                      className="block w-full text-left px-4 py-2 text-sm text-earth-900 hover:bg-primary hover:text-white transition-colors"
                    >
                      Indigene Bauweisen
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("autark-rechner")}
                className="text-earth-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Autark-Rechner
              </button>
              <button
                onClick={() => scrollToSection("ueber-mich")}
                className="text-earth-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Über Mich
              </button>
              <button
                onClick={() => scrollToSection("impressum")}
                className="text-earth-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Impressum
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-earth-900 hover:text-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-earth-900 hover:text-primary"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("was-ist-das")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-earth-900 hover:text-primary"
            >
              Was ist das?
            </button>
            <button
              onClick={() => scrollToSection("indigene-bauweisen")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-earth-900 hover:text-primary"
            >
              Indigene Bauweisen
            </button>
            <button
              onClick={() => scrollToSection("autark-rechner")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-earth-900 hover:text-primary"
            >
              Autark-Rechner
            </button>
            <button
              onClick={() => scrollToSection("ueber-mich")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-earth-900 hover:text-primary"
            >
              Über Mich
            </button>
            <button
              onClick={() => scrollToSection("impressum")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-earth-900 hover:text-primary"
            >
              Impressum
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
