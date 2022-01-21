import React, { useContext } from 'react'
import Header from './Header'

// import ThemeContext from '../contexts/ThemesContext'
import { useThemes } from '../contexts/ThemesContext'

const Layout = ({ children }) => {
  const { theme } = useThemes()
  const background =
    theme === 'dark'
      ? 'body {background-color: #404042; color: gray;}'
      : 'body {background-color: #fff; color: #000;}'
  return (
    <>
      {/* <Helmet> */}
      <style>{background}</style>
      {/* </Helmet> */}
      {/* <Header /> */}
      {children}
    </>
  )
}

export default Layout
