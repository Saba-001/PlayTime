import styled, { css } from 'styled-components/native';

export const TYPOGRAPHY_STYLES = {
  primary: css`
    color: ${({ theme }) => theme.colors.textPrimary};
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.textSecondary};
  `,
  largeTitle: css`
    font-size: 2.8rem;
    line-height: 3.4rem;
  `,
  titleOne: css`
    font-size: 2.8rem;
    line-height: 3.4rem;
  `,
  titleTwo: css`
    font-size: 2.4rem;
    line-height: 3.2rem;
  `,
  headline: css`
    font-size: 2rem;
    line-height: 3rem;
  `,
  subHeadline: css`
    font-size: 1.6rem;
    line-height: 2.4rem;
  `,
  bodyButton: css`
    font-size: 1.4rem;
    line-height: 2rem;
  `,
  caption: css`
    font-size: 1.2rem;
    line-height: 1.8rem;
  `,
};

// export type TextProps = {

// };

export const CustomText = styled.Text``;
