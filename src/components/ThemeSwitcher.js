import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import ThemesContext from '../contexts/ThemesContext'

import Moon from '../images/moon.svg'
import Sun from '../images/sun.svg'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemesContext)

  return (
    <Button
      onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
      style={{ background: 'none', border: 'none', boxShadow: 'none' }}
    >
      <img
        src={theme == 'dark' ? Sun : Moon}
        style={{
          height: '22px',
          width: '22px',
          minWidth: '22px',
          marginBottom: '0',
        }}
        alt="theme"
      />
    </Button>
  )
}

export default ThemeSwitcher
