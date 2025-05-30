import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import WasIstDasSection from "@/components/was-ist-das-section";
import IndigeneBauweisenSection from "@/components/indigene-bauweisen-section";
import UeberMichSection from "@/components/ueber-mich-section";
import ImpressumSection from "@/components/impressum-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-earth-50">
      <Navigation />
      <HeroSection />
      <WasIstDasSection />
      <IndigeneBauweisenSection />
      <UeberMichSection />
      <ImpressumSection />
      <Footer />
    </div>
  );
}
