import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Error = () => {
  return (
    <>
      <Row className={'py-5'}>
        <Col>
          <h1>Oops..</h1>
          <p>Nada aqui, jovem padawan!</p>
          <a href={'/'}>Home</a>
        </Col>
      </Row>
    </>
  )
}

export default Error
