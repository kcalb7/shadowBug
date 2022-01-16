import React from 'react'
import { Container, Col, Nav } from './styles'
import { Row } from 'react-bootstrap'
import { Button } from '../'

export const Header = () => {
  const reset = () => {
    localStorage.removeItem('bugs')
    document.location.reload()
  }

  return (
    <Nav>
      <Container>
        <Row>
          <Col sm={4} className={'justify-content-center justify-content-sm-start'}>
            <Button text={'Shadow Bugs'} to={'/'} nav />
          </Col>
          <Col sm={3} className={'no-gutter d-none d-sm-flex'}>
            <Button text={'Jogar'} to={'/sombras'} nav />
          </Col>
          <Col sm={3} className={'no-gutter d-none d-sm-flex'}>
            <Button text={'Quem somos'} to={'/quem-somos'} nav />
          </Col>
          <Col sm={2} className={'no-gutter d-none d-sm-flex'}>
            <Button text={'Reset'} onClick={() => reset()} />
          </Col>
        </Row>
      </Container>
    </Nav>
  )
}
