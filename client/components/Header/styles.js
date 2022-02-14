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
export const Hamburger = styled.div`
  width: 35px;
  height: 30px;
  cursor: pointer;

  div {
    width: 35px;
    height: 5px;
    background-color: ${colors.white};
    transition: all ease-in-out 0.2s;

    &:not(:first-of-type) {
      margin-top: 6px;
    }
  }

  &:hover div {
    background-color: ${colors.secondaryDark.main};
  }
`
