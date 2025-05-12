import { useState, useEffect } from "react";

import { styles } from "../styles";
import resumeEnglish from '../assets/resume/ResumeEN.pdf';
import resumeRussian from '../assets/resume/ResumeRU.pdf';

// Add translation
import { useTranslation } from 'react-i18next';
import { photo } from '../assets'

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
    <section className="relative w-full h-[75vh] mx-auto z-40" aria-label="Hero section">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10 z-40`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-1">
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
        
        {!isMobile &&
          <svg
            className="w-[400px] h-auto right-0 bottom-0 z-10"
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0">
              <path
                fill="white"
                d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
              />
              <image
                x="0"
                y="-30"
                width="500"
                height="500"
                preserveAspectRatio="xMidYMid slice"
                xlinkHref={photo}
              />
            </g>
          </svg>
        }
      </div>
    </section>
  );
};

export default Hero;
