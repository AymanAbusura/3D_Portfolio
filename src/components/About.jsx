/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { LazyMotion, domAnimation, m } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { photo400, photo800 } from '../assets';

// i18n
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <LazyMotion features={domAnimation}>
      <m.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </m.div>
    </LazyMotion>
  </Tilt>
);

const About = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      const ismobile = window.innerWidth < 1200;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <>
      <LazyMotion features={domAnimation}>
        <m.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t("about.header1")}</p>
          <h2 className={styles.sectionHeadText}>{t("about.header2")}</h2>
        </m.div>
      </LazyMotion>

      <div className="lg:flex lg:justify-between gap-20">
        <LazyMotion features={domAnimation}>
          <m.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-start'
          >
            {t("about.description")}
          </m.p>
        </LazyMotion>

        <Tilt className='xs:w-[250px] w-full'>
          <LazyMotion features={domAnimation}>
            <m.div variants={fadeIn("right", "spring", 0.5, 0.75)}>
              {/* <img 
                src={photo}
                alt="Ayman"
                className={`${isMobile ? 'hidden' : 'w-[250px] rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col'}`}
                width="250"
                height="280"
                loading={isMobile ? "lazy" : undefined}
              /> */}
              <picture>
                <source srcSet={photo800} media="(min-width: 768px)" type="image/webp" />
                <source srcSet={photo400} media="(min-width: 480px)" type="image/webp" />
                <img
                  src={photo400}
                  alt="Ayman"
                  width={250}
                  height={250}
                  fetchpriority="high"
                  className={`${isMobile ? 'hidden' : 'w-[250px] rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col'}`}
                  loading={isMobile ? "lazy" : undefined}
                />
              </picture>
            </m.div>
          </LazyMotion>
        </Tilt>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={t(`about.services.service${index + 1}`)}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
