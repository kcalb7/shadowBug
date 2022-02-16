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
            Possuindo o título de ser a maior classe já conhecida do filo Arthropoda, os insetos
            possuem tamanhos e formas incríveis e horripilantes, tudo depende do seu gosto! Eles são
            bons em sobreviver e se adaptar e com isso sofrem ecdise, rastejam, andam e voam
            (holometábolos). São segmentados e suas regiões principais são a cabeça, o tórax e o
            abdômen, que são separados por normalmente mais ou menos 20 segmentos divididos em: 6 na
            cabeça, 3 no tórax e 11 no abdome.
          </p>
          <p style={{ color: colors.primaryLight.text }}>
            Sendo bilateralmente simétricos também são divididos em: longitudinal (r.
            anterior/posterior ou cefálico/caudal), dorsoventral (r. dorsal, ventral e
            superior/inferior) e transversal (indicando as regiões laterais). Sua característica
            mais marcante é a presença de 3 pares de pernas articulados que conferem melhor
            locomoção, assim como seu esqueleto externo que é composto por quitina (substância que
            confere mais rigidez, suporte e sustentação o que dá mais proteção ao inseto). Os
            insetos são de extrema importância para o ecossistema, ajudando na polinização, servindo
            de alimento (tanto para os animais quanto para os seres humanos) e também participam da
            decomposição e ciclagem de matéria.
          </p>
          <p style={{ color: colors.primaryLight.text }}>
            Por serem bons reprodutores, acabam se tornando pragas para alguns produtores, outros
            são perigosos para o ser humano (como o barbeiro) então, cuidado ao manuseá-los por aí,
            para não ocorrer nenhum acidente! Para conhecer alguns e saber mais sobre eles, leia as
            instruções!
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
            imagem do mesmo até a sombra que o identifica corretamente. Caso acerte, você
            desbloqueará mais informações do mesmo.
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
