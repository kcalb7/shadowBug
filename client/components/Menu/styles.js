import { NavLink } from 'react-router-dom'
import { NavItem, Offcanvas } from 'react-bootstrap'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { bootstrapMax } from '../../utils/mediaQueries'

export const OffCanvas = styled(Offcanvas)`
  width: 300px;
  background-color: ${colors.primaryDark.main};

  @media ${bootstrapMax.sm} {
    width: 200px;
  }
`

export const MenuHeader = styled.h3`
  color: ${colors.white};

  @media ${bootstrapMax.sm} {
    font-size: 16px;
  }
`
export const MenuLink = styled(NavLink)`
  width: 100%;
  text-decoration: none !important;
  padding: 15px;
  color: ${colors.white};
  transition: all ease-in-out 0.2s;

  &:hover {
    color: ${colors.secondaryDark.main};
  }
`

export const MenuItem = styled(NavItem)`
  cursor: pointer;
  padding: 15px;
  color: ${colors.white};

  &:hover {
    color: ${colors.secondaryDark.main};
  }
`
