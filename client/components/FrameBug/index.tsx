import React from 'react'
import { FrameBugsProps } from '../../types'
import { Frame, FrameMatched } from './styles'

export const FrameBug = ({
  matched,
  draggable,
  bug,
  onDragEnd,
  onDragOver,
  onClick
}: FrameBugsProps) => {
  if (matched) return <FrameMatched value={bug.id} img={bug.img} onClick={onClick} />

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
