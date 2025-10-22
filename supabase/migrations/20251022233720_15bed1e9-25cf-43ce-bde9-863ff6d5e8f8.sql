-- Seed inicial: popular site_content com textos atuais do site
-- Seção: Hero
INSERT INTO site_content (section, field_key, field_value, language, field_type) VALUES
('hero', 'title', 'Bem-estar e experiência sensorial', 'pt', 'text'),
('hero', 'title', 'Wellness and sensory experience', 'en', 'text'),
('hero', 'subtitle', 'no coração de Lisboa', 'pt', 'text'),
('hero', 'subtitle', 'in the heart of Lisbon', 'en', 'text'),
('hero', 'description', 'Gabinetes privativos, atendimento personalizado e ambiente silencioso — um refúgio de equilíbrio e conforto onde cada detalhe é pensado para si.', 'pt', 'text'),
('hero', 'description', 'Private rooms, personalized service and silent environment — a refuge of balance and comfort where every detail is designed for you.', 'en', 'text'),
('hero', 'cta', 'Marcar Sessão Agora', 'pt', 'text'),
('hero', 'cta', 'Book Session Now', 'en', 'text');

-- Seção: About
INSERT INTO site_content (section, field_key, field_value, language, field_type) VALUES
('about', 'title', 'Um refúgio de bem-estar no centro de Lisboa', 'pt', 'text'),
('about', 'title', 'A wellness refuge in the center of Lisbon', 'en', 'text'),
('about', 'description', 'Instalações modernas e climatizadas, com duas casas de banho privativas e duche. Ambiente preparado para garantir privacidade, higiene rigorosa e um atendimento exclusivo, onde pode relaxar em total tranquilidade.', 'pt', 'textarea'),
('about', 'description', 'Modern and air-conditioned facilities with two private bathrooms and shower. Environment prepared to ensure privacy, rigorous hygiene and exclusive service, where you can relax in total tranquility.', 'en', 'textarea'),
('about', 'privacy', 'Privacidade Total', 'pt', 'text'),
('about', 'privacy', 'Total Privacy', 'en', 'text'),
('about', 'hygiene', 'Higiene Rigorosa', 'pt', 'text'),
('about', 'hygiene', 'Rigorous Hygiene', 'en', 'text'),
('about', 'exclusive', 'Atendimento Exclusivo', 'pt', 'text'),
('about', 'exclusive', 'Exclusive Service', 'en', 'text');

-- Seção: Services
INSERT INTO site_content (section, field_key, field_value, language, field_type) VALUES
('services', 'title', 'Serviços Oferecidos', 'pt', 'text'),
('services', 'title', 'Services Offered', 'en', 'text'),
('services', 'subtitle', 'Uma seleção de terapias pensadas para o seu bem-estar', 'pt', 'text'),
('services', 'subtitle', 'A selection of therapies designed for your well-being', 'en', 'text'),
('services', 'massage', 'Massagens Terapêuticas', 'pt', 'text'),
('services', 'massage', 'Therapeutic Massages', 'en', 'text'),
('services', 'massage_desc', 'Técnicas especializadas para alívio de tensões e equilíbrio corporal.', 'pt', 'textarea'),
('services', 'massage_desc', 'Specialized techniques for tension relief and body balance.', 'en', 'textarea'),
('services', 'relaxation', 'Experiências de Relaxamento', 'pt', 'text'),
('services', 'relaxation', 'Relaxation Experiences', 'en', 'text'),
('services', 'relaxation_desc', 'Momentos dedicados ao descanso profundo e renovação energética.', 'pt', 'textarea'),
('services', 'relaxation_desc', 'Moments dedicated to deep rest and energy renewal.', 'en', 'textarea'),
('services', 'personalized', 'Atendimento Personalizado', 'pt', 'text'),
('services', 'personalized', 'Personalized Service', 'en', 'text'),
('services', 'personalized_desc', 'Cada sessão é adaptada às suas necessidades individuais.', 'pt', 'textarea'),
('services', 'personalized_desc', 'Each session is adapted to your individual needs.', 'en', 'textarea'),
('services', 'cta', 'Ver Mais Serviços Oferecidos', 'pt', 'text'),
('services', 'cta', 'View More Services Offered', 'en', 'text');

