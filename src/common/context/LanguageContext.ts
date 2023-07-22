import { Language } from "@common/types";
import { createContext } from "react";

export const LanguageContext = createContext<Language>({} as Language);

export const LanguageProvider = LanguageContext.Provider;
