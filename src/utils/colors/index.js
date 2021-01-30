const mainColor = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  white: 'white',
  black: 'black',
};

export const colors = {
  primary: mainColor.green1,
  secondary: mainColor.dark1,
  white: mainColor.white,
  black: mainColor.black,
  text: {
    primary: mainColor.dark1,
    secondary: mainColor.grey1,
    menuActive: mainColor.green1,
    menuInactive: mainColor.dark2,
    subtitle: mainColor.dark3,
  },
  button: {
    primary: {
      background: mainColor.green1,
      text: mainColor.white,
    },
    secondary: {
      background: mainColor.white,
      text: mainColor.dark1,
    },
  },
  border: mainColor.grey2,
  cardLight: mainColor.green2,
};
