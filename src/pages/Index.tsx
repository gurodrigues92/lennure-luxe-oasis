import { useRef, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoTour from "@/components/VideoTour";
import Services from "@/components/Services";
import Space from "@/components/Space";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import MapLocation from "@/components/MapLocation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PromoDialog from "@/components/PromoDialog";
import LanguageSelector from "@/components/LanguageSelector";
import { useAnalytics } from "@/hooks/useAnalytics";
import { storeUTMParams } from "@/lib/analytics";
import { useLayout } from "@/hooks/useLayout";

const Index = () => {
  const { sections, loading } = useLayout();
  
  // Create refs for section tracking
  const aboutRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
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
      video: videoRef,
      services: servicesRef,
      space: spaceRef,
      differentials: differentialsRef,
      testimonials: testimonialsRef,
      philosophy: philosophyRef,
      contact: contactRef,
      map: mapRef,
    }
  });

  // Section component mapping
  const sectionComponents: Record<string, { component: JSX.Element; ref: React.RefObject<HTMLDivElement> }> = {
    hero: { component: <Hero />, ref: { current: null } },
    about: { component: <About />, ref: aboutRef },
    video: { component: <VideoTour />, ref: videoRef },
    services: { component: <Services />, ref: servicesRef },
    differentials: { component: <Differentials />, ref: differentialsRef },
    space: { component: <Space />, ref: spaceRef },
    testimonials: { component: <Testimonials />, ref: testimonialsRef },
    philosophy: { component: <Philosophy />, ref: philosophyRef },
    contact: { component: <Contact />, ref: contactRef },
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>;
  }

  return (
    <div className="min-h-screen">
      <LanguageSelector />
      
      {sections.map((sectionKey) => {
        const section = sectionComponents[sectionKey];
        if (!section) return null;

        // Hero doesn't need a wrapper with ref
        if (sectionKey === 'hero') {
          return <div key={sectionKey} data-section="hero">{section.component}</div>;
        }

        return (
          <div key={sectionKey} ref={section.ref} data-section={`${sectionKey}_section`} id={sectionKey}>
            {section.component}
          </div>
        );
      })}

      <div ref={mapRef} data-section="map_section" id="map">
        <MapLocation />
      </div>
      
      <Footer />
      <PromoDialog />
      <FloatingContact />
    </div>
  );
};

export default Index;
