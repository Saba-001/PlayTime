import { useCallback, useEffect, useMemo, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { en, ka } from '$common/translation';
import { AppLangCode } from '$common/types';

const getTranslations = (lang: AppLangCode): Record<string, string> => {
  switch (lang) {
    case 'en':
      return en;

    case 'ka':
      return ka;

    default:
      return en;
  }
};

export const useLanguage = () => {
  const [currentLangauge, setCurrentLanguage] = useState<AppLangCode>(
    AppLangCode.EN
  );

  useEffect(() => {
    const getStoredLanguage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem('language');

        return (storedLanguage || AppLangCode.EN) as AppLangCode;
      } catch (error) {
        console.log(error);

        return AppLangCode.EN;
      }
    };

    getStoredLanguage().then((storedLanguage) => {
      setCurrentLanguage(storedLanguage);
    });
  }, []);

  useEffect(() => {
    const updateStoredLanguage = async () => {
      try {
        await AsyncStorage.setItem('language', currentLangauge);
      } catch (error) {
        console.log(error);
      }
    };

    updateStoredLanguage();
  }, [currentLangauge]);

  const t = useCallback(
    (text: string): string => {
      const translations = getTranslations(currentLangauge);

      return translations[text] || translations['translation_missed'];
    },
    [currentLangauge]
  );

  return useMemo(
    () => ({
      t,

      setCurrentLanguage,

      currentLangauge,
    }),

    [t, setCurrentLanguage, currentLangauge]
  );
};
