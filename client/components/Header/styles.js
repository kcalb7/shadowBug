import { Container as BSContainer, Nav as BSNav, Col as BSCol } from 'react-bootstrap'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

export const Nav = styled(BSNav)`
  padding: 25px 15px;
  background-color: ${colors.primaryDark.main};
  position: fixed;
  width: 100%;
`

export const Container = styled(BSContainer)``

export const Col = styled(BSCol)`
  display: flex;
  justify-content: center;
  align-items: center;
`
