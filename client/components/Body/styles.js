import { Container as BSContainer } from 'react-bootstrap'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

export const Container = styled(BSContainer)`
  height: 100vh;
  background-color: ${colors.primaryLight.main};
`
