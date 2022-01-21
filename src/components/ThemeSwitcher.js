import { Button } from 'react-bootstrap'
import { useThemes } from '../contexts/ThemesContext'

import Moon from '../images/moon.svg'
import Sun from '../images/sun.svg'

const ThemeSwitcher = () => {
  const { theme, setTheme, switchTheme } = useThemes()

  return (
    <Button
      style={{ background: 'none', border: 'none', boxShadow: 'none' }}
      onClick={() => {
        setTheme(switchTheme())
        localStorage.setItem('theme', switchTheme())
      }}
    >
      <img
        style={{
          height: '22px',
          width: '22px',
          minWidth: '22px',
          marginBottom: '0',
        }}
        src={theme === 'dark' ? Sun : Moon}
        alt="theme switcher"
      />
    </Button>
  )
}

export default ThemeSwitcher
