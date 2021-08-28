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
}

export const staffThemesCode = {
  darcula: 'darcula',
  vscode: 'vscode',
  monokai: 'monokai',
}

export const staffColorsCode = {
  darcula: {
    bracket: '#f8bb51',
    component: '#f8bb51',
    prop: '#cccccc',
    equal: '#cccccc',
    string: '#7d9b63',
    text: '#cccccc',
    background: '#242424'
  },
  vscode: {
    bracket: '#8c8c8c',
    component: '#4Ec9b0',
    prop: '#9cdcfe',
    equal: '#d4d4d4',
    string: '#c89178',
    text: '#d4d4d4',
    background: '#1e1e1e'
  },
  monokai: {
    bracket: '#f0f7f1',
    component: '#65d7Ed',
    prop: '#a6e22e',
    equal: '#f92672',
    string: '#e6d55f',
    text: '#f8f8f2',
    background: '#272822'
  }
}

export const themeTypeLS = {
  theme: 'theme',
  themeCode: 'themeCode'
}
