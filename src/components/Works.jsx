/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { getProjects } from "../constants/index-translated";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from "framer-motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  preview,
  source_code_link,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      initial="hidden" 
      animate="show"
      exit={{ opacity: 0, y: 20 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] cursor-pointer">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-contain rounded-2xl"
            loading="lazy"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain cursor-pointer"
                loading="lazy"
              />
            </div>

            {preview ? (
              <div
                onClick={() => window.open(preview, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={demo}
                  alt="demo preview"
                  className="w-1/2 h-1/2 object-contain cursor-pointer"
                  loading="lazy"
                />
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMoreProjects = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, projects.length));
  };

  // Translate project descriptions on render
  const translatedProjects = getProjects(t);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{t("works.header1")}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t("works.header2")}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("works.description")}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        <AnimatePresence>
          {translatedProjects.slice(0, visibleCount).map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </AnimatePresence>
      </div>

      {visibleCount < projects.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={loadMoreProjects}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-blue-500"
          >
            {t("works.loadMore")}
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");