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

export const toRGB = (r, g, b) => `rgba(${r}, ${g}, ${b}, 1)`
export const toHex = (r, g, b) => `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`

/* lighten */
export const lighten = (color, percent = 0, rgb = false) => {
  if (percent <= 0) return color
  percent = percent > 100 ? 100 : percent
  const getPercentCount = (count, percent) => Math.round((255 - count) * 0.01 * percent)
  const max = code => code > 255 ? 255 : code

  const rCode = parseInt(color.slice(1, 3), 16)
  const gCode = parseInt(color.slice(3, 5), 16)
  const bCode = parseInt(color.slice(5, 7), 16)

  const minCode = Math.min(rCode, gCode, bCode)
  const percentCount = getPercentCount(minCode, percent)

  const r = max(rCode + percentCount)
  const g = max(gCode + percentCount)
  const b = max(bCode + percentCount)

  return rgb ? toRGB(r, g, b) : toHex(r, g, b)
}

/* darken */
export const darken = (color, percent = 0, rgb = false) => {
  if (percent <= 0) return color
  percent = percent > 100 ? 100 : percent
  const getPercentCount = (count, percent) => Math.round(count * 0.01 * percent)
  const min = code => code < 0 ? 0 : code

  const rCode = parseInt(color.slice(1, 3), 16)
  const gCode = parseInt(color.slice(3, 5), 16)
  const bCode = parseInt(color.slice(5, 7), 16)

  const maxCode = Math.max(rCode, gCode, bCode)
  const percentCount = getPercentCount(maxCode, percent)

  const r = min(rCode - percentCount)
  const g = min(gCode - percentCount)
  const b = min(bCode - percentCount)

  return rgb ? toRGB(r, g, b) : toHex(r, g, b)
}

/* light */
export const light = (color, percent = 0, rgb = false) => {
  if (percent <= 0) return color
  percent = percent > 100 ? 100 : percent
  const getPercentCount = (count, percent) => Math.round((255 - count) * 0.01 * percent)

  const rCode = parseInt(color.slice(1, 3), 16)
  const gCode = parseInt(color.slice(3, 5), 16)
  const bCode = parseInt(color.slice(5, 7), 16)

  const r = rCode + getPercentCount(rCode, percent)
  const g = gCode + getPercentCount(gCode, percent)
  const b = bCode + getPercentCount(bCode, percent)

  return rgb ? toRGB(r, g, b) : toHex(r, g, b)
}

/* dark */
export const dark = (color, percent = 0, rgb = false) => {
  if (percent <= 0) return color
  percent = percent > 100 ? 100 : percent
  const getPercentCount = (count, percent) => Math.round(count * 0.01 * percent)

  const rCode = parseInt(color.slice(1, 3), 16)
  const gCode = parseInt(color.slice(3, 5), 16)
  const bCode = parseInt(color.slice(5, 7), 16)

  const r = rCode - getPercentCount(rCode, percent)
  const g = gCode - getPercentCount(gCode, percent)
  const b = bCode - getPercentCount(bCode, percent)

  return rgb ? toRGB(r, g, b) : toHex(r, g, b)
}
