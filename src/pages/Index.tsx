import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Therapists from "@/components/Therapists";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import MapLocation from "@/components/MapLocation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Therapists />
      <Differentials />
      <Testimonials />
      <Philosophy />
      <Contact />
      <MapLocation />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
