import { Container as BSContainer } from 'react-bootstrap'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { bootstrapMax } from '../../utils/mediaQueries'

export const Container = styled(BSContainer)`
  padding-top: 80px;
  min-height: 80vh;
  min-width: 313px;
  background-color: ${colors.white};

  @media ${bootstrapMax.xs} {
    padding: 80px 30px 0;
  }
`
