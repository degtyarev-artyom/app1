export const themes = {
  greenBlue: 'greenBlue',
  blueGreen: 'blueGreen',
  green: 'green',
  blue: 'blue',
  purple: 'purple',
  red: 'red',
  orange: 'orange',
}

export const colors = {
  orange: '#ffa500',
  green: '#54e602',
  blue: '#02e6e6',
  purple: '#af78ff',
  red: '#ff7878',
  orange: '#ff9a68',
}

export const getTheme = (currentTheme, defaultTheme) => {
  return currentTheme === 'default' ? defaultTheme : currentTheme
}
