import React, { createContext, useState } from 'react'
import { MenuContext as ContextProps, ContextProps as MenuProps } from '../../types'

const defaultValue = {
  show: false,
  handleMenu: () => {},
  onClose: () => {}
}

const MenuContext = createContext<ContextProps>(defaultValue)

const MenuProvider = ({ children }: MenuProps) => {
  const [show, setMenu] = useState<boolean>(false)

  const handleMenu = () => setMenu(!show)

  const onClose = () => setMenu(false)

  return (
    <MenuContext.Provider value={{ show, handleMenu, onClose }}>{children}</MenuContext.Provider>
  )
}

export { MenuContext, MenuProvider }
