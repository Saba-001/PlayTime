export type AppFonts = {
  primaryRegular: string;
  primaryMedium: string;
  primaryBold: string;
};

export const FONTS = {
  primaryRegular: 'Satoshi-regular',
  primaryMedium: 'Satoshi-medium',
  primaryBold: 'Satoshi-bold',
};

export const kaFonts: AppFonts = {
  primaryRegular: 'Helvetica-medium',
  primaryMedium: 'Helvetica-medium',
  primaryBold: 'Helvetica-medium',
};

export type AppFontKeys = keyof typeof FONTS;