-- Seção: Space
INSERT INTO site_content (section, field_key, field_value, language, field_type) VALUES
('space', 'title', 'Conheça os Nossos Espaços', 'pt', 'text'),
('space', 'title', 'Discover Our Spaces', 'en', 'text'),
('space', 'subtitle', 'Ambientes pensados para o seu conforto e privacidade', 'pt', 'text'),
('space', 'subtitle', 'Environments designed for your comfort and privacy', 'en', 'text'),
('space', 'cabinet', 'Gabinete de Atendimento', 'pt', 'text'),
('space', 'cabinet', 'Treatment Room', 'en', 'text'),
('space', 'cabinet_desc', 'Espaço privativo e confortável para as suas sessões.', 'pt', 'text'),
('space', 'cabinet_desc', 'Private and comfortable space for your sessions.', 'en', 'text'),
('space', 'bathroom', 'Casa de Banho', 'pt', 'text'),
('space', 'bathroom', 'Bathroom', 'en', 'text'),
('space', 'bathroom_desc', 'Instalações modernas com duche para o seu conforto.', 'pt', 'text'),
('space', 'bathroom_desc', 'Modern facilities with shower for your comfort.', 'en', 'text'),
('space', 'reception', 'Receção', 'pt', 'text'),
('space', 'reception', 'Reception', 'en', 'text'),
('space', 'reception_desc', 'Ambiente acolhedor para recebê-lo.', 'pt', 'text'),
('space', 'reception_desc', 'Welcoming environment to receive you.', 'en', 'text'),
('space', 'waiting', 'Sala de Espera', 'pt', 'text'),
('space', 'waiting', 'Waiting Room', 'en', 'text'),
('space', 'waiting_desc', 'Espaço tranquilo onde pode relaxar antes da sessão.', 'pt', 'text'),
('space', 'waiting_desc', 'Quiet space where you can relax before your session.', 'en', 'text'),
('space', 'cta', 'Agendar Visita', 'pt', 'text'),
('space', 'cta', 'Schedule Visit', 'en', 'text');

-- Seção: Differentials
INSERT INTO site_content (section, field_key, field_value, language, field_type) VALUES
('differentials', 'title', 'Diferenciais do Spa', 'pt', 'text'),
('differentials', 'title', 'Spa Differentials', 'en', 'text'),
('differentials', 'subtitle', 'O que torna a sua experiência única connosco', 'pt', 'text'),
('differentials', 'subtitle', 'What makes your experience unique with us', 'en', 'text'),
('differentials', 'privacy', 'Privacidade e Discrição', 'pt', 'text'),
('differentials', 'privacy', 'Privacy and Discretion', 'en', 'text'),
('differentials', 'privacy_desc', 'Gabinetes privativos que garantem total confidencialidade.', 'pt', 'text'),
('differentials', 'privacy_desc', 'Private rooms that guarantee total confidentiality.', 'en', 'text'),
('differentials', 'hygiene', 'Higiene Rigorosa', 'pt', 'text'),
('differentials', 'hygiene', 'Rigorous Hygiene', 'en', 'text'),
('differentials', 'hygiene_desc', 'Protocolos de limpeza e desinfeção em cada atendimento.', 'pt', 'text'),
('differentials', 'hygiene_desc', 'Cleaning and disinfection protocols at each service.', 'en', 'text'),
('differentials', 'comfort', 'Conforto e Bem-estar', 'pt', 'text'),
('differentials', 'comfort', 'Comfort and Wellness', 'en', 'text'),
('differentials', 'comfort_desc', 'Ambiente climatizado e silencioso para relaxamento profundo.', 'pt', 'text'),
('differentials', 'comfort_desc', 'Air-conditioned and silent environment for deep relaxation.', 'en', 'text'),
('differentials', 'professionalism', 'Profissionalismo', 'pt', 'text'),
('differentials', 'professionalism', 'Professionalism', 'en', 'text'),
('differentials', 'professionalism_desc', 'Equipa qualificada e experiente ao seu serviço.', 'pt', 'text'),
('differentials', 'professionalism_desc', 'Qualified and experienced team at your service.', 'en', 'text'),
('differentials', 'personalization', 'Personalização', 'pt', 'text'),
('differentials', 'personalization', 'Personalization', 'en', 'text'),
('differentials', 'personalization_desc', 'Cada sessão adaptada às suas necessidades específicas.', 'pt', 'text'),
('differentials', 'personalization_desc', 'Each session adapted to your specific needs.', 'en', 'text'),
('differentials', 'location', 'Localização Central', 'pt', 'text'),
('differentials', 'location', 'Central Location', 'en', 'text'),
('differentials', 'location_desc', 'No coração de Lisboa, com fácil acesso.', 'pt', 'text'),
('differentials', 'location_desc', 'In the heart of Lisbon, with easy access.', 'en', 'text'),
('differentials', 'female', 'Terapeutas Femininas', 'pt', 'text'),
('differentials', 'female', 'Female Therapists', 'en', 'text'),
('differentials', 'male', 'Terapeutas Masculinos', 'pt', 'text'),
('differentials', 'male', 'Male Therapists', 'en', 'text');

