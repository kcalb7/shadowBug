import styled from 'styled-components'

export const Frame = styled.div`
  width: 140px;
  height: 140px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  -webkit-user-select: none;
  cursor: ${({ draggable }) => (draggable ? 'move' : 'no-drop')};
`
