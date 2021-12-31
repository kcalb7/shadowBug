import React, { createContext, useState } from 'react'
import { DefaultStatesProps, DefaultStatesContext as ContextProps, Modal } from '../../types'
import { useHistory } from 'react-router-dom'

const defaultValue = {
  modal: {},
  setModal: () => {},
  pushHistory: () => {}
}

const DefaultStatesContext = createContext<ContextProps>(defaultValue)

const DefaultStatesProvider = ({ children }: DefaultStatesProps) => {
  // const [defaultState, setDefaultStates] = useState(true)
  const [modal, setModal] = useState<Modal>({
    title: '',
    bug: {},
    toggle: false,
    onHide: () => {},
    confirm: () => {},
    cancel: () => {}
  })

  let history = useHistory()
  const pushHistory = (to: string) => {
    history.push(to)
  }

  return (
    <DefaultStatesContext.Provider value={{ modal, setModal, pushHistory }}>
      {children}
    </DefaultStatesContext.Provider>
  )
}

export { DefaultStatesContext, DefaultStatesProvider }
