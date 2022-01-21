import React, { useState, useContext } from 'react'

const ThemesContext = React.createContext()

export const useThemes = () => {
  return useContext(ThemesContext)
}

export const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  return (
    <ThemesContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemesContext.Provider>
  )
}
