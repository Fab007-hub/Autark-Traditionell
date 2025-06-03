import { Leaf, Home, Globe, Lightbulb, Droplet, Thermometer, Sprout, Recycle, Wifi, Wrench } from "lucide-react";

export default function WasIstDasSection() {
  return (
    <section id="was-ist-das" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-900 mb-6">Was ist das?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Autarke Hausgestaltung bedeutet die Schaffung von Wohnräumen, die unabhängig von externen Versorgungsnetzen funktionieren. 
            Durch die Integration von nachhaltigen Technologien und traditionellen Bauweisen entstehen energieeffiziente, 
            selbstversorgende Häuser, die im Einklang mit der Natur stehen.
          </p>
        </div>

        {/* Introduction Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-earth-100 rounded-xl p-8 text-center">
            <Leaf className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Nachhaltigkeit</h3>
            <p className="text-gray-600">Ressourcenschonende Bauweise mit erneuerbaren Energien</p>
          </div>
          <div className="bg-earth-100 rounded-xl p-8 text-center">
            <Home className="h-16 w-16 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Autarkie</h3>
            <p className="text-gray-600">Unabhängige Versorgung mit Energie, Wasser und Wärme</p>
          </div>
          <div className="bg-earth-100 rounded-xl p-8 text-center">
            <Globe className="h-16 w-16 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Tradition</h3>
            <p className="text-gray-600">Bewährte indigene Bautechniken für moderne Anwendungen</p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-20">
          {/* Solar Energy Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-earth-900 mb-6">Solarenergie</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Photovoltaikanlagen und Solarthermie bilden das Herzstück der autarken Energieversorgung. 
                Moderne Solarpanels erreichen Wirkungsgrade von über 20% und können in Kombination mit 
                Batteriespeichern eine vollständige Stromversorgung gewährleisten.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Die Integration von Solartechnik in die Gebäudehülle durch Building-Integrated Photovoltaics (BIPV) 
                ermöglicht eine ästhetisch ansprechende und funktionale Lösung. Solardachziegel und 
                transparente Solarmodule eröffnen neue Gestaltungsmöglichkeiten.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Photovoltaik für Stromerzeugung</li>
                <li>Solarthermie für Warmwasser</li>
                <li>Batteriespeicher für Energieunabhängigkeit</li>
                <li>Intelligente Energiemanagementsysteme</li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Solarpanels auf nachhaltigem Hausda ch mit grüner Umgebung" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* Water Systems Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h3 className="text-3xl font-bold text-earth-900 mb-6">Wasserbeschaffung und -management</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Autarke Wassersysteme kombinieren Regenwassersammlung, Grundwassernutzung und innovative 
                Aufbereitungstechnologien. Regenwasser wird über Dachflächen gesammelt und in Zisternen gespeichert, 
                während biologische Kläranlagen das Abwasser vor Ort aufbereiten.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Grauwasser-Recycling-Systeme ermöglichen die Mehrfachnutzung von Wasser aus Duschen und Waschbecken 
                für die Gartenbewässerung. Moderne Filtertechnologien und UV-Desinfektion gewährleisten dabei 
                höchste Wasserqualität.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Regenwassersammlung und -speicherung</li>
                <li>Grauwasser-Recycling-Systeme</li>
                <li>Biologische Abwasseraufbereitung</li>
                <li>Intelligente Bewässerungssysteme</li>
              </ul>
            </div>
            <div className="lg:order-1">
              <img 
                src="https://www.geo-mall.de/data/filemanager-upload/Blog/Regentonnen/regenfass-zum-sammeln-von-regenwasser.jpg" 
                alt="Regenwassersammeltank und nachhaltige Wassersysteme" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* Heat Regulation Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-earth-900 mb-6">Hitzeregulierung und Klimatisierung</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Passive Klimatisierung nutzt die natürlichen Eigenschaften von Baumaterialien und 
                architektonischen Elementen zur Temperaturregulierung. Erdwärme, thermische Masse 
                und natürliche Belüftung reduzieren den Energiebedarf erheblich.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Innovative Materialien wie Phasenwechselmaterialien (PCM) speichern Wärme tagsüber 
                und geben sie nachts ab. Intelligente Verschattungssysteme und begrünte Dächer 
                schaffen zusätzlich ein angenehmes Mikroklima.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Passive Solarheizung und -kühlung</li>
                <li>Erdwärme und Geothermie</li>
                <li>Thermische Masse und PCM-Materialien</li>
                <li>Natürliche Belüftungssysteme</li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Energieeffizientes Haus mit Wärmedämmung und Gründach" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* Additional Systems */}
          <div className="bg-earth-100 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-earth-900 mb-8 text-center">Weitere autarke Systeme</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Sprout className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Urbane Landwirtschaft</h4>
                <p className="text-gray-700">Hydroponik, Aquaponik und vertikale Gärten für die Eigenversorgung</p>
              </div>
              <div className="text-center">
                <Recycle className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Abfallmanagement</h4>
                <p className="text-gray-700">Kompostierung, Biogas und Zero-Waste-Konzepte</p>
              </div>
              <div className="text-center">
                <Wifi className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Smart Home</h4>
                <p className="text-gray-700">IoT-Sensoren und automatisierte Steuerungssysteme</p>
              </div>
              <div className="text-center">
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Selbstversorgung</h4>
                <p className="text-gray-700">Werkstätten, Reparatur und lokale Materialproduktion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
