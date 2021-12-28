import { Bug } from '../FrameBug/types'
import React from 'react'

export type ColBugsProps = {
  children?: React.ReactNode
  draggable?: boolean
  bugs: Bug[]
  onDragEnd?: Function
  onDragOver?: Function
}
