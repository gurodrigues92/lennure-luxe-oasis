import { useEffect, useRef } from 'react';
import { trackScrollDepth, trackTimeOnPage, trackSectionView } from '@/lib/analytics';
import type { SectionName, ScrollDepth, TimeOnPage } from '@/types/analytics';

interface UseAnalyticsOptions {
  enableScrollTracking?: boolean;
  enableTimeTracking?: boolean;
  enableSectionTracking?: boolean;
  sectionRefs?: Record<string, React.RefObject<HTMLElement>>;
}

export const useAnalytics = ({
  enableScrollTracking = true,
  enableTimeTracking = true,
  enableSectionTracking = true,
  sectionRefs = {}
}: UseAnalyticsOptions = {}) => {
  
  const scrollDepthTracked = useRef<Set<ScrollDepth>>(new Set());
  const timeTracked = useRef<Set<TimeOnPage>>(new Set());
  const sectionsTracked = useRef<Set<SectionName>>(new Set());

  // Scroll Depth Tracking
  useEffect(() => {
    if (!enableScrollTracking) return;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = ((scrollTop + windowHeight) / documentHeight) * 100;

      const depths: ScrollDepth[] = [25, 50, 75, 90];
      
      depths.forEach(depth => {
        if (scrollPercentage >= depth && !scrollDepthTracked.current.has(depth)) {
          scrollDepthTracked.current.add(depth);
          trackScrollDepth(depth);
        }
      });
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [enableScrollTracking]);

  // Time on Page Tracking
  useEffect(() => {
    if (!enableTimeTracking) return;

    const times: TimeOnPage[] = [30, 60, 120];
    const timers: NodeJS.Timeout[] = [];

    times.forEach(time => {
      const timer = setTimeout(() => {
        if (!timeTracked.current.has(time)) {
          timeTracked.current.add(time);
          trackTimeOnPage(time);
        }
      }, time * 1000);
      timers.push(timer);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [enableTimeTracking]);

  // Section View Tracking (Intersection Observer)
  useEffect(() => {
    if (!enableSectionTracking || Object.keys(sectionRefs).length === 0) return;

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.5, // 50% visible
      rootMargin: '0px'
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section') as SectionName;
          
          if (sectionName && !sectionsTracked.current.has(sectionName)) {
            // Wait 1 second before tracking to ensure real engagement
            setTimeout(() => {
              if (entry.isIntersecting && !sectionsTracked.current.has(sectionName)) {
                sectionsTracked.current.add(sectionName);
                trackSectionView(sectionName);
              }
            }, 1000);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section refs
    Object.entries(sectionRefs).forEach(([, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [enableSectionTracking, sectionRefs]);
};
