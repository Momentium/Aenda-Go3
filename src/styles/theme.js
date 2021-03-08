import { css } from 'styled-components';

// ${({theme}) => theme.calcVW()}
const calcRem = (size) => `${size / 16}rem`;
const calcVW = (size) => `${size / 1920 * 100}vw`;

const flex = (_jc='flex-start', _ai='stretch', _dir='row') => 
css`
  display: flex;
  justify-content: ${_jc};
  align-items: ${_ai};
  flex-direction: ${_dir};
`;

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
};

const colors = {
  weight_black: "#111111",
  black: "#333333",
  light_black: "#555555",
  blue: "#5a32de",
  red: "#fe573d",
};

// const paddings = {
//   small: calcRem(8),
//   base: calcRem(10),
//   lg: calcRem(12),
//   xl: calcRem(14),
//   xxl: calcRem(16),
//   xxxl: calcRem(18),
// };

// const margins = {
//   small: calcRem(8),
//   base: calcRem(10),
//   lg: calcRem(12),
//   xl: calcRem(14),
//   xxl: calcRem(16),
//   xxxl: calcRem(18),
// };

// const interval = {
//   base: calcRem(50),
//   lg: calcRem(100),
//   xl: calcRem(150),
//   xxl: calcRem(200),
// };

// const verticalInterval = {
//   base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
// };

// const deviceSizes = {
//   mobileS: "320px",
//   mobileM: "375px",
//   mobileL: "450px",
//   tablet: "768px",
//   tabletL: "1024px",
// };



// const device = {
//   mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
//   mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
//   mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
//   tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
//   tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
// };

const theme = {
  fontSizes,
  colors,
  calcRem,
  calcVW,
  flex,
};

export default theme;