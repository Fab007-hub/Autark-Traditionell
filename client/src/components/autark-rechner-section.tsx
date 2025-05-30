import { useState } from "react";
import { Calculator, Battery, Droplet, Home, Leaf, TrendingUp, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

interface AutarkieCalculation {
  score: number;
  category: string;
  suggestions: string[];
}

export default function AutarkRechnerSection() {
  const [energieversorgung, setEnergieversorgung] = useState(50);
  const [wassergewinnung, setWassergewinnung] = useState(30);
  const [waermedaemmung, setWaermedaemmung] = useState(60);
  const [bauweise, setBauweise] = useState("konventionell");
  const [heizung, setHeizung] = useState("gas");
  const [garten, setGarten] = useState(0);
  const [result, setResult] = useState<AutarkieCalculation | null>(null);

  const calculateAutarkie = () => {
    let score = 0;
    const suggestions: string[] = [];

    // Energieversorgung (40% der Gesamtbewertung)
    score += (energieversorgung / 100) * 40;
    if (energieversorgung < 50) {
      suggestions.push("Installieren Sie Solarpanels oder erweitern Sie Ihre bestehende Photovoltaikanlage");
    }
    if (energieversorgung < 80) {
      suggestions.push("Ergänzen Sie Ihr System um Batteriespeicher für höhere Energieunabhängigkeit");
    }

    // Wassergewinnung (25% der Gesamtbewertung)
    score += (wassergewinnung / 100) * 25;
    if (wassergewinnung < 40) {
      suggestions.push("Implementieren Sie Regenwassersammelsysteme mit Zisternen");
    }
    if (wassergewinnung < 70) {
      suggestions.push("Installieren Sie Grauwasser-Recycling-Systeme für Gartenbewässerung");
    }

    // Wärmedämmung (20% der Gesamtbewertung)
    score += (waermedaemmung / 100) * 20;
    if (waermedaemmung < 60) {
      suggestions.push("Verbessern Sie die Gebäudedämmung mit nachhaltigen Materialien wie Hanf oder Zellulose");
    }
    if (waermedaemmung < 80) {
      suggestions.push("Installieren Sie dreifach verglaste Fenster und dichten Sie Wärmebrücken ab");
    }

    // Bauweise (10% der Gesamtbewertung)
    let bauweisenScore = 0;
    switch (bauweise) {
      case "lehm":
        bauweisenScore = 90;
        break;
      case "holz":
        bauweisenScore = 80;
        break;
      case "stroh":
        bauweisenScore = 85;
        break;
      case "konventionell":
        bauweisenScore = 30;
        suggestions.push("Erwägen Sie nachhaltige Baumaterialien wie Lehm, Holz oder Strohballen");
        break;
    }
    score += (bauweisenScore / 100) * 10;

    // Heizung (Bonus/Malus)
    switch (heizung) {
      case "waermepumpe":
        score += 3;
        break;
      case "holz":
        score += 2;
        break;
      case "gas":
        score -= 2;
        suggestions.push("Wechseln Sie zu einer Wärmepumpe oder Holzpelletheizung");
        break;
      case "oel":
        score -= 4;
        suggestions.push("Ersetzen Sie die Ölheizung durch eine nachhaltige Alternative wie Wärmepumpe");
        break;
    }

    // Garten/Selbstversorgung (5% der Gesamtbewertung)
    score += (garten / 100) * 5;
    if (garten < 30) {
      suggestions.push("Bauen Sie einen Gemüsegarten oder Gewächshaus für teilweise Selbstversorgung auf");
    }
    if (garten < 60) {
      suggestions.push("Erweitern Sie Ihren Garten um Obstbäume und Permakultur-Systeme");
    }

    // Begrenzen auf 100%
    score = Math.min(score, 100);

    let category = "";
    if (score >= 80) {
      category = "Hochgradig autark";
    } else if (score >= 60) {
      category = "Gut autark";
    } else if (score >= 40) {
      category = "Teilweise autark";
    } else {
      category = "Wenig autark";
    }

    // Spezifische Verbesserungsvorschläge je nach Kategorie
    if (score >= 80) {
      suggestions.push("Optimieren Sie Ihr Energiemanagementsystem mit intelligenter Steuerung");
      suggestions.push("Erwägen Sie die Installation eines Biogas-Systems für organische Abfälle");
    }

    setResult({ score: Math.round(score), category, suggestions });
  };

  const resetCalculator = () => {
    setEnergieversorgung(50);
    setWassergewinnung(30);
    setWaermedaemmung(60);
    setBauweise("konventionell");
    setHeizung("gas");
    setGarten(0);
    setResult(null);
  };

  return (
    <section id="autark-rechner" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-900 mb-6">Autark-Rechner</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Berechnen Sie den Autarkiegrad Ihres Hauses und erhalten Sie individuelle Verbesserungsvorschläge 
            für mehr Unabhängigkeit und Nachhaltigkeit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Battery className="h-6 w-6 text-primary mr-2" />
                  Energieversorgung
                </CardTitle>
                <CardDescription>
                  Wie viel Prozent Ihres Strombedarfs können Sie selbst erzeugen?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Slider
                    value={[energieversorgung]}
                    onValueChange={(value) => setEnergieversorgung(value[0])}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="text-center text-lg font-semibold text-primary">
                    {energieversorgung}%
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Droplet className="h-6 w-6 text-primary mr-2" />
                  Wassergewinnung
                </CardTitle>
                <CardDescription>
                  Wie viel Prozent Ihres Wasserbedarfs können Sie selbst decken?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Slider
                    value={[wassergewinnung]}
                    onValueChange={(value) => setWassergewinnung(value[0])}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="text-center text-lg font-semibold text-primary">
                    {wassergewinnung}%
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="h-6 w-6 text-primary mr-2" />
                  Wärmedämmung
                </CardTitle>
                <CardDescription>
                  Wie gut ist Ihr Haus gedämmt? (Energieeffizienz)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Slider
                    value={[waermedaemmung]}
                    onValueChange={(value) => setWaermedaemmung(value[0])}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="text-center text-lg font-semibold text-primary">
                    {waermedaemmung}%
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bauweise</CardTitle>
                <CardDescription>
                  Welche Bauweise wurde hauptsächlich verwendet?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={bauweise} onValueChange={setBauweise}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="konventionell" id="konventionell" />
                    <Label htmlFor="konventionell">Konventionell (Beton/Ziegel)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="holz" id="holz" />
                    <Label htmlFor="holz">Holzbauweise</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="lehm" id="lehm" />
                    <Label htmlFor="lehm">Lehmbauweise</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="stroh" id="stroh" />
                    <Label htmlFor="stroh">Strohballenbauweise</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Heizsystem</CardTitle>
                <CardDescription>
                  Welches Heizsystem verwenden Sie hauptsächlich?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={heizung} onValueChange={setHeizung}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="gas" id="gas" />
                    <Label htmlFor="gas">Gasheizung</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="oel" id="oel" />
                    <Label htmlFor="oel">Ölheizung</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="waermepumpe" id="waermepumpe" />
                    <Label htmlFor="waermepumpe">Wärmepumpe</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="holz" id="holz" />
                    <Label htmlFor="holz">Holz/Pellets</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-6 w-6 text-primary mr-2" />
                  Selbstversorgung (Garten)
                </CardTitle>
                <CardDescription>
                  Wie viel Prozent Ihrer Nahrung können Sie selbst anbauen?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Slider
                    value={[garten]}
                    onValueChange={(value) => setGarten(value[0])}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="text-center text-lg font-semibold text-primary">
                    {garten}%
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={calculateAutarkie}
                className="flex-1 bg-primary hover:bg-primary-light text-white"
                size="lg"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Autarkiegrad berechnen
              </Button>
              <Button
                onClick={resetCalculator}
                variant="outline"
                className="flex-1"
                size="lg"
              >
                Zurücksetzen
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:sticky lg:top-8">
            {result ? (
              <div className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Ihr Autarkiegrad</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <div className="relative">
                      <div className="text-6xl font-bold text-primary mb-2">
                        {result.score}%
                      </div>
                      <div className="text-xl text-gray-600 font-medium">
                        {result.category}
                      </div>
                    </div>
                    <Progress value={result.score} className="h-4" />
                    <div className="flex items-center justify-center">
                      {result.score >= 70 ? (
                        <CheckCircle className="h-8 w-8 text-green-500 mr-2" />
                      ) : (
                        <TrendingUp className="h-8 w-8 text-orange-500 mr-2" />
                      )}
                      <span className="text-lg font-medium">
                        {result.score >= 70 ? "Sehr gut!" : "Verbesserungspotential vorhanden"}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertCircle className="h-6 w-6 text-accent mr-2" />
                      Verbesserungsvorschläge
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {result.suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start">
                          <TrendingUp className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed">{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="h-96 flex items-center justify-center">
                <CardContent className="text-center">
                  <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">
                    Füllen Sie die Angaben aus und klicken Sie auf "Berechnen", 
                    um Ihren Autarkiegrad zu ermitteln.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}