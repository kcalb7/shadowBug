export type FrameBugsProps = {
  children?: any
  matched?: boolean
  draggable?: boolean
  bug: Bug
  onDragEnd?: Function
  onDragOver?: Function
}

export type Bug = {
  id: number
  img: string
}
