export type WhatsAppLocation = 
  | 'hero_cta' 
  | 'floating_button' 
  | 'contact_section' 
  | 'map_section';

export type SectionName = 
  | 'about_section'
  | 'services_section'
  | 'therapists_section'
  | 'differentials_section'
  | 'testimonials_section'
  | 'philosophy_section'
  | 'contact_section'
  | 'map_section';

export type ScrollDepth = 25 | 50 | 75 | 90;

export type TimeOnPage = 30 | 60 | 120;

// GTM DataLayer types
export interface GTMEvent {
  event: string;
  [key: string]: any;
}

export interface WhatsAppClickEvent extends GTMEvent {
  event: 'whatsapp_click';
  event_category: 'conversion';
  event_label: WhatsAppLocation;
  button_text: string;
  phone_number: string;
}

export interface ScrollEvent extends GTMEvent {
  event: 'scroll_depth';
  event_category: 'engagement';
  percent_scrolled: ScrollDepth;
}

export interface TimeEvent extends GTMEvent {
  event: 'time_on_page';
  event_category: 'engagement';
  seconds: TimeOnPage;
}

export interface SectionViewEvent extends GTMEvent {
  event: 'view_section';
  event_category: 'engagement';
  section_name: SectionName;
}
