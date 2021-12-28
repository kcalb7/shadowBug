import styled from 'styled-components'

const defaults = styled.div`
  width: 140px;
  height: 140px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-user-select: none;
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
