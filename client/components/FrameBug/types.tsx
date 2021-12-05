export type FrameBugsProps = {
  children?: any
  draggable?: boolean
  bug: Bug
  onDragLeave?: Function
  onDragEnd?: Function
  onDragOver?: Function
}

export type Bug = {
  id: number
  img: string
}