-- Seção: Testimonials
INSERT INTO site_content (section, field_key, field_value, language, field_type) VALUES
('testimonials', 'title', 'O Que Dizem os Nossos Clientes', 'pt', 'text'),
('testimonials', 'title', 'What Our Clients Say', 'en', 'text'),
('testimonials', 'subtitle', 'Experiências de quem já nos visitou', 'pt', 'text'),
('testimonials', 'subtitle', 'Experiences from those who have already visited us', 'en', 'text'),
('testimonials', 'cta', 'Ver Mais Avaliações no Google', 'pt', 'text'),
('testimonials', 'cta', 'View More Reviews on Google', 'en', 'text');

-- Seção: Philosophy
INSERT INTO site_content (section, field_key, field_value, language, field_type) VALUES
('philosophy', 'quote', 'Cada sessão é um convite a pausa, a escuta do corpo e ao reencontro com o essencial.', 'pt', 'textarea'),
('philosophy', 'quote', 'Each session is an invitation to pause, to listen to the body and to reconnect with the essential.', 'en', 'textarea'),
('philosophy', 'description', 'No Lennure Lux Spa, bem-estar não é apenas uma promessa — é uma prática cultivada com atenção, rigor e sensibilidade. Cada tratamento é desenhado para honrar o equilíbrio entre corpo e mente, respeitando a individualidade de quem nos procura.', 'pt', 'textarea'),
('philosophy', 'description', 'At Lennure Lux Spa, wellness is not just a promise — it is a practice cultivated with attention, rigor and sensitivity. Each treatment is designed to honor the balance between body and mind, respecting the individuality of those who seek us.', 'en', 'textarea'),
('philosophy', 'value_presence', 'Presença', 'pt', 'text'),
('philosophy', 'value_presence', 'Presence', 'en', 'text'),
('philosophy', 'value_respect', 'Respeito', 'pt', 'text'),
('philosophy', 'value_respect', 'Respect', 'en', 'text'),
('philosophy', 'value_privacy', 'Privacidade', 'pt', 'text'),
('philosophy', 'value_privacy', 'Privacy', 'en', 'text'),
('philosophy', 'value_quality', 'Qualidade', 'pt', 'text'),
('philosophy', 'value_quality', 'Quality', 'en', 'text'),
('philosophy', 'value_personalization', 'Personalização', 'pt', 'text'),
('philosophy', 'value_personalization', 'Personalization', 'en', 'text'),
('philosophy', 'value_elegance', 'Elegância', 'pt', 'text'),
('philosophy', 'value_elegance', 'Elegance', 'en', 'text');

