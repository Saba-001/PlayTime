export enum AppLangCode {
  EN = "en",
  KA = "ka",
}

export type Language = {
  t: (text: string) => string;
};
