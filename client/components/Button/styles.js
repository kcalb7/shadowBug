import styled from 'styled-components'
import { colors } from '../../utils/colors'

const defaultsLink = styled.a`
  width: 100%;
  max-width: 150px;
  height: 50px;
  text-decoration: none !important;
  color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${colors.secondaryLight.main}55;
    color: ${colors.secondaryLight.text}AA;
  }
`

const defaults = styled.div`
  width: 100%;
  max-width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${colors.secondaryLight.main}55;
    color: ${colors.secondaryLight.text}AA;
  }
`
export const ButtonLink = styled(defaultsLink)``

export const ButtonDiv = styled(defaults)``
