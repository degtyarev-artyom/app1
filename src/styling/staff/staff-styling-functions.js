import { staffThemesCode, staffThemes, themeTypeLS } from "styling/staff/staff-styling-themes"

export const getThemeLS = () => {
  const theme = localStorage.getItem(themeTypeLS.theme)
  const allowThemes = Object.values(staffThemes)
  return allowThemes.includes(theme) ? theme : 'default'
}

export const setThemeLS = theme => {
  localStorage.setItem(themeTypeLS.theme, theme)
}

export const getTheme = (currentTheme, defaultTheme) => {
  return currentTheme === 'default' ? defaultTheme : currentTheme
}

export const getThemeCodeLS = () => {
  const theme = localStorage.getItem(themeTypeLS.themeCode)
  const allowThemes = Object.values(staffThemesCode)
  return allowThemes.includes(theme) ? theme : 'darcula'
}

export const setThemeCodeLS = theme => {
  localStorage.setItem(themeTypeLS.themeCode, theme)
}

/* screen-size */
// const [screenSize, setScreenSize] = useState(window.innerWidth)
// useMemo(() => window.addEventListener('resize', () => setScreenSize(window.innerWidth)), [])