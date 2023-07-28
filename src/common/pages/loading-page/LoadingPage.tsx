import { LinearGradient } from 'expo-linear-gradient';

import { DarkThemeLogo, LightThemeLogo } from '$common/assets';
import { POEMS } from '$common/constants';
import { useTranslation } from '$common/hooks';

import { AppName, LoadingPageContainer, Logo, Poem } from './styles';

export const LoadingPage = () => {
  const { t } = useTranslation();
  const isDark = false;
  const gradientColors = isDark
    ? ['#1C2331', '#171E28']
    : ['#336699', '#09221F'];

  //other background #33373B to #A1ACAD

  return (
    <LoadingPageContainer>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <Logo src={isDark ? DarkThemeLogo : LightThemeLogo} />
      <AppName>{t('common_play_time')}</AppName>
      <Poem>{POEMS[Math.floor(Math.random() * POEMS.length)]}</Poem>
    </LoadingPageContainer>
  );
};
