/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

import { styles } from "../styles";
import resumeEnglish from '../assets/resume/ResumeEN.pdf';
import resumeRussian from '../assets/resume/ResumeRU.pdf';
import { github, linkedin, hh, habr, telegram } from "../assets";
import { useTranslation } from 'react-i18next';
import { photo800, photo400 } from '../assets';

const textVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const iconVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Hero = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const resumeLink = currentLanguage === 'RU' ? resumeRussian : resumeEnglish;
  const resumeFileName = currentLanguage === 'RU' ? 'Resume-Russian.pdf' : 'Resume-English.pdf';

  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      const ismobile = window.innerWidth < 767;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <section className="relative w-full h-screen mx-auto z-40" aria-label="Hero section">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10 max-[320px]:gap-1 z-40`}>
        <LazyMotion features={domAnimation}>
          <m.div
            className="flex flex-row items-start gap-10 mt-5"  // Main horizontal flex container
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <m.div className="flex flex-row items-start gap-6 flex-1" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <m.div className="flex flex-col justify-center items-center mt-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} variants={{ visible: { transition: { staggerChildren: 0 } } }}>
                <m.div
                  className="w-5 h-5 rounded-full bg-[#915EFF]"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 1, opacity: 1 }}
                />
                <m.div
                  className="w-1 sm:h-80 h-40 violet-gradient origin-top"
                  initial={{ scaleY: 1 }}
                  animate={{ scaleY: 1 }}
                />
              </m.div>
              
              <m.div className="flex flex-col" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                <m.h1 className={`${styles.heroHeadText} text-white`} variants={textVariant}>
                  {t('hero.greeting', 'Hi, I\'m')} <span className="text-custom-purple">{t('hero.name', 'Ayman')}</span>
                </m.h1>
                
                <m.p className={`${styles.heroSubText} mt-2 text-white-100`} variants={textVariant}>
                  {t("hero.description")}
                </m.p>
                
                <m.div className="mt-10" variants={textVariant}>
                  <a
                    href={resumeLink}
                    download={resumeFileName}
                    className="relative bg-tertiary py-4 px-10 rounded-xl outline-none text-white font-bold shadow-md shadow-primary hover:bg-[#804dee] z-30 inline-block text-center"
                  >
                    {t("hero.resume")}
                  </a>
                </m.div>
                
                <m.div
                  className="flex gap-4 max-[320px]:gap-2 mt-6"
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                  {[github, linkedin, hh, habr, telegram].map((icon, index) => (
                    <m.a
                      key={index}
                      href={
                        [
                          "https://github.com/AymanAbusura",
                          "https://www.linkedin.com/in/AymanAbusura",
                          "https://hh.ru/resume/b43a6c14ff0c5269c30039ed1f376c656e4852",
                          "https://career.habr.com/aymanabusura",
                          "https://t.me/ayman_abusura96",
                        ][index]
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#804dee] flex items-center justify-center transition duration-300"
                      variants={iconVariant}
                    >
                      <img src={icon} alt="social-icon" className="w-5 h-5 object-contain" loading="lazy" />
                    </m.a>
                  ))}
                </m.div>
              </m.div>
            </m.div>
            
            {!isMobile && (
              <m.div
                className="w-[250px] h-[250px] rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <picture>
                  <source srcSet={photo800} media="(min-width: 768px)" type="image/webp" />
                  <source srcSet={photo400} media="(min-width: 480px)" type="image/webp" />
                  <img
                    src={photo400}
                    alt="Hero"
                    width={250}
                    height={250}
                    fetchpriority="high"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </m.div>
            )}
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
};

export default Hero;
