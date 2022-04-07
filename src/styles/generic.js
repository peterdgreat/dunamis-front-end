/* eslint-disable max-len */
import { device } from './mediaQueries';

const FONT_SIZES = {
  h1: {
    desktop: { size: '36', height: '47' },
    mobile: { size: '18', height: '23' },
  },
  h2: {
    desktop: { size: '30', height: '39' },
    mobile: { size: '16', height: '21' },
  },
  subtitle1: {
    desktop: { size: '24', height: '29' },
    mobile: { size: '16', height: '21' },
  },
  subtitle2: {
    desktop: { size: '22', height: '29' },
    mobile: { size: '15', height: '20' },
  },
  subtitle3: {
    desktop: { size: '20', height: '26' },
    mobile: { size: '14', height: '18' },
  },
  body1: {
    desktop: { size: '18', height: '23' },
    mobile: { size: '14', height: '18' },
  },
  body2: {
    desktop: { size: '17', height: '22' },
    mobile: { size: '12', height: '16' },
  },
  body3: {
    desktop: { size: '16', height: '21' },
    mobile: { size: '12', height: '16' },
  },
  button1: {
    desktop: { size: '16', height: '21' },
    mobile: { size: '12', height: '16' },
  },
  button2: {
    desktop: { size: '14', height: '18' },
    mobile: { size: '12', height: '14' },
  },
  small: {
    desktop: { size: '14', height: '16' },
    mobile: { size: '11', height: '14' },
  },
};

const getFonts = ({
  style = 'normal', weight = '500', size, height,
} = {}) => `
    font-family: DM Sans;
    font-style: ${style};
    font-weight: ${weight};
    font-size: ${size ? `${size}px` : 'inherit'};
    line-height: ${height ? `${height}px` : 'inherit'};
`;

const getMediaQueryFontDetail = ({ variant, weight }) => `
    ${getFonts({ size: FONT_SIZES[variant].mobile.size, height: FONT_SIZES[variant].mobile.height, weight })}
    @media ${device.md} {
        ${getFonts({ size: FONT_SIZES[variant].desktop.size, height: FONT_SIZES[variant].desktop.height, weight })}
    }
    
`;

const getTypographyFontStyle = ({ variant, weight }) => getMediaQueryFontDetail({ variant, weight });

export {
  getFonts,
  getTypographyFontStyle,
};
