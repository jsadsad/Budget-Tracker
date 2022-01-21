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

  const darkSwitch = () => (
    <BootstrapSwitchButton
      checked={true}
      onlabel={moon}
      offlabel={sun}
      onstyle={theme}
      offstyle={otherTheme}
      size="sm"
      onChange={() => {
        setTheme(otherTheme)
        localStorage.setItem('theme', otherTheme)
      }}
    />
  )

  const lightSwitch = () => (
    <BootstrapSwitchButton
      checked={true}
      onlabel={sun}
      offlabel={moon}
      onstyle={theme}
      offstyle={otherTheme}
      size="sm"
      onChange={() => {
        setTheme(otherTheme)
        localStorage.setItem('theme', otherTheme)
      }}
    />
  )

  return (
    <>
      {/* <BootstrapSwitchButton
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
      /> */}
      {theme === 'light' ? lightSwitch() : darkSwitch()}
    </>
  )
}

export default ThemeSwitcher
