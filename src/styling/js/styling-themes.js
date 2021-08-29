import { colorNames } from "functions/staff-styling-color-names"

export const themes = {
  green: 'green',
  blue: 'blue',
  purple: 'purple',
  red: 'red',
  orange: 'orange',
  steelblue: 'steelblue',
  greyOlive: 'greyOlive',
  greyBlue: 'greyBlue',
  greyPurple: 'greyPurple',
  greyRed: 'greyRed',
  greyOrange: 'greyOrange'
}

export const colors = {
  white: `${colorNames.white}`,
  black: `${colorNames.black}`,
  green: '#54e602',
  blue: '#5ed0fd',
  purple: '#af78ff',
  red: '#ff7878',
  orange: '#fd9866',
  steelblue: `${colorNames.steelblue}`,
  grey: `#c4c4c4`,
  olive: '#68b33c'
}

export const getTheme = (currentTheme, defaultTheme) => {
  return currentTheme === 'default' ? defaultTheme : currentTheme
}
