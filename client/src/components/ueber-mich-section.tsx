import { User, School, GraduationCap, Lightbulb, Book, Globe } from "lucide-react";

export default function UeberMichSection() {
  return (
    <section id="ueber-mich" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-900 mb-6">Über Mich</h2>
        </div>
        
        <div className="bg-earth-100 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                <User className="h-16 w-16 text-white" />
              </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold text-earth-900 mb-4">Fabio Peuser</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ich bin ein Schüler der Prismaschule Langenfeld und arbeite an einem Projekt für meinen 
                Projektkurs in der 12. Klasse zum Oberthema „Reiseerfahrungen in Kunst und Literatur".
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Diese Website ist das Ergebnis meiner Forschung über die faszinierende Verbindung zwischen 
                traditionellen indigenen Bautechniken und modernen nachhaltigen Hauskonzepten. Das Projekt 
                zeigt, wie uraltes Wissen und zeitgemäße Technologie gemeinsam innovative Lösungen für 
                autarkes Wohnen schaffen können.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <div className="flex items-center">
                  <School className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">Prismaschule Langenfeld</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">12. Klasse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-primary/10 rounded-xl">
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">Projektfokus</h4>
            <p className="text-gray-700">Nachhaltiges Bauen mit traditionellen Techniken</p>
          </div>
          <div className="text-center p-6 bg-secondary/10 rounded-xl">
            <Book className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">Themenbereich</h4>
            <p className="text-gray-700">Reiseerfahrungen in Kunst und Literatur</p>
          </div>
          <div className="text-center p-6 bg-accent/10 rounded-xl">
            <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">Inspiration</h4>
            <p className="text-gray-700">Indigene Bauweisen weltweit</p>
          </div>
        </div>
      </div>
    </section>
  );
}
