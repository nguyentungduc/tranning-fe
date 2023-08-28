import React from 'react';
import { useTranslation } from 'react-i18next';

const BirthText = () => {
  const { t } = useTranslation();
  const coloredText = `${t('Months.January')} `;

  return (
    <>
      <ul>
        <li>{coloredText}</li>
      </ul>
    </>
  );
};

export default BirthText;
