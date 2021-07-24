export const themes = {
  default: 'default',
  green: 'green',
  purple: 'purple',
  blue: 'blue',
  red: 'red',
  orange: 'orange',
}

export const colors = {
  green: '#b3ddb8',
  purple: '#cdb6df',
  blue: '#b6d1fb',
  red: '#ffc3c3',
  orange: '#ffca84',
}

export const getTheme = (currentTheme, defaultTheme) => {
  return currentTheme === 'default' ? defaultTheme : currentTheme
}