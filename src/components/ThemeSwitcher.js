import { useThemes } from '../contexts/ThemesContext'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const ThemeSwitcher = () => {
  const { theme, setTheme, otherTheme } = useThemes()

  const checked = theme === 'dark'

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

  return (
    <>
      <BootstrapSwitchButton
        onlabel={sun}
        offlabel={moon}
        checked={checked}
        onstyle={otherTheme}
        offstyle={theme}
        size="sm"
        onChange={() => {
          setTheme(otherTheme)
          localStorage.setItem('theme', otherTheme)
        }}
      />
    </>
  )
}

export default ThemeSwitcher
