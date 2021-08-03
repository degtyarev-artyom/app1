/* screen-size */
// const [screenSize, setScreenSize] = useState(window.innerWidth);
// useMemo(() => window.addEventListener('resize', () => setScreenSize(window.innerWidth)), []);

export const staffGetThemeLocalStorage = () => localStorage.getItem('staffTheme')

export const staffSetThemeLocalStorage = theme => {
  localStorage.setItem('staffTheme', theme)
}

