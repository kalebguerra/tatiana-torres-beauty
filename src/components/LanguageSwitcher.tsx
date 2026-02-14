import { useLanguage, Language } from "@/contexts/LanguageContext";

const flags: { lang: Language; flag: string; label: string }[] = [
  { lang: "en", flag: "🇬🇧", label: "English" },
  { lang: "pt", flag: "🇧🇷", label: "Português" },
  { lang: "es", flag: "🇪🇸", label: "Español" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      {flags.map((f) => (
        <button
          key={f.lang}
          onClick={() => setLanguage(f.lang)}
          aria-label={f.label}
          className={`text-lg sm:text-xl leading-none transition-all duration-300 rounded-full p-0.5 ${
            language === f.lang
              ? "scale-110 ring-2 ring-primary/50 bg-primary/10"
              : "opacity-50 hover:opacity-100 hover:scale-105"
          }`}
        >
          {f.flag}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
