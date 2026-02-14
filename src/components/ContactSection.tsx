import ScrollReveal from "./ScrollReveal";
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-luxury">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body text-base sm:text-xl">
              {t("contact.tag")}
            </p>
            <h2 className="section-heading text-foreground mb-2">
              {t("contact.title")} <span className="italic text-primary font-medium">{t("contact.titleAccent")}</span>
            </h2>
            <div className="luxury-divider" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <ScrollReveal>
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-medium text-foreground mb-1">
                    {t("contact.address")}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-body">
                    382 Bearwood Road, B66 4ET<br />
                    Birmingham, United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-medium text-foreground mb-1">
                    {t("contact.hours")}
                  </h3>
                  <div className="text-xs sm:text-sm text-muted-foreground font-body space-y-1">
                    <p>{t("contact.monFri")}</p>
                    <p>{t("contact.sat")}</p>
                    <p>{t("contact.sun")}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-medium text-foreground mb-1">
                    {t("contact.getInTouch")}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-body mb-2">
                    📞 07492 934010
                  </p>
                  <div className="flex gap-3 mt-3">
                    <a href="https://wa.me/447492934010" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                      className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                      <Phone className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                    <a href="https://instagram.com/tatianatorresbeauty" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                      className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                      <Instagram className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                    <a href="https://facebook.com/tatianatorresbeauty" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                      className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                      <Facebook className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-full min-h-[280px] border border-border/50">
              <iframe
                title="Tatiana Torres Brazilian Aesthetic & Beauty - Bearwood, Birmingham"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.5!2d-1.9685!3d52.4745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI4JzI4LjIiTiAxwrA1OCc2LjYiVw!5e0!3m2!1sen!2suk!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
