import ScrollReveal from "./ScrollReveal";
import portraitImg from "@/assets/portrait-tatiana.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-luxury">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={portraitImg}
                  alt="Tatiana Torres - Advanced Aesthetics Professional"
                  className="w-full h-[280px] sm:h-[300px] lg:h-[380px] object-contain bg-white"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 rounded-3xl border border-primary/20 -z-10" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body font-extrabold">
              {t("about.tag")}
            </p>
            <h2 className="section-heading text-foreground mb-2">
              {t("about.title")} <span className="italic text-primary font-medium">{t("about.titleAccent")}</span>
            </h2>
            <div className="luxury-divider mx-0" />

            <div className="space-y-4 sm:space-y-5 mt-6 sm:mt-8">
              <p className="leading-relaxed font-body font-semibold text-foreground text-sm sm:text-base">{t("about.p1")}</p>
              <p className="leading-relaxed font-body font-semibold text-foreground text-sm sm:text-base">{t("about.p2")}</p>
              <p className="leading-relaxed font-body font-semibold text-foreground text-sm sm:text-base">{t("about.p3")}</p>
            </div>

            <div className="flex gap-6 sm:gap-8 mt-8 sm:mt-10">
              <div>
                <span className="font-heading text-2xl sm:text-3xl text-primary font-extrabold">25+</span>
                <p className="text-[10px] sm:text-xs mt-1 font-body font-medium text-foreground">{t("about.years")}</p>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl text-primary font-extrabold">Level 7</span>
                <p className="text-[10px] sm:text-xs mt-1 font-body font-medium text-foreground">{t("about.qualification")}</p>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl text-primary font-extrabold">100%</span>
                <p className="text-[10px] sm:text-xs mt-1 font-body font-medium text-foreground">{t("about.dedication")}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
