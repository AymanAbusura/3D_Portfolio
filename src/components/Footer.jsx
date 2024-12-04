import { github, linkedin, hh, habr, telegram } from "../assets";
// Add i18n translation
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>{t("footer.box1")}</p>
          <p>|</p>
          <p>{t("footer.box2")}</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon cursor-pointer" onClick={() => window.open(import.meta.env.VITE_APP_GITHUB, "_blank")}>
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain cursor-pointer" loading="lazy" />
          </div>
          <div className="social-icon cursor-pointer" onClick={() => window.open(import.meta.env.VITE_APP_LINKEDIN, "_blank")}>
            <img src={linkedin} alt="linkedin" className="w-1/2 h-1/2 object-contain cursor-pointer" loading="lazy" />
          </div>
          <div className="social-icon cursor-pointer" onClick={() => window.open(import.meta.env.VITE_APP_HH, "_blank")}>
            <img src={hh} alt="hh" className="w-1/2 h-1/2 object-contain cursor-pointer" loading="lazy" />
          </div>
          <div className="social-icon cursor-pointer" onClick={() => window.open(import.meta.env.VITE_APP_HABR, "_blank")}>
            <img src={habr} alt="habr" className="w-1/2 h-1/2 object-contain cursor-pointer" loading="lazy" />
          </div>
          <div className="social-icon cursor-pointer" onClick={() => window.open(import.meta.env.VITE_APP_TELEGRAM, "_blank")}>
            <img src={telegram} alt="telegram" className="w-1/2 h-1/2 object-contain cursor-pointer" loading="lazy" />
          </div>
        </div>
  
        <p className="text-white-500">{t("footer.box3")}</p>
      </footer>
    );
  };
  
export default Footer;