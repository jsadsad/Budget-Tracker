import React, { useContext } from 'react'
import { Form, Navbar, Nav, FormControl, Button } from 'react-bootstrap'
import ThemeContext from '../contexts/ThemesContext'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  const { theme } = useContext(ThemeContext)

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
