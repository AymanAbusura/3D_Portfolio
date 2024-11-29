import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import { translate } from '../assets';

function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="relative flex flex-col items-center">
      <button className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <img src={translate} className="w-7 h-7" alt="Translate Icon" />
          {!isOpen ? (
            <AiOutlineCaretDown className="h-8 lg:w-4 md:w-5 sm:w-5" />
          ) : (
            <AiOutlineCaretUp className="h-8 lg:w-4 md:w-5 sm:w-5" />
          )}
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