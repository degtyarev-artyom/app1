import { staffThemes } from "styling/staff/staff-styling-themes"

export const staffGetThemeLocalStorage = () => {
  const theme = localStorage.getItem('staffTheme')
  const allowThemes = Object.values(staffThemes)
  return allowThemes.includes(theme) ? theme : 'default'
}

export const staffSetThemeLocalStorage = theme => {
  localStorage.setItem('staffTheme', theme)
}

/* screen-size */
// const [screenSize, setScreenSize] = useState(window.innerWidth);
// useMemo(() => window.addEventListener('resize', () => setScreenSize(window.innerWidth)), []);
