export const themes = {
  green: 'green',
  blue: 'blue',
  purple: 'purple',
  red: 'red',
  orange: 'orange',
}

export const colors = {
  green: '#54e602',
  blue: '#5ed0fd',
  purple: '#af78ff',
  red: '#ff7878',
  orange: '#ff9a68',
}

export const getTheme = (currentTheme, defaultTheme) => {
  return currentTheme === 'default' ? defaultTheme : currentTheme
}
