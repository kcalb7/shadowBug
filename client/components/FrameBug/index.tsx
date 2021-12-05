import React from 'react'
import { FrameBugsProps } from './types'
import { Frame } from './styles'

export const FrameBug = ({
  draggable,
  bug,
  onDragLeave,
  onDragEnd,
  onDragOver
}: FrameBugsProps) => (
  <Frame
    value={bug.id}
    draggable={draggable}
    img={bug.img}
    onDragLeave={onDragLeave}
    onDragEnd={onDragEnd}
    onDragOver={onDragOver}
  />
)
