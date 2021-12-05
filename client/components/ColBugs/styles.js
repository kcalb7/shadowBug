import styled from 'styled-components'

export const Col = styled.div`
  wight: 240px;
  height: 240px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
