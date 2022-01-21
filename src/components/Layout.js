import { useThemes } from '../contexts/ThemesContext'

const Layout = ({ children }) => {
  const { theme } = useThemes()

  const background =
    theme === 'dark'
      ? 'body {background-color: #404042; color: gray;}'
      : 'body {background-color: #fff; color: #000;}'

  return (
    <>
      <style>{background}</style>
      {children}
    </>
  )
}

export default Layout
