import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
// import ThemesContext from '../contexts/ThemesContext'
import { useThemes } from '../contexts/ThemesContext'

import Moon from '../images/moon.svg'
import Sun from '../images/sun.svg'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemes()

  return (
    <Button
      style={{ background: 'none', border: 'none', boxShadow: 'none' }}
      onClick={() => {
        setTheme(theme === 'dark' ? 'light ' : 'dark')
        localStorage.setItem('theme', theme === 'dark' ? 'light ' : 'dark')
      }}
    >
      <img
        style={{
          height: '22px',
          width: '22px',
          minWidth: '22px',
          marginBottom: '0',
        }}
        src={theme == 'dark' ? Sun : Moon}
        alt="theme"
      />
    </Button>
  )
}

export default ThemeSwitcher
