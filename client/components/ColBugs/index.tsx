import React from 'react'
import { ColBugsProps } from '../../types'
import { FrameBug } from '../FrameBug'

export const ColBugs = ({ draggable, bugs, onDragEnd, onDragOver }: ColBugsProps) => (
  <div>
    {bugs.map(b => (
      <FrameBug
        key={b.id}
        draggable={draggable}
        bug={b}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      />
    ))}
  </div>
)
