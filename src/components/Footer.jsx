import { github, linkedin, hh, habr, telegram } from "../assets";
// Add i18n translation
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-secondary flex gap-2">
          <p>{t("footer.box1")}</p>
          <p>|</p>
          <p>{t("footer.box2")}</p>
        </div>
  
        <div className="flex gap-3">
          <a href="https://github.com/AymanAbusura" target="_blank" rel="noopener noreferrer" className="social-icon cursor-pointer hover:bg-[#804dee]">
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" loading="lazy" />
          </a>
          <a href="https://www.linkedin.com/in/AymanAbusura" target="_blank" rel="noopener noreferrer" className="social-icon cursor-pointer hover:bg-[#804dee]">
            <img src={linkedin} alt="linkedin" className="w-1/2 h-1/2 object-contain" loading="lazy" />
          </a>
          <a href="https://hh.ru/resume/b43a6c14ff0c5269c30039ed1f376c656e4852" target="_blank" rel="noopener noreferrer" className="social-icon cursor-pointer hover:bg-[#804dee]">
            <img src={hh} alt="hh" className="w-1/2 h-1/2 object-contain" loading="lazy" />
          </a>
          <a href="https://career.habr.com/aymanabusura" target="_blank" rel="noopener noreferrer" className="social-icon cursor-pointer hover:bg-[#804dee]">
            <img src={habr} alt="habr" className="w-1/2 h-1/2 object-contain" loading="lazy" />
          </a>
          <a href="https://t.me/ayman_abusura96" target="_blank" rel="noopener noreferrer" className="social-icon cursor-pointer hover:bg-[#804dee]">
            <img src={telegram} alt="telegram" className="w-1/2 h-1/2 object-contain" loading="lazy" />
          </a>
        </div>
        
        <p className="text-secondary">{t("footer.box3")}</p>
      </footer>
    );
  };
  
export default Footer;