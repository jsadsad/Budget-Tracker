import React from 'react'
import { Card } from 'react-bootstrap'

const Footer = () => {
  return (
    <Card.Footer
      className="text-muted"
      style={{
        backgroundColor: 'lightgray',
        position: 'absolute',
        bottom: '0px',
      }}
    >
      JCS
    </Card.Footer>
  )
}

export default Footer
