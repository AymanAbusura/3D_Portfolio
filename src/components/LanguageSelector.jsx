import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { translate } from '../assets';

function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const CaretDown = (
    <svg
      className="h-8 lg:w-4 md:w-5 sm:w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
    </svg>
  );

  const CaretUp = (
    <svg
      className="h-8 lg:w-4 md:w-5 sm:w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"></path>
    </svg>
  );

  return (
    <div className="relative flex flex-col items-center">
      <button className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <img src={translate} className="w-7 h-7" alt="Translate Icon" />
        {!isOpen ? CaretDown : CaretUp}
      </button>

      {isOpen && (
        <div className="lg:bg-black sm:bg-transparent text-white lg:absolute sm:none top-10 flex flex-col items-start rounded-lg p-2 w-full">
          <button
            className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            onClick={() => handleLanguageChange('EN')}
          >
            EN
          </button>
          <button
            className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            onClick={() => handleLanguageChange('RU')}
          >
            RU
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;