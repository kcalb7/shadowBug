import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { colors } from '../../utils/colors'

const Home = () => {
  return (
    <>
      <Row>
        <Col className={'d-flex justify-content-center'}>
          <h1 style={{ color: colors.primaryLight.text }}>shadowBugs</h1>
        </Col>
      </Row>
    </>
  )
}

export default Home
