import React, { useContext } from 'react'
import { DefaultStatesContext } from '../../contexts/defaultStates'
import {
  CustomModal,
  CustomModalHeader,
  CustomModalBody,
  CustomModalFooter,
  CustomModalBodyApp,
  CustomModalFooterApp,
  CustomModalHeaderApp
} from './styles'

const ModalComponent = () => {
  const { modal, app }: any = useContext(DefaultStatesContext)
  const { title, bug, toggle, onHide, confirm, cancel } = modal

  if (app) {
    return (
      <CustomModal show={toggle} size="lg" centered onHide={onHide}>
        <CustomModalHeaderApp closeButton />
        <CustomModalBodyApp>
          {/*<Text text={title} modalTitleWhite />*/}
          {/*{text ? <Text subTitleModal text={text} /> : ''}*/}
        </CustomModalBodyApp>
        <CustomModalFooterApp>
          {cancel && (
            <div className={'m-3'}>
              {/*<Button underlineWhite text={cancel} onClick={cancel} />*/}
            </div>
          )}
          {confirm && (
            <div className={'m-3'}>{/*<Button underline text={confirm} onClick={confirm} />*/}</div>
          )}
        </CustomModalFooterApp>
      </CustomModal>
    )
  }

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
        <p>{bug?.location}</p>
        <p>{bug?.coordinates}</p>
      </CustomModalBody>
      <CustomModalFooter>
        {cancel && (
          <div className={'m-3'}>{/*<Button underlineSec text={cancel} onClick={cancel} />*/}</div>
        )}
        {confirm && (
          <div className={'m-3'}>{/*<Button underline text={confirm} onClick={confirm} />*/}</div>
        )}
      </CustomModalFooter>
    </CustomModal>
  )
}

export default ModalComponent
