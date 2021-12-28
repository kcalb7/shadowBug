import React from 'react'
import { FrameBugsProps } from './types'
import { Frame, FrameMatched } from './styles'

export const FrameBug = ({ matched, draggable, bug, onDragEnd, onDragOver }: FrameBugsProps) => {
  if (matched) return <FrameMatched value={bug.id} img={bug.img} />

  return (
    <Frame
      value={bug.id}
      draggable={draggable}
      img={bug.img}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    />
  )
}
