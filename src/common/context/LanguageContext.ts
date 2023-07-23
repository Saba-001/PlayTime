import { createContext } from 'react';

import { Language } from '$common/types';

export const LanguageContext = createContext<Language>({} as Language);

export const LanguageProvider = LanguageContext.Provider;