-- Seção: Contact
INSERT INTO site_content (section, field_key, field_value, language, field_type) VALUES
('contact', 'title', 'Contactos e Horários', 'pt', 'text'),
('contact', 'title', 'Contact and Hours', 'en', 'text'),
('contact', 'location', 'Localização', 'pt', 'text'),
('contact', 'location', 'Location', 'en', 'text'),
('contact', 'location_value', 'Avenida 5 de Outubro, nº 68 — Sala 5G, Centro de Lisboa', 'pt', 'text'),
('contact', 'location_value', 'Avenida 5 de Outubro, nº 68 — Room 5G, Lisbon Center', 'en', 'text'),
('contact', 'phone', 'Telefone', 'pt', 'text'),
('contact', 'phone', 'Phone', 'en', 'text'),
('contact', 'phone_value', '+351 912 847 526', 'pt', 'text'),
('contact', 'phone_value', '+351 912 847 526', 'en', 'text'),
('contact', 'email', 'E-mail', 'pt', 'text'),
('contact', 'email', 'E-mail', 'en', 'text'),
('contact', 'email_value', 'lennureluxspa@icloud.com', 'pt', 'text'),
('contact', 'email_value', 'lennureluxspa@icloud.com', 'en', 'text'),
('contact', 'hours', 'Horário de Funcionamento', 'pt', 'text'),
('contact', 'hours', 'Opening Hours', 'en', 'text'),
('contact', 'payment', 'Formas de Pagamento', 'pt', 'text'),
('contact', 'payment', 'Payment Methods', 'en', 'text'),
('contact', 'payment_value', 'Dinheiro, MBWay, Transferência Bancária', 'pt', 'text'),
('contact', 'payment_value', 'Cash, MBWay, Bank Transfer', 'en', 'text'),
('contact', 'days_weekdays', 'Segunda a Sexta', 'pt', 'text'),
('contact', 'days_weekdays', 'Monday to Friday', 'en', 'text'),
('contact', 'days_saturday', 'Sábado', 'pt', 'text'),
('contact', 'days_saturday', 'Saturday', 'en', 'text'),
('contact', 'days_sunday', 'Domingo', 'pt', 'text'),
('contact', 'days_sunday', 'Sunday', 'en', 'text'),
('contact', 'schedule_weekdays', '10h - 22h', 'pt', 'text'),
('contact', 'schedule_weekdays', '10am - 10pm', 'en', 'text'),
('contact', 'schedule_saturday', '12h - 22h', 'pt', 'text'),
('contact', 'schedule_saturday', '12pm - 10pm', 'en', 'text'),
('contact', 'schedule_sunday', '13h - 21h', 'pt', 'text'),
('contact', 'schedule_sunday', '1pm - 9pm', 'en', 'text'),
('contact', 'cta', 'Falar no WhatsApp', 'pt', 'text'),
('contact', 'cta', 'Chat on WhatsApp', 'en', 'text'),
('contact', 'call_now', 'Ligar Agora', 'pt', 'text'),
('contact', 'call_now', 'Call Now', 'en', 'text');

-- Seção: Footer
INSERT INTO site_content (section, field_key, field_value, language, field_type) VALUES
('footer', 'title', 'Informações', 'pt', 'text'),
('footer', 'title', 'Information', 'en', 'text'),
('footer', 'description', 'Spa de bem-estar no coração de Lisboa', 'pt', 'text'),
('footer', 'description', 'Wellness spa in the heart of Lisbon', 'en', 'text'),
('footer', 'links', 'Links Úteis', 'pt', 'text'),
('footer', 'links', 'Useful Links', 'en', 'text'),
('footer', 'privacy', 'Política de Privacidade', 'pt', 'text'),
('footer', 'privacy', 'Privacy Policy', 'en', 'text'),
('footer', 'terms', 'Termos de Uso', 'pt', 'text'),
('footer', 'terms', 'Terms of Use', 'en', 'text'),
('footer', 'cancellation', 'Política de Cancelamento', 'pt', 'text'),
('footer', 'cancellation', 'Cancellation Policy', 'en', 'text'),
('footer', 'institutional', 'Informação Institucional', 'pt', 'text'),
('footer', 'institutional', 'Institutional Information', 'en', 'text'),
('footer', 'institutional_text', 'O acesso aos nossos serviços está condicionado ao cumprimento rigoroso dos nossos princípios de respeito, privacidade e profissionalismo. Não são toleradas condutas desrespeitosas ou inadequadas. O Lennure Lux Spa reserva-se o direito de recusar serviço a qualquer pessoa que não cumpra estes valores. Aceitamos pagamento em dinheiro, MBWay e transferência bancária.', 'pt', 'textarea'),
('footer', 'institutional_text', 'Access to our services is conditioned on strict compliance with our principles of respect, privacy and professionalism. Disrespectful or inappropriate conduct is not tolerated. Lennure Lux Spa reserves the right to refuse service to anyone who does not comply with these values. We accept payment in cash, MBWay and bank transfer.', 'en', 'textarea'),
('footer', 'copyright', 'Todos os direitos reservados.', 'pt', 'text'),
('footer', 'copyright', 'All rights reserved.', 'en', 'text');

-- Seção: WhatsApp
INSERT INTO site_content (section, field_key, field_value, language, field_type) VALUES
('whatsapp', 'label', 'Falar no WhatsApp', 'pt', 'text'),
('whatsapp', 'label', 'Chat on WhatsApp', 'en', 'text'),
('whatsapp', 'message', 'Olá! Vim através do site e gostaria de agendar uma sessão.', 'pt', 'text'),
('whatsapp', 'message', 'Hello! I came through the website and would like to schedule a session.', 'en', 'text');