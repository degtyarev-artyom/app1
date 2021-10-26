export enum themes {
  green = 'green',
  blue = 'blue',
  purple = 'purple',
  red = 'red',
  orange = 'orange',
  steelblue = 'steelblue',
  greyOlive = 'greyOlive',
  greyBlue = 'greyBlue',
  greyPurple = 'greyPurple',
  greyRed = 'greyRed',
  greyOrange = 'greyOrange'
}

export enum colors {
  white = '#ffffff',
  black = '#000000',
  green = '#54e602',
  blue = '#5ed0fd',
  purple = '#af78ff',
  red = '#ff7878',
  orange = '#fd9866',
  steelblue = '#4682b4',
  grey = '#c4c4c4',
  olive = '#68b33c'
}

export const getTheme = (currentTheme: string, defaultTheme: string): string => {
  return currentTheme === 'default' ? defaultTheme : currentTheme
}
