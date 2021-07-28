export const themes = {
  default: 'default',
  green: 'green',
  purple: 'purple',
  blue: 'blue',
  red: 'red',
  orange: 'orange',
  grey: 'grey',
}

export const colors = {
  green: '#b3ddb8',
  purple: '#cdb6df',
  blue: '#b6d1fb',
  red: '#ffc3c3',
  orange: '#ffca84',
  grey: '#e2e2e2',
  darkgrey: '#bbbbbb',
}

export const getTheme = (currentTheme, defaultTheme) => {
  return currentTheme === 'default' ? defaultTheme : currentTheme
}

/* lighten */
export const lighten = (color, count = 0) => {
  if (count === 0) return color
  const max = code => code > 255 ? 255 : code

  const r = max(parseInt(color.slice(1, 3), 16) + count)
  const g = max(parseInt(color.slice(3, 5), 16) + count)
  const b = max(parseInt(color.slice(5, 7), 16) + count)
  return `rgba(${r}, ${g}, ${b}, 1)`
}

/* darken */
export const darken = (color, count = 0) => {
  if (count === 0) return color
  const min = code => code < 0 ? 0 : code

  const r = min(parseInt(color.slice(1, 3), 16) - count)
  const g = min(parseInt(color.slice(3, 5), 16) - count)
  const b = min(parseInt(color.slice(5, 7), 16) - count)
  return `rgba(${r}, ${g}, ${b}, 1)`
}

/* light */
export const light = (color, percent = 0) => {
  if (percent <= 0) return color
  percent = percent > 100 ? 100 : percent
  const getPercentCount = (count, percent) => Math.round((255 - count) * 0.01 * percent)

  const rCode = parseInt(color.slice(1, 3), 16)
  const gCode = parseInt(color.slice(3, 5), 16)
  const bCode = parseInt(color.slice(5, 7), 16)
  const r = rCode + getPercentCount(rCode, percent)
  const g = gCode + getPercentCount(gCode, percent)
  const b = bCode + getPercentCount(bCode, percent)

  return `rgba(${r}, ${g}, ${b}, 1)`
}

/* dark */
export const dark = (color, percent = 0) => {
  if (percent <= 0) return color
  percent = percent > 100 ? 100 : percent
  const getPercentCount = (count, percent) => Math.round(count * 0.01 * percent)

  const rCode = parseInt(color.slice(1, 3), 16)
  const gCode = parseInt(color.slice(3, 5), 16)
  const bCode = parseInt(color.slice(5, 7), 16)
  const r = rCode - getPercentCount(rCode, percent)
  const g = gCode - getPercentCount(gCode, percent)
  const b = bCode - getPercentCount(bCode, percent)

  return `rgba(${r}, ${g}, ${b}, 1)`
}
