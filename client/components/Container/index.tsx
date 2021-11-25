import React from 'react'
import { ContainerProps } from './types'
import { Container } from './styles'

const Body = ({ children }: ContainerProps) => {
  return <Container>{children}</Container>
}

export default Body
