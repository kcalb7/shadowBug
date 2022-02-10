import React, { useContext } from 'react'
import { DefaultStatesContext } from '../../contexts/defaultStates'
import { CustomModal, CustomModalHeader, CustomModalBody, CustomModalFooter } from './styles'

const ModalComponent = () => {
  const { modal }: any = useContext(DefaultStatesContext)
  const { title, bug, toggle, onHide, confirm, cancel } = modal

  //todo: make style
  return (
    <CustomModal show={toggle} size="lg" centered onHide={onHide}>
      <CustomModalHeader closeButton />
      <CustomModalBody>
        <h1>{title}</h1>
        <p>
          {bug?.name}
          {bug?.nickname ? ` (${bug.nickname})` : ''}
        </p>
        <p>{bug?.category}</p>
        <p>{bug?.date}</p>
        <p>{bug?.agent}</p>
        <p>{bug?.location}</p>
        <p>{bug?.coordinates}</p>
      </CustomModalBody>
      <CustomModalFooter>
        {cancel && <div className={'m-3'}>{/*<Button text={cancel} onClick={cancel} />*/}</div>}
        {confirm && <div className={'m-3'}>{/*<Button text={confirm} onClick={confirm} />*/}</div>}
      </CustomModalFooter>
    </CustomModal>
  )
}

export default ModalComponent
