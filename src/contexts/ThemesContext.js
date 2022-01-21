import React, { useState, useContext } from 'react'

const ThemesContext = React.createContext()

export const useThemes = () => {
  return useContext(ThemesContext)
}

export const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  const otherTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <ThemesContext.Provider value={{ theme, setTheme, otherTheme }}>
      {children}
    </ThemesContext.Provider>
  )
}
