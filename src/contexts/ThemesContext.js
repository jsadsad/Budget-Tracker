import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ThemesContext = React.createContext()

const useTheme = () => useContext(ThemesContext)

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = React.useState({
    dark: false,
    hasThemeLoaded: false,
  })
  React.useEffect(() => {
    const lsDark = localStorage.getItem('dark') === 'true'
    setThemeState({ ...themeState, dark: lsDark, hasThemeLoaded: true })
  }, [])

  return [themeState, setThemeState]
}

export const ThemesProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode()

  const toggle = () => {
    const dark = !themeState.dark
    localStorage.setItem('theme', JSON.stringify(dark))
    return setThemeState({ ...themeState, dark })
  }

  return (
    <ThemesContext.Provider value={{ themeState, toggle }}>
      {children}
    </ThemesContext.Provider>
  )
}

export default ThemesContext
