import React from 'react'
import { ButtonProps } from '../../types'
import { ButtonDiv, ButtonLink, ButtonNav } from './styles'

export const Button = ({ text, to, nav, blank, onClick }: ButtonProps) => {
  if (onClick) return <ButtonDiv onClick={onClick}>{text}</ButtonDiv>

  if (nav) return <ButtonNav to={to}>{text}</ButtonNav>

  //todo: rever necessidade
  if (blank)
    return (
      <ButtonLink href={to} target="blank">
        {text}
      </ButtonLink>
    )

  return <ButtonLink href={to}>{text}</ButtonLink>
}
