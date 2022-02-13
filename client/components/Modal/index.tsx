import React, { useContext } from 'react'
import { DefaultStatesContext } from '../../contexts/defaultStates'
import { CustomModal, CustomModalHeader, CustomModalBody, CustomModalFooter, Frame } from './styles'
import { Col, Row } from 'react-bootstrap'

const ModalComponent = () => {
  const { modal }: any = useContext(DefaultStatesContext)
  const { title, bug, toggle, onHide, confirm, cancel } = modal

  //todo: make style
  return (
    <CustomModal show={toggle} size="lg" centered onHide={onHide}>
      <CustomModalHeader closeButton>
        <div />
        <h1>{title}</h1>
      </CustomModalHeader>
      <CustomModalBody>
        <Row>
          <Col xs={4} className={'d-flex justify-content-center align-items-center'}>
            <Frame img={bug?.img?.bugInfo} />
          </Col>
          <Col xs={8} className={'d-flex flex-column align-items-start'}>
            <p>
              {bug?.name}
              {bug?.nickname ? ` (${bug.nickname})` : ''}
            </p>
            <p>{bug?.category}</p>
            <p>{bug?.date}</p>
            <p>{bug?.agent}</p>
            <p>{bug?.location}</p>
            <p>{bug?.coordinates}</p>
          </Col>
        </Row>
      </CustomModalBody>
      <CustomModalFooter>
        {cancel && <div className={'m-3'}>{/*<Button text={cancel} onClick={cancel} />*/}</div>}
        {confirm && <div className={'m-3'}>{/*<Button text={confirm} onClick={confirm} />*/}</div>}
      </CustomModalFooter>
    </CustomModal>
  )
}

export default ModalComponent
