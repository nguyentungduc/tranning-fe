import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('vi');
    } else if (i18n.language === 'vi') {
      i18n.changeLanguage('ja');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return {
    t,
    onChangeLanguage,
  };
};
