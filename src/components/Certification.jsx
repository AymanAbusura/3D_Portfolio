/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import { motion } from "framer-motion";
  
  import "react-vertical-timeline-component/style.min.css";
  
  import { styles } from "../styles";
  import { certifications } from "../constants";
  import { SectionWrapper } from "../hoc";
  import { textVariant } from "../utils/motion";
  
//addnew
import { useTranslation } from 'react-i18next';

  const CertificationCard = ({ certification }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
          cursor: "pointer",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={certification.date}
        iconStyle={{ background: certification.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={certification.icon}
              alt={certification.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        }
      >
        <div onClick={() => window.open(certification.link, "_blank")}>
          <h3 className='text-white text-[24px] font-bold'>{certification.title}</h3>
          <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{certification.company_name}</p>
          {/* <button className='text-secondary text-[8px] font-semibold' style={{ margin: 0, fontSize: 10 }}><a href={certification.link}>Check certification</a></button> */}
        </div>
      </VerticalTimelineElement>
    );
  };
  
  const Certification = () => {
    // for translation new
    const {t} = useTranslation();

    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t("certification.header1")}</p>
          <h2 className={styles.sectionHeadText}>{t("certification.header2")}</h2>
        </motion.div>
  
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {certifications.map((certification, index) => (
              <CertificationCard
                key={`certification-${index}`}
                certification={certification}
              />
            ))}
          </VerticalTimeline>
        </div>
      </>
    );
  };
  
  export default SectionWrapper(Certification, "work");