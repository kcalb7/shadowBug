import React, { useContext } from 'react'
import { Container, Col } from './styles'
import { Row } from 'react-bootstrap'
import { Button } from '../'
import { DefaultStatesContext } from '../../contexts/defaultStates'

export const Header = () => {
  const { pushHistory } = useContext(DefaultStatesContext)

  const reset = () => {
    localStorage.removeItem('bugs')
    document.location.reload()
  }

  return (
    <Container>
      <Row>
        <Col sm={5} className={'justify-content-start'}>
          <Button text={'Shadow Bugs'} onClick={() => pushHistory('/')} />
        </Col>
        <Col sm={3} className={'no-gutter'}>
          <Button text={'Jogar'} onClick={() => pushHistory('/sombras')} />
        </Col>
        <Col sm={3} className={'no-gutter'}>
          <Button text={'Quem somos'} onClick={() => pushHistory('/quem-somos')} />
        </Col>
        <Col sm={1} className={'no-gutter'}>
          <Button text={'Reset'} onClick={() => reset()} />
        </Col>
      </Row>
    </Container>
  )
}
