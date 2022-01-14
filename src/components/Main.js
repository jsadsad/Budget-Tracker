import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import ThemeContext from '../contexts/ThemesContext'

const Main = () => {
  const { theme } = useContext(ThemeContext)

  return <Container fluid className={theme}></Container>
}

export default Main
