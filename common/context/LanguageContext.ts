import { createContext } from "react";

import { Language } from "../types";

export const LanguageContext = createContext<Language>({} as Language);

export const LanguageProvider = LanguageContext.Provider;
