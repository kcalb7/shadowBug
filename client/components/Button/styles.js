// import { NavLink } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

const defaultsLink = styled(NavLink)`
  width: 100%;
  max-width: 150px;
  height: 30px;
  text-decoration: none !important;
  background-color: ${colors.primaryDark.main};
  color: ${colors.primaryDark.text} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.primary.main};
  border-radius: 4px;

  &:hover {
    background-color: ${colors.secondaryDark.main};
    color: ${colors.secondaryDark.text};
    border: 1px solid ${colors.secondary.main};
  }
`

export const ButtonDiv = styled.div`
  width: 100%;
  max-width: 150px;
  height: 30px;
  background-color: ${colors.primaryDark.main};
  color: ${colors.primaryDark.text} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.primary.main};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.secondaryDark.main};
    color: ${colors.secondaryDark.text};
    border: 1px solid ${colors.secondary.main};
  }
`
export const ButtonLink = styled(defaultsLink)``

export const ButtonNav = styled(defaultsLink)``
