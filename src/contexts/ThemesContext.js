import React from 'react'

const ThemesContext = React.createContext({
  theme: 'light',
  setTheme: () => {},
})

export default ThemesContext
