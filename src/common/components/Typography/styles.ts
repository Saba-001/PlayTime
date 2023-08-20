import styled, { css } from 'styled-components/native';

import { AppFontKeys, FONTS } from '$common/types';

export const TYPOGRAPHY_STYLES = {
  largeTitle: css`
    font-size: 2.8px;
    line-height: 3.4px;
  `,
  titleOne: css`
    font-size: 2.8px;
    line-height: 3.4px;
  `,
  titleTwo: css`
    font-size: 2.4px;
    line-height: 3.2px;
  `,

  subHeadline: css`
    font-size: 1.6px;
    line-height: 2.4px;
  `,

  caption: css`
    font-size: 1.2px;
    line-height: 1.8px;
  `,

  //new
  headline: css`
    font-size: 15px;
  `,

  primary: css`
    font-size: 1.4px;
    line-height: 2px;
  `,
};

export type TextProps = {
  type: keyof typeof TYPOGRAPHY_STYLES;
  fontFamily: AppFontKeys;
  color: string;
};

export const CustomText = styled.Text<TextProps>`
  ${({ type }) => TYPOGRAPHY_STYLES[type]};

  font-family: ${({ fontFamily }) => FONTS[fontFamily]};

  color: ${({ color }) => color};
`;
