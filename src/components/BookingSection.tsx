import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const BookingSection = () => {
  const { t } = useLanguage();

  return (
    <section id="booking" className="section-luxury">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body font-extrabold">
            {t("booking.tag")}
          </p>
          <h2 className="section-heading text-foreground mb-2">
            {t("booking.title")} <span className="italic text-primary font-medium">{t("booking.titleAccent")}</span>
          </h2>
          <div className="luxury-divider" />
          <p className="section-subheading mt-6 mb-8 sm:mb-10 font-medium text-sm sm:text-base md:text-lg px-2">
            {t("booking.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/447492934010"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs sm:text-sm py-3 px-6"
            >
              {t("booking.whatsapp")}
            </a>
            <a href="#" className="btn-primary-luxury text-xs sm:text-sm py-3 px-6">
              {t("booking.bookOnline")}
            </a>
          </div>

          <p className="text-[10px] sm:text-xs text-muted-foreground mt-6 sm:mt-8 font-body font-medium">
            {t("booking.note")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BookingSection;
