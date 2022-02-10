import React from 'react'
import { ColBugsProps } from '../../types'
import { FrameBug } from '../FrameBug'

export const ColBugs = ({ draggable, bugs, match }: ColBugsProps) => (
  <div>
    {bugs.map(b => (
      <FrameBug key={b.img} draggable={draggable} bug={b} match={match} />
    ))}
  </div>
)
