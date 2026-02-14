import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Language = "en" | "pt" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.treatments": "Treatments",
    "nav.prices": "Prices",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.bookNow": "Book Now",

    // Hero
    "hero.location": "Birmingham, United Kingdom",
    "hero.title": "Transforming beauty and boosting",
    "hero.titleAccent": "confidence!",
    "hero.subtitle": "Advanced Brazilian aesthetics with exceptional results, personalised care and total client satisfaction.",
    "hero.bookNow": "Book Now",
    "hero.whatsapp": "WhatsApp Consultation",
    "hero.scroll": "Scroll to explore",

    // Why Choose
    "why.tag": "Your journey",
    "why.title": "Why Choose",
    "why.titleAccent": "Tatiana?",
    "why.professionalism": "Professionalism",
    "why.professionalismDesc": "Level 7 qualified practitioner with over 25 years of experience in the beauty industry.",
    "why.innovation": "Innovation",
    "why.innovationDesc": "Brazilian techniques combined with the latest advanced aesthetic procedures and technology.",
    "why.care": "Care",
    "why.careDesc": "Every treatment is tailored to your unique features with total dedication to your well-being.",
    "why.results": "Results",
    "why.resultsDesc": "Exceptional outcomes that transform self-esteem and boost confidence — naturally.",

    // About
    "about.tag": "Founder & Aesthetic Practitioner",
    "about.title": "About",
    "about.titleAccent": "Tatiana",
    "about.p1": "With over 25 years of experience in the beauty industry, Tatiana began her journey in Brazil within a family of hairdressers. At 15, she completed her first professional course and managed a salon for nearly a decade.",
    "about.p2": "She graduated in Industrial Chemistry Technology and Quality Management. In 2016, she moved to England, specialising in design and micropigmentation.",
    "about.p3": "In 2020, she co-founded the first Brazilian salon in Birmingham and in 2023, opened her own clinic. She holds a Level 7 postgraduate qualification in advanced aesthetics and injectable procedures.",
    "about.years": "Years Experience",
    "about.qualification": "Qualification",
    "about.dedication": "Dedication",

    // Treatments
    "treatments.tag": "Our expertise",
    "treatments.title": "Featured",
    "treatments.titleAccent": "Treatments",
    "treatments.subtitle": "Each treatment is performed with precision, care and an artistic eye for natural beauty.",
    "treatments.bookThis": "Book This Treatment",
    "treatments.facial": "Facial Aesthetics & Injectables",
    "treatments.facialDesc": "Anti-wrinkle injections, Profhilo, mesotherapy, lip fillers and skin boosters for a refreshed, youthful appearance.",
    "treatments.skin": "Skin Treatments",
    "treatments.skinDesc": "Chemical peels, microneedling and deep cleansing facials for radiant, clear and rejuvenated skin.",
    "treatments.micropig": "Micropigmentation & PMU",
    "treatments.micropigDesc": "Expert microblading, lip blush, eyeliner and brow techniques for beautifully defined, long-lasting results.",
    "treatments.body": "Body Treatments",
    "treatments.bodyDesc": "Body contouring, lymphatic drainage massage and cellulite treatments for a sculpted, smooth silhouette.",
    "treatments.laser": "Laser Hair Removal",
    "treatments.laserDesc": "Advanced laser technology for permanent hair reduction on all skin types, with comfortable and effective sessions.",
    "treatments.brows": "Brows, Lashes & Waxing",
    "treatments.browsDesc": "Brow shaping, lash lifts, tinting and full-body waxing for a polished, effortless look.",
    "treatments.tanning": "Brazilian Tanning",
    "treatments.tanningDesc": "Flawless, natural-looking Brazilian spray tan for a sun-kissed glow all year round.",

    // Before & After
    "ba.tag": "Real results",
    "ba.title": "Before &",
    "ba.titleAccent": "After",
    "ba.subtitle": "Drag the slider to see the transformation. Results may vary per individual.",
    "ba.before": "Before",
    "ba.after": "After",
    "ba.disclaimer": "* Individual results may vary. All images show real client results with consent.",
    "ba.lipFillers": "Lip Fillers Enhancement",
    "ba.antiWrinkle": "Anti-Wrinkle Treatment",
    "ba.skinRejuv": "Skin Rejuvenation",

    // Pricing
    "pricing.tag": "Transparent pricing",
    "pricing.title": "Our",
    "pricing.titleAccent": "Prices",
    "pricing.subtitle": "Quality treatments at fair prices. Book a free consultation to discuss your personalised plan.",

    // Testimonials
    "testimonials.tag": "Client love",
    "testimonials.title": "What Our Clients",
    "testimonials.titleAccent": "Say",
    "testimonials.google": "5.0 on Google",
    "testimonials.seeAll": "See all reviews on Google",

    // Booking
    "booking.tag": "Ready to begin?",
    "booking.title": "Book Your",
    "booking.titleAccent": "Consultation",
    "booking.subtitle": "Take the first step towards enhancing your natural beauty. Book a personalised consultation with Tatiana today — online or via WhatsApp.",
    "booking.whatsapp": "WhatsApp Consultation",
    "booking.bookOnline": "Book Online",
    "booking.note": "Free initial consultation · No obligation · Discreet & confidential",

    // Contact
    "contact.tag": "Visit us",
    "contact.title": "Contact &",
    "contact.titleAccent": "Location",
    "contact.address": "Address",
    "contact.hours": "Opening Hours",
    "contact.getInTouch": "Get in Touch",
    "contact.monFri": "Monday – Friday: 9:00 – 18:00",
    "contact.sat": "Saturday: 10:00 – 16:00",
    "contact.sun": "Sunday: Closed",

    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.cookies": "Cookie Policy",
    "footer.terms": "Terms & Conditions",
    "footer.rights": "All rights reserved.",
  },

  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.treatments": "Tratamentos",
    "nav.prices": "Preços",
    "nav.testimonials": "Depoimentos",
    "nav.contact": "Contato",
    "nav.bookNow": "Agendar",

    "hero.location": "Birmingham, Reino Unido",
    "hero.title": "Transformando a beleza e elevando a",
    "hero.titleAccent": "confiança!",
    "hero.subtitle": "Estética brasileira avançada com resultados excepcionais, cuidado personalizado e total satisfação.",
    "hero.bookNow": "Agendar Agora",
    "hero.whatsapp": "Consulta via WhatsApp",
    "hero.scroll": "Deslize para explorar",

    "why.tag": "Sua jornada",
    "why.title": "Por que escolher a",
    "why.titleAccent": "Tatiana?",
    "why.professionalism": "Profissionalismo",
    "why.professionalismDesc": "Profissional qualificada Nível 7 com mais de 25 anos de experiência na indústria da beleza.",
    "why.innovation": "Inovação",
    "why.innovationDesc": "Técnicas brasileiras combinadas com os mais avançados procedimentos estéticos e tecnologia.",
    "why.care": "Cuidado",
    "why.careDesc": "Cada tratamento é personalizado para suas características únicas com total dedicação ao seu bem-estar.",
    "why.results": "Resultados",
    "why.resultsDesc": "Resultados excepcionais que transformam a autoestima e elevam a confiança — naturalmente.",

    "about.tag": "Fundadora & Esteticista",
    "about.title": "Sobre a",
    "about.titleAccent": "Tatiana",
    "about.p1": "Com mais de 25 anos de experiência na indústria da beleza, Tatiana iniciou sua jornada no Brasil em uma família de cabeleireiros. Aos 15 anos, concluiu seu primeiro curso profissional e gerenciou um salão por quase uma década.",
    "about.p2": "Ela se formou em Tecnologia em Química Industrial e Gestão da Qualidade. Em 2016, mudou-se para a Inglaterra, especializando-se em design e micropigmentação.",
    "about.p3": "Em 2020, cofundou o primeiro salão brasileiro em Birmingham e em 2023, abriu sua própria clínica. Possui qualificação de pós-graduação Nível 7 em estética avançada e procedimentos injetáveis.",
    "about.years": "Anos de Experiência",
    "about.qualification": "Qualificação",
    "about.dedication": "Dedicação",

    "treatments.tag": "Nossa expertise",
    "treatments.title": "Tratamentos",
    "treatments.titleAccent": "Destaque",
    "treatments.subtitle": "Cada tratamento é realizado com precisão, cuidado e um olhar artístico para a beleza natural.",
    "treatments.bookThis": "Agendar Tratamento",
    "treatments.facial": "Estética Facial & Injetáveis",
    "treatments.facialDesc": "Toxina botulínica, Profhilo, mesoterapia, preenchimento labial e bioestimuladores para uma aparência rejuvenescida.",
    "treatments.skin": "Tratamentos de Pele",
    "treatments.skinDesc": "Peelings químicos, microagulhamento e limpeza de pele profunda para uma pele radiante e rejuvenescida.",
    "treatments.micropig": "Micropigmentação & PMU",
    "treatments.micropigDesc": "Microblading, lip blush, delineador e técnicas de sobrancelhas para resultados definidos e duradouros.",
    "treatments.body": "Tratamentos Corporais",
    "treatments.bodyDesc": "Modelagem corporal, drenagem linfática e tratamentos para celulite para uma silhueta esculpida.",
    "treatments.laser": "Depilação a Laser",
    "treatments.laserDesc": "Tecnologia laser avançada para redução permanente de pelos em todos os tipos de pele.",
    "treatments.brows": "Sobrancelhas, Cílios & Depilação",
    "treatments.browsDesc": "Design de sobrancelhas, lifting de cílios, coloração e depilação completa para um visual impecável.",
    "treatments.tanning": "Bronzeamento Brasileiro",
    "treatments.tanningDesc": "Bronzeamento natural e impecável para um brilho dourado durante todo o ano.",

    "ba.tag": "Resultados reais",
    "ba.title": "Antes &",
    "ba.titleAccent": "Depois",
    "ba.subtitle": "Arraste o controle para ver a transformação. Os resultados podem variar.",
    "ba.before": "Antes",
    "ba.after": "Depois",
    "ba.disclaimer": "* Resultados individuais podem variar. Todas as imagens mostram resultados reais com consentimento.",
    "ba.lipFillers": "Preenchimento Labial",
    "ba.antiWrinkle": "Tratamento Anti-Rugas",
    "ba.skinRejuv": "Rejuvenescimento da Pele",

    "pricing.tag": "Preços transparentes",
    "pricing.title": "Nossos",
    "pricing.titleAccent": "Preços",
    "pricing.subtitle": "Tratamentos de qualidade a preços justos. Agende uma consulta gratuita para discutir seu plano personalizado.",

    "testimonials.tag": "Amor dos clientes",
    "testimonials.title": "O que Nossos Clientes",
    "testimonials.titleAccent": "Dizem",
    "testimonials.google": "5.0 no Google",
    "testimonials.seeAll": "Ver todos os depoimentos no Google",

    "booking.tag": "Pronta para começar?",
    "booking.title": "Agende Sua",
    "booking.titleAccent": "Consulta",
    "booking.subtitle": "Dê o primeiro passo para realçar sua beleza natural. Agende uma consulta personalizada com a Tatiana hoje — online ou via WhatsApp.",
    "booking.whatsapp": "Consulta via WhatsApp",
    "booking.bookOnline": "Agendar Online",
    "booking.note": "Consulta inicial gratuita · Sem compromisso · Discreto & confidencial",

    "contact.tag": "Visite-nos",
    "contact.title": "Contato &",
    "contact.titleAccent": "Localização",
    "contact.address": "Endereço",
    "contact.hours": "Horário de Funcionamento",
    "contact.getInTouch": "Entre em Contato",
    "contact.monFri": "Segunda – Sexta: 9:00 – 18:00",
    "contact.sat": "Sábado: 10:00 – 16:00",
    "contact.sun": "Domingo: Fechado",

    "footer.quickLinks": "Links Rápidos",
    "footer.legal": "Legal",
    "footer.privacy": "Política de Privacidade",
    "footer.cookies": "Política de Cookies",
    "footer.terms": "Termos & Condições",
    "footer.rights": "Todos os direitos reservados.",
  },

  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre",
    "nav.treatments": "Tratamientos",
    "nav.prices": "Precios",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",
    "nav.bookNow": "Reservar",

    "hero.location": "Birmingham, Reino Unido",
    "hero.title": "Transformando la belleza y elevando la",
    "hero.titleAccent": "¡confianza!",
    "hero.subtitle": "Estética brasileña avanzada con resultados excepcionales, atención personalizada y total satisfacción.",
    "hero.bookNow": "Reservar Ahora",
    "hero.whatsapp": "Consulta por WhatsApp",
    "hero.scroll": "Desliza para explorar",

    "why.tag": "Tu viaje",
    "why.title": "¿Por qué elegir a",
    "why.titleAccent": "Tatiana?",
    "why.professionalism": "Profesionalismo",
    "why.professionalismDesc": "Profesional cualificada Nivel 7 con más de 25 años de experiencia en la industria de la belleza.",
    "why.innovation": "Innovación",
    "why.innovationDesc": "Técnicas brasileñas combinadas con los procedimientos estéticos más avanzados y tecnología.",
    "why.care": "Cuidado",
    "why.careDesc": "Cada tratamiento está personalizado para tus características únicas con total dedicación a tu bienestar.",
    "why.results": "Resultados",
    "why.resultsDesc": "Resultados excepcionales que transforman la autoestima y elevan la confianza — naturalmente.",

    "about.tag": "Fundadora & Esteticista",
    "about.title": "Sobre",
    "about.titleAccent": "Tatiana",
    "about.p1": "Con más de 25 años de experiencia en la industria de la belleza, Tatiana comenzó su viaje en Brasil en una familia de peluqueros. A los 15, completó su primer curso profesional y gestionó un salón durante casi una década.",
    "about.p2": "Se graduó en Tecnología en Química Industrial y Gestión de Calidad. En 2016, se mudó a Inglaterra, especializándose en diseño y micropigmentación.",
    "about.p3": "En 2020, cofundó el primer salón brasileño en Birmingham y en 2023, abrió su propia clínica. Tiene una cualificación de posgrado Nivel 7 en estética avanzada y procedimientos inyectables.",
    "about.years": "Años de Experiencia",
    "about.qualification": "Cualificación",
    "about.dedication": "Dedicación",

    "treatments.tag": "Nuestra experiencia",
    "treatments.title": "Tratamientos",
    "treatments.titleAccent": "Destacados",
    "treatments.subtitle": "Cada tratamiento se realiza con precisión, cuidado y un ojo artístico para la belleza natural.",
    "treatments.bookThis": "Reservar Tratamiento",
    "treatments.facial": "Estética Facial & Inyectables",
    "treatments.facialDesc": "Toxina botulínica, Profhilo, mesoterapia, relleno labial y bioestimuladores para una apariencia rejuvenecida.",
    "treatments.skin": "Tratamientos de Piel",
    "treatments.skinDesc": "Peelings químicos, microagujas y limpieza facial profunda para una piel radiante y rejuvenecida.",
    "treatments.micropig": "Micropigmentación & PMU",
    "treatments.micropigDesc": "Microblading, lip blush, delineador y técnicas de cejas para resultados definidos y duraderos.",
    "treatments.body": "Tratamientos Corporales",
    "treatments.bodyDesc": "Modelado corporal, drenaje linfático y tratamientos para celulitis para una silueta esculpida.",
    "treatments.laser": "Depilación Láser",
    "treatments.laserDesc": "Tecnología láser avanzada para reducción permanente del vello en todos los tipos de piel.",
    "treatments.brows": "Cejas, Pestañas & Depilación",
    "treatments.browsDesc": "Diseño de cejas, lifting de pestañas, tinte y depilación completa para un look impecable.",
    "treatments.tanning": "Bronceado Brasileño",
    "treatments.tanningDesc": "Bronceado natural e impecable para un brillo dorado durante todo el año.",

    "ba.tag": "Resultados reales",
    "ba.title": "Antes &",
    "ba.titleAccent": "Después",
    "ba.subtitle": "Arrastra el control para ver la transformación. Los resultados pueden variar.",
    "ba.before": "Antes",
    "ba.after": "Después",
    "ba.disclaimer": "* Los resultados individuales pueden variar. Todas las imágenes muestran resultados reales con consentimiento.",
    "ba.lipFillers": "Relleno Labial",
    "ba.antiWrinkle": "Tratamiento Anti-Arrugas",
    "ba.skinRejuv": "Rejuvenecimiento de Piel",

    "pricing.tag": "Precios transparentes",
    "pricing.title": "Nuestros",
    "pricing.titleAccent": "Precios",
    "pricing.subtitle": "Tratamientos de calidad a precios justos. Reserva una consulta gratuita para discutir tu plan personalizado.",

    "testimonials.tag": "Amor de los clientes",
    "testimonials.title": "Lo que Nuestros Clientes",
    "testimonials.titleAccent": "Dicen",
    "testimonials.google": "5.0 en Google",
    "testimonials.seeAll": "Ver todos los testimonios en Google",

    "booking.tag": "¿Lista para empezar?",
    "booking.title": "Reserva Tu",
    "booking.titleAccent": "Consulta",
    "booking.subtitle": "Da el primer paso para realzar tu belleza natural. Reserva una consulta personalizada con Tatiana hoy — online o vía WhatsApp.",
    "booking.whatsapp": "Consulta por WhatsApp",
    "booking.bookOnline": "Reservar Online",
    "booking.note": "Consulta inicial gratuita · Sin compromiso · Discreto & confidencial",

    "contact.tag": "Visítanos",
    "contact.title": "Contacto &",
    "contact.titleAccent": "Ubicación",
    "contact.address": "Dirección",
    "contact.hours": "Horario de Atención",
    "contact.getInTouch": "Contáctanos",
    "contact.monFri": "Lunes – Viernes: 9:00 – 18:00",
    "contact.sat": "Sábado: 10:00 – 16:00",
    "contact.sun": "Domingo: Cerrado",

    "footer.quickLinks": "Enlaces Rápidos",
    "footer.legal": "Legal",
    "footer.privacy": "Política de Privacidad",
    "footer.cookies": "Política de Cookies",
    "footer.terms": "Términos & Condiciones",
    "footer.rights": "Todos los derechos reservados.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("lang") as Language;
    return saved && translations[saved] ? saved : "en";
  });

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  }, []);

  const t = useCallback(
    (key: string) => translations[language][key] || translations.en[key] || key,
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
