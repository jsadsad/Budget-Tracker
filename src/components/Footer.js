import { Card, Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <Card.Footer className="fixed-bottom text-muted text-center">
      <Container>
        <Row>
          <Col>
            <a
              href="https://github.com/jsadsad/react-budget-app"
              target="_blank"
              style={{
                textDecoration: 'none',
                fontSize: '1rem',
                color: '#58987A',
              }}
            >
              Github
            </a>
          </Col>
          <Col>
            <a
              href="https://jsadsad.io/"
              target="_blank"
              style={{
                textDecoration: 'none',
                fontSize: '1rem',
                color: '#58987A',
              }}
            >
              @jsadsad
            </a>
          </Col>
          <Col>
            <a
              href="https://www.linkedin.com/in/joshsad2/"
              target="_blank"
              style={{
                textDecoration: 'none',
                fontSize: '1rem',
                color: '#58987A',
              }}
            >
              LinkedIn
            </a>
          </Col>
        </Row>
      </Container>
    </Card.Footer>
  )
}

export default Footer
