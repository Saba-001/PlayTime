import { AppTheme } from '$common/theme';

import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme extends AppTheme {}
}
