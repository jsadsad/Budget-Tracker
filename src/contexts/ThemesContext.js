import React, { useState, useContext } from 'react'

const ThemesContext = React.createContext()

export const useThemes = () => {
  return useContext(ThemesContext)
}

export const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  const switchTheme = () => {
    if (theme === 'dark') return 'light'
    else return 'dark'
  }

  return (
    <ThemesContext.Provider value={{ theme, setTheme, switchTheme }}>
      {children}
    </ThemesContext.Provider>
  )
}
