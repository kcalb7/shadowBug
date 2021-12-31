import React from 'react'
import { BodyProps } from '../../types'
import { Container } from './styles'

export const Body = ({ children }: BodyProps) => {
  return <Container>{children}</Container>
}
