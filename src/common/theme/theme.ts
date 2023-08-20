import { useOSColor } from '$common/hooks';

import { darkThemeColors, lightThemeColors } from './colors';
import { AppColors } from './types';

export type AppTheme = {
  colors: AppColors;
};

export const useTheme = (): AppTheme => {
  let { isDark } = useOSColor();
  isDark = true;

  return { colors: isDark ? darkThemeColors : lightThemeColors };
};
