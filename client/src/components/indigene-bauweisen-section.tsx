import { CheckCircle, Wind, Thermometer, Umbrella, Droplet, Leaf, Recycle, Sprout, TreePine, MapPin } from "lucide-react";

export default function IndigeneBauweisenSection() {
  return (
    <section id="indigene-bauweisen" className="py-20 bg-gradient-to-br from-secondary-light to-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-900 mb-6">Indigene Bauweisen</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Über Jahrtausende haben indigene Völker nachhaltige Bautechniken entwickelt, die perfekt an ihre 
            Umgebung angepasst sind. Diese traditionellen Methoden bieten wertvolle Erkenntnisse für moderne 
            autarke Hauskonzepte.
          </p>
        </div>

        {/* Traditional Building Methods Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Adobe-Häuser" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Adobe und Lehmbauten</h3>
              <p className="text-gray-700">Natürliche Temperaturregulierung durch thermische Masse und lokale Materialien</p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Pfahlbauten" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Pfahlbauten</h3>
              <p className="text-gray-700">Anpassung an Umweltbedingungen und natürliche Belüftung</p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Reetdachhäuser" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Strohdächer</h3>
              <p className="text-gray-700">Nachhaltige Isolierung und Regenwassermanagement</p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Steinbauten" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Natursteinbauten</h3>
              <p className="text-gray-700">Langlebigkeit und Anpassung an extreme Klimabedingungen</p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Bambusarchitektur" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Bambusarchitektur</h3>
              <p className="text-gray-700">Flexibilität, Erdbebensicherheit und schnelles Wachstum</p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Erdbauten" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Erdbauten</h3>
              <p className="text-gray-700">Energieeffizienz durch Erdwärme und natürliche Isolation</p>
            </div>
          </div>
        </div>

        {/* Integration with Modern Concepts */}
        <div className="bg-white rounded-2xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-earth-900 mb-8 text-center">Integration mit modernen autarken Konzepten</h3>
          
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-semibold text-primary mb-4">Materialwissenschaft trifft Tradition</h4>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Moderne Lehmbauten nutzen traditionelle Techniken mit zeitgemäßen Zusätzen wie Naturfasern 
                  und mineralischen Bindemitteln. 3D-Drucktechnologie ermöglicht präzise Formen bei 
                  Beibehaltung der natürlichen Materialeigenschaften.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Bambus wird heute in Verbundwerkstoffen eingesetzt, die die Flexibilität und Festigkeit 
                  des natürlichen Materials mit moderner Haltbarkeit kombinieren.
                </p>
              </div>
              <div className="bg-earth-100 rounded-xl p-8">
                <h5 className="font-semibold text-lg mb-4">Moderne Anwendungen:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" />3D-gedruckte Lehmwände</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" />Präfabrizierte Bambusmodule</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" />Intelligente Strohdächer mit Sensoren</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-2" />Hybride Stein-Beton-Konstruktionen</li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <h4 className="text-2xl font-semibold text-secondary mb-4">Klimaadaptive Architektur</h4>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Indigene Bauweisen zeigen, wie Architektur perfekt an lokale Klimabedingungen angepasst 
                  werden kann. Moderne autarke Häuser übernehmen diese Prinzipien und erweitern sie mit 
                  intelligenter Gebäudetechnik.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Passive Kühlung durch Windtürme, thermische Masse für Temperaturpufferung und 
                  natürliche Belüftungskonzepte reduzieren den Energiebedarf erheblich.
                </p>
              </div>
              <div className="lg:order-1 bg-earth-100 rounded-xl p-8">
                <h5 className="font-semibold text-lg mb-4">Klimastrategien:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><Wind className="h-5 w-5 text-secondary mr-2" />Windturm-Kühlsysteme</li>
                  <li className="flex items-center"><Thermometer className="h-5 w-5 text-secondary mr-2" />Thermische Masse</li>
                  <li className="flex items-center"><Umbrella className="h-5 w-5 text-secondary mr-2" />Natürliche Verschattung</li>
                  <li className="flex items-center"><Droplet className="h-5 w-5 text-secondary mr-2" />Verdunstungskühlung</li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-semibold text-accent mb-4">Nachhaltige Ressourcennutzung</h4>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Traditionelle Bauweisen nutzen ausschließlich lokale, nachwachsende Materialien. 
                  Moderne autarke Häuser adaptieren diesen Ansatz durch regionale Wertschöpfungsketten 
                  und kreislaufwirtschaftliche Konzepte.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Biomaterialien wie Pilzmycel, Hanffasern und recycelte Materialien ergänzen traditionelle 
                  Baustoffe und schaffen vollständig kompostierbare Gebäudestrukturen.
                </p>
              </div>
              <div className="bg-earth-100 rounded-xl p-8">
                <h5 className="font-semibold text-lg mb-4">Innovative Materialien:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><Leaf className="h-5 w-5 text-accent mr-2" />Pilzmycel-Dämmstoffe</li>
                  <li className="flex items-center"><Recycle className="h-5 w-5 text-accent mr-2" />Recycelte Kunststoffziegel</li>
                  <li className="flex items-center"><Sprout className="h-5 w-5 text-accent mr-2" />Hanf-Kalk-Mischungen</li>
                  <li className="flex items-center"><TreePine className="h-5 w-5 text-accent mr-2" />Lokales Holz und Stroh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-earth-900 mb-12 text-center">Erfolgreiche Integrationsprojekte</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Moderne Earthships</h4>
              <p className="text-gray-700 mb-4">
                Diese innovativen Häuser kombinieren traditionelle Erdbautechniken mit modernen 
                Solarsystemen und Regenwassersammlung. Reifen und Erdwände sorgen für thermische 
                Stabilität, während Glasfronten passive Solarenergie nutzen.
              </p>
              <div className="flex items-center text-primary">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="font-medium">Taos, New Mexico & weltweite Projekte</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Bambus-Solarhäuser</h4>
              <p className="text-gray-700 mb-4">
                In Südostasien entstehen Häuser, die traditionelle Bambuskonstruktionen mit 
                integrierten Solarpanels verbinden. Die natürliche Flexibilität des Bambus 
                wird durch moderne Verbindungstechniken verstärkt.
              </p>
              <div className="flex items-center text-primary">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="font-medium">Bali, Vietnam & Thailand</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
