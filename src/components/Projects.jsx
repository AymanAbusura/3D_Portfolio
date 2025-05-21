/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { Tilt } from "react-tilt";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { github, demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { getProjects, getPetProjects } from "../constants/index-translated";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

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
    <m.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: 20 }}
      layout
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className="relative w-full h-[230px] cursor-pointer">
          <img
            src={image}
            alt={`${name} project image`}
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
                className="w-1/2 h-1/2 object-contain"
                loading="lazy"
              />
            </div>

            {preview && (
              <div
                onClick={() => window.open(preview, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={demo}
                  alt="demo preview"
                  className="w-1/2 h-1/2 object-contain"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </m.div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [visiblePetProjects, setVisiblePetProjects] = useState(3);
  const [showProjects, setShowProjects] = useState(true);

  const allProjects = Object.values(getProjects(t));
  const allPetProjects = Object.values(getPetProjects(t));

  const currentItems = showProjects ? allProjects : allPetProjects;
  const visibleCount = showProjects ? visibleProjects : visiblePetProjects;
  const isLoadMoreVisible = visibleCount < currentItems.length;

  const handleLoadMore = () => {
    if (showProjects) {
      setVisibleProjects((prev) => prev + 3);
    } else {
      setVisiblePetProjects((prev) => prev + 3);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div variants={textVariant()} initial="hidden" animate="show">
        <p className={styles.sectionSubText}>{t("works.header1")}</p>
        <h2 className={styles.sectionHeadText}>{t("works.header2")}</h2>
      </m.div>

      <div className="w-full flex">
        <m.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          animate="show"
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("works.description")}
        </m.p>
      </div>

      <div
        className="relative z-4 mx-auto mt-[20px] flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]"
      >
        <button
          className={clsx(
            styles.projectsHeadBtn,
            showProjects &&
              "text-p4 font-bold bg-[rgb(21_16_48_/_var(--tw-bg-opacity))] bg-opacity-100 rounded-xl"
          )}
          onClick={() => setShowProjects(true)}
        >
          {t("works.toggle_title")}
        </button>

        <button
          className={clsx(
            styles.projectsHeadBtn,
            !showProjects &&
              "text-p4 font-bold bg-[rgb(21_16_48_/_var(--tw-bg-opacity))] bg-opacity-100 rounded-xl"
          )}
          onClick={() => setShowProjects(false)}
        >
          {t("works.toggle_title2")}
        </button>

        <div
          className={clsx(
            styles.projectsHeadBtnBefore,
            "g4 rounded-14 before:h-100 absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
            !showProjects && "translate-x-full"
          )}
        />
      </div>

      {/* Animated projects container with key to trigger re-animation on toggle */}
      <m.div
        key={showProjects ? "projects" : "pet-projects"}
        className="mt-10 flex flex-wrap md:justify-center gap-7"
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <AnimatePresence exitBeforeEnter>
          {currentItems.slice(0, visibleCount).map((project, index) => (
            <ProjectCard
              key={`project-${project.name || index}`}
              index={index}
              {...project}
            />
          ))}
        </AnimatePresence>
      </m.div>

      {isLoadMoreVisible && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#804dee]"
          >
            {t("works.loadMore")}
          </button>
        </div>
      )}
    </LazyMotion>
  );
};

export default SectionWrapper(Projects, "projects");
