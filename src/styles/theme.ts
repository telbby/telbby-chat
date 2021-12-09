const defaultTheme = {
  colorPrimary: '#4A7AFF',
  colorPrimaryDark: '#0053BF',
  colorPrimaryLight: '#DCE7F9',
  colorSub: '#F0C630',
  colorSubLight: '#F2D15C',
  colorBg: '#F4F7FF',
  colorWhite: '#FFFFFF',
  colorGray1: '#7F8086',
  colorGray2: '#9196AA',
  colorGray3: '#C4C4C4',
  colorGray4: '#E5E5E5',
  colorIndigo: '#465172',
  colorBrown: '#554545',
  colorSuccess: '#6DCCA3',
  colorError: '#F45452',

  fontBasic: '"Noto Sans KR", sans-serif',
  fontCoding: '"D2Coding", monospace',
  fontCodingBold: '"D2CodingBold", monospace',
};

const primaryTheme = {
  colorOriginPrimary: defaultTheme.colorPrimary,
  colorDefault: defaultTheme.colorPrimary,
  colorReverse: defaultTheme.colorBg,
  colorGray: defaultTheme.colorGray4,
  colorSubGray: defaultTheme.colorGray3,

  colorFeedbackCount: defaultTheme.colorSubLight,
  colorBottomWrapper: defaultTheme.colorSubLight,
  colorBottomText: defaultTheme.colorBrown,
  colorBottomButton: defaultTheme.colorPrimary,

  fontBasic: defaultTheme.fontBasic,
  fontCoding: defaultTheme.fontCoding,
  fontCodingBold: defaultTheme.fontCodingBold,
};
const subTheme = {
  colorOriginPrimary: defaultTheme.colorPrimary,
  colorDefault: defaultTheme.colorPrimaryLight,
  colorReverse: defaultTheme.colorPrimary,
  colorGray: defaultTheme.colorGray1,
  colorSubGray: defaultTheme.colorGray3,

  colorFeedbackCount: defaultTheme.colorSuccess,
  colorBottomWrapper: defaultTheme.colorPrimary,
  colorBottomText: defaultTheme.colorWhite,
  colorBottomButton: defaultTheme.colorSubLight,

  fontBasic: defaultTheme.fontBasic,
  fontCoding: defaultTheme.fontCoding,
  fontCodingBold: defaultTheme.fontCodingBold,
};

export default defaultTheme;
export { primaryTheme, subTheme };
