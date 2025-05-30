import { User, Mail, School } from "lucide-react";

export default function ImpressumSection() {
  return (
    <section id="impressum" className="py-20 bg-earth-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-900 mb-6">Impressum</h2>
        </div>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-earth-900 mb-6">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <User className="h-6 w-6 text-primary mr-4" />
                  <span className="text-lg text-gray-700">Fabio Peuser</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <a 
                    href="mailto:a26_f.peuser@prismaschule.de" 
                    className="text-lg text-primary hover:text-primary-light transition-colors"
                  >
                    a26_f.peuser@prismaschule.de
                  </a>
                </div>
                <div className="flex items-center">
                  <School className="h-6 w-6 text-primary mr-4" />
                  <span className="text-lg text-gray-700">Prismaschule Langenfeld</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-earth-900 mb-6">Rechtliche Hinweise</h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Dies ist eine nicht-kommerzielle Webseite, die im Rahmen eines Schulprojekts an der 
                  PrismaSchule, Langenfeld, erstellt wurde.
                </p>
                <p className="text-lg leading-relaxed">
                  Diese Website dient ausschließlich Bildungszwecken und wurde im Rahmen des Projektkurses 
                  "Reiseerfahrungen in Kunst und Literatur" der 12. Klasse entwickelt.
                </p>
                <p className="text-lg leading-relaxed">
                  Alle verwendeten Bilder stammen aus lizenzfreien Quellen und dienen der visuellen 
                  Unterstützung des Bildungsinhalts.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600">
                © 2024 Fabio Peuser - Schulprojekt Prismaschule Langenfeld
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Erstellt im Rahmen des Projektkurses "Reiseerfahrungen in Kunst und Literatur"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
