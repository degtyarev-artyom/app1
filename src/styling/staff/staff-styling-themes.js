import { colorNames } from "styling/js/color-names"

export const staffThemes = {
  default: 'default',
  green: 'green',
  purple: 'purple',
  blue: 'blue',
  red: 'red',
  orange: 'orange',
  grey: 'grey'
}

export const staffColors = {
  white: `${colorNames.white}`,
  black: `${colorNames.black}`,
  green: '#b3ddb8',
  purple: '#cdb6df',
  blue: '#b6d1fb',
  red: '#ffc3c3',
  orange: '#ffca84',
  grey: '#e2e2e2',
  codeGreen: '#7d9b63',
  codeGrey: '#cccccc',
  codeDark: '#242424',
  codeYellow: '#f8bb51'
}

export const staffGetTheme = (currentTheme, defaultTheme) => {
  return currentTheme === 'default' ? defaultTheme : currentTheme
}
