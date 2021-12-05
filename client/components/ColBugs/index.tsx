import React from 'react'
import { ColBugsProps } from './types'
import { Col } from './styles'
import { FrameBug } from '../FrameBug'

export const ColBugs = ({ draggable, bugs, onDragLeave, onDragEnd, onDragOver }: ColBugsProps) => (
  <Col>
    {bugs.map(b => (
      <FrameBug
        key={b.id}
        draggable={draggable}
        bug={b}
        onDragLeave={onDragLeave}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      />
    ))}
  </Col>
)
