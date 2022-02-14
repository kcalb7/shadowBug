import React, { useContext } from 'react'
import { OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from 'react-bootstrap'
import { BugsContext, MenuContext } from '../../contexts'
import { OffCanvas, MenuHeader, MenuLink, MenuItem } from './styles'

export const Menu = () => {
  const { show, onClose } = useContext(MenuContext)
  const { reset } = useContext(BugsContext)

  return (
    <OffCanvas show={show} onHide={onClose}>
      <OffcanvasHeader closeButton closeVariant={'white'}>
        <OffcanvasTitle>
          <MenuLink to={'/'}>
            <MenuHeader>ShadowBugs</MenuHeader>
          </MenuLink>
        </OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody className={'d-flex flex-column'}>
        <MenuLink to={'/sombras'} onClick={() => onClose()}>
          Jogar
        </MenuLink>
        <MenuLink to={'/quem-somos'} onClick={() => onClose()}>
          Quem somos
        </MenuLink>
        <MenuItem onClick={() => reset()}>Reset</MenuItem>
      </OffcanvasBody>
    </OffCanvas>
  )
}
