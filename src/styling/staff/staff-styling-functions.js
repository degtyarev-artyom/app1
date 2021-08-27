import { staffThemesCode, staffThemesMain, themeTypeLS } from "styling/staff/staff-styling-themes"

export const getThemeMainLS = () => {
  const theme = localStorage.getItem(themeTypeLS.themeMain)
  const allowThemes = Object.values(staffThemesMain)
  return allowThemes.includes(theme) ? theme : 'default'
}

export const setThemeMainLS = theme => {
  localStorage.setItem(themeTypeLS.themeMain, theme)
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