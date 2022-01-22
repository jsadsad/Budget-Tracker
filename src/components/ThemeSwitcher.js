import { useThemes } from '../contexts/ThemesContext'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const ThemeSwitcher = () => {
  const { theme, setTheme, otherTheme } = useThemes()

  const sun = (
    <span aria-label="a bright sun" role="img">
      🌞
    </span>
  )

  const moon = (
    <span aria-label="a gorgeous moon" role="img">
      🌕
    </span>
  )

  const displaySwitch = () => {
    if (theme === 'light') {
      // Light Theme
      return (
        <BootstrapSwitchButton
          onlabel={sun}
          offlabel={moon}
          onstyle="secondary"
          offstyle="secondary"
          size="sm"
          onChange={() => {
            setTheme(otherTheme)
            localStorage.setItem('theme', otherTheme)
          }}
        />
      )
    } else if (theme === 'dark') {
      // Dark Theme
      return (
        <BootstrapSwitchButton
          checked
          onlabel={sun}
          offlabel={moon}
          onstyle="secondary"
          offstyle="secondary"
          size="sm"
          onChange={() => {
            setTheme(otherTheme)
            localStorage.setItem('theme', otherTheme)
          }}
        />
      )
    }
  }

  return <>{displaySwitch()}</>
}

export default ThemeSwitcher
