import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles'
import { photo400, menu, close } from '../assets'

import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  // for translation
  const { t } = useTranslation();
  const sectionMap = {
    box2: "about",
    box3: "work",
    box4: "projects",
    box5: "contact",
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="flex items-center gap-2" 
          onClick={() => {
            setActive(""); 
            window.scrollTo(0,0);
          }}
        >
          <img src={photo400} alt="logo" className="w-9 h-9 object-cover object-bottom" style={{ borderRadius: '1rem' }} loading="lazy" />
          <p className="text-white text-[18px] md:text-[15px] font-bold cursor-pointer flex">{t("navbar.box1")} &nbsp; <span className="sm:block hidden">| {t("navbar.position")}</span></p>
        </Link>

        <ul className="list-none hidden lg:flex flex-row gap-10">
          {['box2', 'box3', 'box4', 'box5'].map((key, idx) => (
            <li
              key={idx}
              className={`${active === key ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px] lg:text-[18px]`}
              onClick={() => {
                setActive(key);
                const sectionId = sectionMap[key];
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
              }}

            >
              <a href={`#${sectionMap[key]}`}>{t(`navbar.${key}`)}</a>
            </li>
          ))}
          <li>
            <LanguageSelector />
          </li>
        </ul>

        {/* Mobile and Tablet Navigation */}
        <div className="flex lg:hidden justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-8 h-8 object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {['box2', 'box3', 'box4', 'box5'].map((key, idx) => (
                <li
                  key={idx}
                  className={`${active === key ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(key);
                    const sectionId = sectionMap[key];
                    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <a href={`#${sectionMap[key]}`}>{t(`navbar.${key}`)}</a>
                </li>
              ))}
              <li>
                <LanguageSelector />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;