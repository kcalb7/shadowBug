import React, { useContext } from 'react'
import { Container, Col, Nav, Hamburger } from './styles'
import { Row } from 'react-bootstrap'
import { Button } from '../'
import { BugsContext, MenuContext } from '../../contexts'

export const Header = () => {
  const { handleMenu } = useContext(MenuContext)
  const { reset } = useContext(BugsContext)

  return (
    <Nav>
      <Container>
        <Row className={''}>
          <Col xs={2} className={'d-lg-none justify-content-start'}>
            <Hamburger onClick={() => handleMenu()}>
              <div />
              <div />
              <div />
            </Hamburger>
          </Col>
          <Col xs={8} lg={4} className={'justify-content-center justify-content-lg-start'}>
            <Button text={'Shadow Bugs'} to={'/'} nav />
          </Col>
          <Col lg={3} className={'no-gutter d-none d-lg-flex'}>
            <Button text={'Jogar'} to={'/sombras'} nav />
          </Col>
          <Col lg={3} className={'no-gutter d-none d-lg-flex'}>
            <Button text={'Quem somos'} to={'/quem-somos'} nav />
          </Col>
          <Col lg={2} className={'no-gutter d-none d-lg-flex'}>
            <Button text={'Reset'} onClick={() => reset()} />
          </Col>
        </Row>
      </Container>
    </Nav>
  )
}
