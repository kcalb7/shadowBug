import React from 'react'
import { ButtonProps } from '../../types'
import { ButtonDiv, ButtonLink } from './styles'

export const Button = ({ text, to, blank, onClick }: ButtonProps) => {
  if (onClick) return <ButtonDiv onClick={onClick}>{text}</ButtonDiv>

  if (blank)
    return (
      <ButtonLink href={to} target="blank">
        {text}
      </ButtonLink>
    )

  return <ButtonLink href={to}>{text}</ButtonLink>
}
