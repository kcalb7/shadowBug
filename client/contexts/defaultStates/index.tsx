import React, { createContext, useState } from 'react'
import { DefaultStatesProps, DefaultStatesContext as ContextProps, Modal } from '../../types'
import { useHistory } from 'react-router-dom'

const defaultValue = {
  modal: {},
  handleModal: () => {},
  pushHistory: () => {}
}

const DefaultStatesContext = createContext<ContextProps>(defaultValue)

const DefaultStatesProvider = ({ children }: DefaultStatesProps) => {
  // const [defaultState, setDefaultStates] = useState(true)
  const [modal, setModal] = useState<Modal>({
    title: '',
    bug: {},
    toggle: false,
    onHide: () => handleModal({ toggle: false }),
    confirm: () => {},
    cancel: () => handleModal({ toggle: false })
  })

  const handleModal = (params: object) => setModal((prev: Modal) => ({ ...prev, ...params }))

  let history = useHistory()
  const pushHistory = (to: string) => {
    history.push(to)
  }

  return (
    <DefaultStatesContext.Provider value={{ modal, handleModal, pushHistory }}>
      {children}
    </DefaultStatesContext.Provider>
  )
}

export { DefaultStatesContext, DefaultStatesProvider }
