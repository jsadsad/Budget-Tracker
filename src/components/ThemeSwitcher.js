import { Button } from 'react-bootstrap'
import { useThemes } from '../contexts/ThemesContext'

import Moon from '../images/moon.svg'
import Sun from '../images/sun.svg'

const ThemeSwitcher = () => {
  const { theme, setTheme, otherTheme } = useThemes()

  return (
    <Button
      style={{ border: 'none', boxShadow: 'none' }}
      size="sm"
      variant={otherTheme}
      onClick={() => {
        setTheme(otherTheme)
        localStorage.setItem('theme', otherTheme)
      }}
    >
      <img
        style={{
          height: '30px',
          width: '30px',
        }}
        src={theme === 'dark' ? Sun : Moon}
        alt="theme switcher"
      />
    </Button>
  )
}

export default ThemeSwitcher
