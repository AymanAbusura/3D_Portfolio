import { useState } from 'react';
import { useTranslation } from 'react-i18next'

import { translate } from '../assets';

const LanguageSelector = () => {
  const [languages, setLanguages] = useState(<img src={translate} className='w-7 h-7' />);

  const {i18n} = useTranslation();
  
  const handlechangeLanguage = (lang) => {
    setLanguages(languages === 'EN' ? 'RU' : 'EN');
    i18n.changeLanguage(lang);
  }
  
  return (
    <div>
      <button onClick={() => handlechangeLanguage(`${languages === 'EN' ? 'RU' : 'EN'}`)}>{languages}</button>
    </div>
  )
}

export default LanguageSelector