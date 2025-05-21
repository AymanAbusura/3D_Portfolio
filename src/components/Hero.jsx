// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// import { styles } from "../styles";
// import resumeEnglish from '../assets/resume/ResumeEN.pdf';
// import resumeRussian from '../assets/resume/ResumeRU.pdf';
// import { github, linkedin, hh, habr, telegram } from "../assets";
// import { useTranslation } from 'react-i18next';
// import { photo800, photo400 } from '../assets';

// const textVariant = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const iconVariant = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0 },
// };

// const Hero = () => {
//   const { t, i18n } = useTranslation();

//   const currentLanguage = i18n.language;
//   const resumeLink = currentLanguage === 'RU' ? resumeRussian : resumeEnglish;
//   const resumeFileName = currentLanguage === 'RU' ? 'Resume-Russian.pdf' : 'Resume-English.pdf';

//   const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

//   useEffect(() => {
//     const handleResize = () => {
//       const ismobile = window.innerWidth < 767;
//       if (ismobile !== isMobile) setIsMobile(ismobile);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [isMobile]);

//   return (
//     <section className="relative w-full h-[75vh] mx-auto z-40" aria-label="Hero section">
//       <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10 max-[320px]:gap-1 z-40`}>
//         <motion.div
//           className="flex flex-col justify-center items-center mt-5"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: { transition: { staggerChildren: 0.3 } },
//           }}
//         >
//           <motion.div
//             className="w-5 h-5 rounded-full bg-[#915EFF]"
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5, ease: 'easeOut' }}
//           />
//           <motion.div
//             className="w-1 sm:h-80 h-40 violet-gradient origin-top"
//             initial={{ scaleY: 0 }}
//             animate={{ scaleY: 1 }}
//             transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
//           />
//         </motion.div>

//         <motion.div
//           className="flex-1"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: { transition: { staggerChildren: 0.2 } },
//           }}
//         >
//           <motion.h1 className={`${styles.heroHeadText} text-white`} variants={textVariant}>
//             {t('hero.greeting', 'Hi, I\'m')} <span className="text-custom-purple">{t('hero.name', 'Ayman')}</span>
//           </motion.h1>

//           <motion.p className={`${styles.heroSubText} mt-2 text-white-100`} variants={textVariant}>
//             {t("hero.description")}
//           </motion.p>

//           <motion.div className="mt-10" variants={textVariant}>
//             <a
//               href={resumeLink}
//               download={resumeFileName}
//               className="relative bg-tertiary py-4 px-10 rounded-xl outline-none text-white font-bold shadow-md shadow-primary hover:bg-[#804dee] z-30 inline-block text-center"
//             >
//               {t("hero.resume")}
//             </a>
//           </motion.div>

//           <motion.div
//             className="flex gap-4 max-[320px]:gap-2 mt-6"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               visible: { transition: { staggerChildren: 0.1 } },
//             }}
//           >
//             {[github, linkedin, hh, habr, telegram].map((icon, index) => (
//               <motion.a
//                 key={index}
//                 href={
//                   [
//                     "https://github.com/AymanAbusura",
//                     "https://www.linkedin.com/in/AymanAbusura",
//                     "https://hh.ru/resume/b43a6c14ff0c5269c30039ed1f376c656e4852",
//                     "https://career.habr.com/aymanabusura",
//                     "https://t.me/ayman_abusura96",
//                   ][index]
//                 }
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#804dee] flex items-center justify-center transition duration-300"
//                 variants={iconVariant}
//               >
//                 <img src={icon} alt="social-icon" className="w-5 h-5 object-contain" loading="lazy" />
//               </motion.a>
//             ))}
//           </motion.div>
//         </motion.div>

//         {!isMobile && (
//           <motion.div
//             className="w-[400px] h-[400px] rounded-full overflow-hidden"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: 'easeOut' }}
//           >
//             <picture>
//               <source srcSet={photo800} media="(min-width: 768px)" type="image/webp" />
//               <source srcSet={photo400} media="(min-width: 480px)" type="image/webp" />
//               <img
//                 src={photo400}
//                 alt="Hero"
//                 className="w-full h-full object-cover"
//               />
//             </picture>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import resumeEnglish from '../assets/resume/ResumeEN.pdf';
import resumeRussian from '../assets/resume/ResumeRU.pdf';
import { github, linkedin, hh, habr, telegram } from "../assets";
import { useTranslation } from 'react-i18next';
import { photo800, photo400 } from '../assets';

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const iconVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
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
    <section className="relative w-full h-[75vh] mx-auto z-40" aria-label="Hero section">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10 max-[320px]:gap-1 z-40`}>
        <motion.div
          className="flex flex-col justify-center items-center mt-5"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          <motion.div
            className="w-5 h-5 rounded-full bg-[#915EFF]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
          <motion.div
            className="w-1 sm:h-80 h-40 violet-gradient origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="flex-1"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h1 className={`${styles.heroHeadText} text-white`} variants={textVariant}>
            {t('hero.greeting', 'Hi, I\'m')} <span className="text-custom-purple">{t('hero.name', 'Ayman')}</span>
          </motion.h1>

          <motion.p className={`${styles.heroSubText} mt-2 text-white-100`} variants={textVariant}>
            {t("hero.description")}
          </motion.p>

          <motion.div className="mt-10" variants={textVariant}>
            <a
              href={resumeLink}
              download={resumeFileName}
              className="relative bg-tertiary py-4 px-10 rounded-xl outline-none text-white font-bold shadow-md shadow-primary hover:bg-[#804dee] z-30 inline-block text-center"
            >
              {t("hero.resume")}
            </a>
          </motion.div>

          <motion.div
            className="flex gap-4 max-[320px]:gap-2 mt-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {[github, linkedin, hh, habr, telegram].map((icon, index) => (
              <motion.a
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
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {!isMobile && (
          <motion.div
            className="w-[400px] h-[400px] rounded-full overflow-hidden"
            initial={{ opacity: 0 }}  // убрал сдвиг по X, чтобы ускорить LCP
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <picture>
              <source srcSet={photo800} media="(min-width: 768px)" type="image/webp" />
              <source srcSet={photo400} media="(min-width: 480px)" type="image/webp" />
              <img
                src={photo400}
                alt="Hero"
                width={400}     // фиксированные размеры для предотвращения сдвига контента
                height={400}
                // eslint-disable-next-line react/no-unknown-property
                fetchpriority="high"  // приоритет загрузки
                className="w-full h-full object-cover"
              />
            </picture>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
