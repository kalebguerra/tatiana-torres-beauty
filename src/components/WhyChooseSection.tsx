import ScrollReveal from "./ScrollReveal";
import { Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseSection = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: Heart, title: t("why.professionalism"), description: t("why.professionalismDesc") },
    { icon: Sparkles, title: t("why.innovation"), description: t("why.innovationDesc") },
    { icon: ShieldCheck, title: t("why.care"), description: t("why.careDesc") },
    { icon: Users, title: t("why.results"), description: t("why.resultsDesc") },
  ];

  return (
    <section className="section-luxury">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body font-semibold">
            {t("why.tag")}
          </p>
          <h2 className="section-heading text-foreground mb-2">
            {t("why.title")} <span className="italic text-primary font-medium">{t("why.titleAccent")}</span>
          </h2>
          <div className="luxury-divider" />
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {reasons.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card text-center group cursor-default transition-all duration-500 p-4 sm:p-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-5 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500">
                  <r.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-base sm:text-xl font-medium text-foreground mb-2 sm:mb-3">
                  {r.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-body">
                  {r.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
