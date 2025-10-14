import { useRef, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Space from "@/components/Space";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import MapLocation from "@/components/MapLocation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PromoDialog from "@/components/PromoDialog";
import LanguageSelector from "@/components/LanguageSelector";
import { useAnalytics } from "@/hooks/useAnalytics";
import { storeUTMParams } from "@/lib/analytics";

const Index = () => {
  // Create refs for section tracking
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const spaceRef = useRef<HTMLDivElement>(null);
  const differentialsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Store UTM parameters on mount
  useEffect(() => {
    storeUTMParams();
  }, []);

  // Initialize analytics tracking
  useAnalytics({
    enableScrollTracking: true,
    enableTimeTracking: true,
    enableSectionTracking: true,
    sectionRefs: {
      about: aboutRef,
      services: servicesRef,
      space: spaceRef,
      differentials: differentialsRef,
      testimonials: testimonialsRef,
      philosophy: philosophyRef,
      contact: contactRef,
      map: mapRef,
    }
  });

  return (
    <div className="min-h-screen">
      <LanguageSelector />
      <Hero />
      <div ref={aboutRef} data-section="about_section">
        <About />
      </div>
      <div ref={servicesRef} data-section="services_section">
        <Services />
      </div>
      <div ref={spaceRef} data-section="space_section">
        <Space />
      </div>
      <div ref={differentialsRef} data-section="differentials_section">
        <Differentials />
      </div>
      <div ref={testimonialsRef} data-section="testimonials_section">
        <Testimonials />
      </div>
      <div ref={philosophyRef} data-section="philosophy_section">
        <Philosophy />
      </div>
      <div ref={contactRef} data-section="contact_section">
        <Contact />
      </div>
      <div ref={mapRef} data-section="map_section">
        <MapLocation />
      </div>
      <Footer />
      <PromoDialog />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
