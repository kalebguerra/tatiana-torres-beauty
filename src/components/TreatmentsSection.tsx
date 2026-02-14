import ScrollReveal from "./ScrollReveal";
import botoxImg from "@/assets/treatment-botox.jpg";
import fillersImg from "@/assets/treatment-fillers.jpg";
import laserImg from "@/assets/treatment-laser.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const TreatmentsSection = () => {
  const { t } = useLanguage();

  const treatments = [
    {
      name: t("treatments.facial"),
      image: botoxImg,
      description: t("treatments.facialDesc"),
      benefits: ["Anti-wrinkle injections", "Dermal fillers", "Profhilo & Lumi"],
    },
    {
      name: t("treatments.skin"),
      image: laserImg,
      description: t("treatments.skinDesc"),
      benefits: ["Chemical peels", "Microneedling", "Deep cleansing facials"],
    },
    {
      name: t("treatments.micropig"),
      image: fillersImg,
      description: t("treatments.micropigDesc"),
      benefits: ["Microblading", "Lip blush", "Eyeliner PMU"],
    },
    {
      name: t("treatments.body"),
      image: botoxImg,
      description: t("treatments.bodyDesc"),
      benefits: ["Body contouring", "Lymphatic drainage", "Cellulite treatment"],
    },
    {
      name: t("treatments.laser"),
      image: laserImg,
      description: t("treatments.laserDesc"),
      benefits: ["Full body laser", "All skin types", "Permanent reduction"],
    },
    {
      name: t("treatments.brows"),
      image: fillersImg,
      description: t("treatments.browsDesc"),
      benefits: ["Lash lift & tint", "Brow lamination", "Full body waxing"],
    },
    {
      name: t("treatments.tanning"),
      image: botoxImg,
      description: t("treatments.tanningDesc"),
      benefits: ["Spray tan", "Natural finish", "Long-lasting glow"],
    },
  ];

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="treatments" className="section-luxury">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body font-bold">
              {t("treatments.tag")}
            </p>
            <h2 className="section-heading text-foreground mb-2">
              {t("treatments.title")} <span className="italic text-primary font-medium">{t("treatments.titleAccent")}</span>
            </h2>
            <div className="luxury-divider" />
            <p className="section-subheading mt-6 font-semibold">
              {t("treatments.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {treatments.map((tr, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card group cursor-pointer p-0 overflow-hidden">
                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={tr.image}
                    alt={tr.name}
                    className="mx-auto h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/5 transition-colors duration-500" />
                </div>
                <div className="p-5 sm:p-6 md:p-8">
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-medium text-foreground mb-2 sm:mb-3">
                    {tr.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4 font-body">
                    {tr.description}
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {tr.benefits.map((b) => (
                      <li key={b} className="text-[10px] sm:text-xs text-muted-foreground font-body flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollTo("#booking")}
                    className="btn-outline-luxury text-[10px] sm:text-xs py-2.5 sm:py-3 px-4 sm:px-6 w-full"
                  >
                    {t("treatments.bookThis")}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
