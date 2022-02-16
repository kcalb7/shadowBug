import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { colors } from '../../utils/colors'

const AboutUs = () => {
  return (
    <>
      <Row className={'my-0 my-lg-5 py-5'}>
        <Col className={'d-flex flex-column align-items-center'}>
          <h2 style={{ color: colors.primaryLight.text }}>Quem somos</h2>
        </Col>
      </Row>
      <Row className={'my-3 my-lg-5'}>
        <Col className={'d-flex flex-column align-items-start'}>
          <p style={{ color: colors.primaryLight.text }}>
            Este trabalho foi realizado pela aluna Michelli Arantes Braga discente no curso de
            Ciências Biológicas Licenciatura para a disciplina de Entomologia ministrada pelo
            docente Dr. Juliano Fiorelini Nunes.
          </p>
        </Col>
      </Row>
      <Row className={'my-5'}>
        <Col className={'d-flex flex-column align-items-center'}>
          <h4 style={{ color: colors.primaryLight.text }}>Referências utilizadas</h4>
        </Col>
      </Row>
      <Row className={'my-5'}>
        <Col className={'d-flex flex-column align-items-start'}>
          <ul style={{ color: colors.primaryLight.text }}>
            <li>
              GULLAN,P. J. CRANSTON, P. S. Insetos: fundamentos da entomologia. 5ª edição, São
              Paulo: Roca, 2017.
            </li>
            <li>
              <a
                style={{ wordBreak: 'break-word' }}
                href={'http://www.insecta.ufv.br/Entomologia/cien/sistematica/resumo/comuns.html'}
                target={'_blank'}
                rel="noreferrer">
                http://www.insecta.ufv.br/Entomologia/cien/sistematica/resumo/comuns.html
              </a>
            </li>
            <li>
              <a href={'https://www.biodiversity4all.org/'} target={'_blank'} rel="noreferrer">
                https://www.biodiversity4all.org/
              </a>
            </li>
            <li>Aulas ministradas pelo docente.</li>
            <li>empraba.br</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className={'d-flex flex-column align-items-center'}>
          <h6>Fotos de autoria própria.</h6>
        </Col>
      </Row>
    </>
  )
}

export default AboutUs
