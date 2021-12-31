import { Container as BSContainer, Col as BSCol } from 'react-bootstrap'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

export const Container = styled(BSContainer)`
  min-height: 50px;
  background-color: ${colors.primaryLight.main};
`

export const Col = styled(BSCol)`
  display: flex;
  justify-content: center;
  align-items: center;
`
