import { colorNames } from "styling/js/color-names"

export const staffThemesMain = {
  default: 'default',
  green: 'green',
  purple: 'purple',
  blue: 'blue',
  red: 'red',
  orange: 'orange',
  grey: 'grey'
}

export const staffColorsMain = {
  white: `${colorNames.white}`,
  black: `${colorNames.black}`,
  green: '#b3ddb8',
  purple: '#cdb6df',
  blue: '#b6d1fb',
  red: '#ffc3c3',
  orange: '#ffca84',
  grey: '#e2e2e2',
}

export const staffThemesCode = {
  darcula: 'darcula',
  vscode: 'vscode',
}

export const staffColorsCode = {
  [staffThemesCode.darcula]: {
    bracket: '#f8bb51',
    component: '#f8bb51',
    prop: '#cccccc',
    string: '#7d9b63',
    text: '#cccccc',
    background: '#242424'
  },
  [staffThemesCode.vscode]: {
    bracket: '#8c8c8c',
    component: '#4Ec9b0',
    prop: '#9cdcfe',
    string: '#c89178',
    text: '#d4d4d4',
    background: '#000000'
  }
}

export const themeTypeLS = {
  themeMain: 'themeMain',
  themeCode: 'themeCode'
}
