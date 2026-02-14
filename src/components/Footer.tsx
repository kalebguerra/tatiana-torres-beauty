import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/tatianatorresbeauty", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com/tatianatorresbeauty", icon: Facebook },
  { label: "Phone", href: "tel:+447492934010", icon: Phone },
];

const Footer = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: t("nav.about"), id: "#about" },
    { label: t("nav.treatments"), id: "#treatments" },
    { label: t("nav.testimonials"), id: "#testimonials" },
    { label: t("nav.contact"), id: "#contact" },
    { label: t("nav.bookNow"), id: "#booking" },
  ];

  return (
    <footer className="border-t border-border/30 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <button onClick={() => scrollTo("#home")} className="flex flex-col text-left">
              <span className="font-heading text-xl sm:text-2xl font-light text-foreground">Tatiana Torres</span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-body">
                Brazilian Aesthetic & Beauty
              </span>
            </button>
            <p className="text-xs sm:text-sm text-muted-foreground mt-4 leading-relaxed font-body">
              382 Bearwood Road, B66 4ET — Birmingham, UK<br />
              📞 07492 934010
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                  <s.icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-base sm:text-lg font-medium text-foreground mb-3 sm:mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-base sm:text-lg font-medium text-foreground mb-3 sm:mb-4">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                  {t("footer.cookies")}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-[10px] sm:text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Tatiana Torres Brazilian Aesthetic & Beauty. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
