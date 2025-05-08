import { styles } from "../styles";
import resumeEnglish from '../assets/resume/ResumeEN.pdf';
import resumeRussian from '../assets/resume/ResumeRU.pdf';

// Add translation
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const resumeLink = currentLanguage === 'RU' ? resumeRussian : resumeEnglish;
  const resumeFileName = currentLanguage === 'RU' ? 'Resume-Russian.pdf' : 'Resume-English.pdf';

  return (
    <section className="relative w-full h-[75vh] mx-auto" aria-label="Hero section">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {t("hero.greeting")} <span className="text-[#915EFF]">{t("hero.name")}</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {t("hero.description")}
          </p>

          <div className="mt-10">
            <a
              href={resumeLink}
              download={resumeFileName}
              className="relative bg-tertiary py-4 px-10 rounded-xl outline-none text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] z-30 inline-block text-center"
            >
              {t("hero.resume")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;