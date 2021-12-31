import React, { useContext } from 'react'
import { Container, Col } from './styles'
import { Row } from 'react-bootstrap'
import { Button } from '../'
import { DefaultStatesContext } from '../../contexts/defaultStates'

export const Header = () => {
  const { pushHistory } = useContext(DefaultStatesContext)

  return (
    <Container>
      <Row>
        <Col sm={6} className={'justify-content-start'}>
          <Button text={'Shadow Bugs'} onClick={() => pushHistory('/')} />
        </Col>
        <Col sm={3} className={'no-gutter'}>
          <Button text={'Jogar'} onClick={() => pushHistory('/sombras')} />
        </Col>
        <Col sm={3} className={'no-gutter'}>
          <Button text={'Quem somos'} onClick={() => pushHistory('/quem-somos')} />
        </Col>
      </Row>
    </Container>
  )
}
