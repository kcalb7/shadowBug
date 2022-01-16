import styled from 'styled-components'
import { bootstrapMax } from '../../utils/mediaQueries'

const defaults = styled.div`
  width: 140px;
  height: 140px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-user-select: none;

  @media ${bootstrapMax.sm} {
    width: 80px;
    height: 80px;
  }
`

export const Frame = styled(defaults)`
  cursor: ${({ draggable }) => (draggable ? 'pointer' : 'no-drop !important')};
  &:not(:first-of-type) {
    margin-top: 20px;
  }

  &:active {
    cursor: grabbing;
  }
`

export const FrameMatched = styled(defaults)`
  cursor: pointer;
  margin: 20px;
`
