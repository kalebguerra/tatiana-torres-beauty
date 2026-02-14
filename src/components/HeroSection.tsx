import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Logo3D = lazy(() => import("@/components/Logo3D"));

const HeroSection = () => {
  const { t } = useLanguage();
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-24 sm:pb-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hidden md:flex justify-center mb-6">
            <Suspense fallback={<div className="w-80 h-80" />}>
              <Logo3D size="xl" className="!w-80 !h-80" />
            </Suspense>
          </div>

          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 sm:mb-6 font-body font-semibold">
            {t("hero.location")}
          </p>

          <h1 className="section-heading text-foreground leading-[1.1] mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {t("hero.title")}{" "}
            <span className="italic text-primary">{t("hero.titleAccent")}</span>
          </h1>

          <div className="luxury-divider" />

          <p className="section-subheading mt-4 sm:mt-6 mb-8 sm:mb-10 font-medium text-base sm:text-lg md:text-xl px-2">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button onClick={() => scrollTo("#booking")} className="btn-primary-luxury text-xs sm:text-sm py-3 px-6">
              {t("hero.bookNow")}
            </button>
            <a
              href="https://wa.me/447492934010"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs sm:text-sm py-3 px-6"
            >
              {t("hero.whatsapp")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="hidden sm:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body font-extrabold">
            {t("hero.scroll")}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-foreground/20"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
