import React, { createContext, useState } from 'react'
import { DefaultStatesProps, DefaultStatesContext as ContextProps, Modal } from '../../types'

const DefaultStatesContext = createContext<ContextProps | null>(null)

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

  return (
    <DefaultStatesContext.Provider value={{ modal, setModal }}>
      {children}
    </DefaultStatesContext.Provider>
  )
}

export { DefaultStatesContext, DefaultStatesProvider }
