import React, { useContext } from 'react'
import { Form, Navbar, Nav, FormControl, Button } from 'react-bootstrap'
// import ThemesContext from '../contexts/ThemesContext'
import ThemeSwitcher from './ThemeSwitcher'

import { useThemes } from '../contexts/ThemesContext'

const Header = () => {
  const { theme } = useThemes()

  return (
    <>
      <Navbar bg={theme} variant={theme}>
        <Nav className="mr-auto"></Nav>
        <ThemeSwitcher />
      </Navbar>
    </>
  )
}

export default Header
