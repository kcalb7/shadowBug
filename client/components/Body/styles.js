import { Container as BSContainer } from 'react-bootstrap'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

export const Container = styled(BSContainer)`
  padding-top: 80px;
  height: 100vh;
  min-width: 313px;
  background-color: ${colors.white};
`
