import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { colors } from '../../utils/colors'
import { Button } from '../../components'

const Home = () => {
  return (
    <>
      <Row className={'my-5 py-5'}>
        <Col className={'d-flex flex-column align-items-center'}>
          <h1 style={{ color: colors.primaryLight.text }}>Jogo das sombras</h1>
        </Col>
      </Row>
      <Row className={'my-5'}>
        <Col className={'d-flex flex-column align-items-start'}>
          <h2 style={{ color: colors.primaryLight.text }}>Apresentação</h2>
        </Col>
      </Row>
      <Row className={'my-5'}>
        <Col className={'d-flex flex-column align-items-start'}>
          <p style={{ color: colors.primaryLight.text }}>
            Sendo a maior classe já conhecida do filo Arthropoda, os insetos possuem tamanhos e
            formas incríveis e horripilantes, tudo depende do seu gosto! Eles são segmentados e suas
            regiões principais são a cabeça, o tórax e o abdômen. São compostos por normalmente mais
            ou menos 20 segmentos separados em: 6 na cabeça, 3 no tórax e 11 no abdome. Sua
            característica mais marcante é a presença de 3 pares de pernas articulados, assim como
            seu esqueleto externo...... (vou terminar isso ainda kkkkk)
          </p>
        </Col>
      </Row>
      <Row className={'my-5'}>
        <Col className={'d-flex flex-column align-items-start'}>
          <h2 style={{ color: colors.primaryLight.text }}>Instruções</h2>
        </Col>
      </Row>
      <Row className={'my-5'}>
        <Col className={'d-flex flex-column align-items-start'}>
          <p style={{ color: colors.primaryLight.text }}>
            A seguir teremos um jogo. Para descobrir mais sobre cada inseto você deverá arrastar a
            sombra do mesmo até a imagem que o identifica corretamente. Caso acerte, você
            desbloqueará mais informações do mesmo ( Ordem, filo.. ).
          </p>
          <p style={{ color: colors.primaryLight.text }}>
            Ao final, aparecerá todas as ordens e os insetos a qual ela pertencem juntos em cada
            grupo.
          </p>
          <p style={{ color: colors.primaryLight.text }}>Boa sorte! :)</p>
        </Col>
      </Row>
      <Row className={'my-5'}>
        <Col className={'d-flex flex-column align-items-start'}>
          <Button text={'Jogar'} to={'/sombras'} nav />
        </Col>
      </Row>
    </>
  )
}

export default Home
