import type { 
  WhatsAppLocation, 
  SectionName, 
  ScrollDepth, 
  TimeOnPage,
  GTMEvent 
} from '@/types/analytics';

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: GTMEvent[];
  }
}

// Initialize dataLayer if not exists
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

/**
 * Push event to GTM dataLayer
 */
const pushToDataLayer = (event: GTMEvent) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(event);
    
    // Debug mode - log to console in development
    if (import.meta.env.DEV) {
      console.log('📊 GTM Event:', event);
    }
  }
};

/**
 * Track WhatsApp button clicks (PRIMARY CONVERSION)
 */
export const trackWhatsAppClick = (
  location: WhatsAppLocation,
  buttonText: string
) => {
  pushToDataLayer({
    event: 'whatsapp_click',
    event_category: 'conversion',
    event_label: location,
    button_text: buttonText,
    phone_number: '351912847526'
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percentage: ScrollDepth) => {
  pushToDataLayer({
    event: 'scroll_depth',
    event_category: 'engagement',
    percent_scrolled: percentage
  });
};

/**
 * Track time on page
 */
export const trackTimeOnPage = (seconds: TimeOnPage) => {
  pushToDataLayer({
    event: 'time_on_page',
    event_category: 'engagement',
    seconds: seconds
  });
};

/**
 * Track section view
 */
export const trackSectionView = (sectionName: SectionName) => {
  pushToDataLayer({
    event: 'view_section',
    event_category: 'engagement',
    section_name: sectionName
  });
};

/**
 * Track page view (called automatically by GTM, but can be used for SPA navigation)
 */
export const trackPageView = (pagePath: string, pageTitle: string) => {
  pushToDataLayer({
    event: 'page_view',
    page_path: pagePath,
    page_title: pageTitle
  });
};

/**
 * Get UTM parameters from URL
 */
export const getUTMParams = () => {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_term: params.get('utm_term') || undefined,
    utm_content: params.get('utm_content') || undefined,
  };
};

/**
 * Store UTM parameters in sessionStorage
 */
export const storeUTMParams = () => {
  if (typeof window === 'undefined') return;
  
  const utmParams = getUTMParams();
  const hasUTM = Object.values(utmParams).some(value => value !== undefined);
  
  if (hasUTM) {
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
  }
};

/**
 * Get stored UTM parameters
 */
export const getStoredUTMParams = () => {
  if (typeof window === 'undefined') return {};
  
  const stored = sessionStorage.getItem('utm_params');
  return stored ? JSON.parse(stored) : {};
};
