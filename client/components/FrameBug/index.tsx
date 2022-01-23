import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { BugMinInfo, FrameBugsProps, ItemTypes } from '../../types'
import { Frame, FrameMatched } from './styles'

export const FrameBug = ({ matched, draggable, bug, match, onClick }: FrameBugsProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BUG,
    item: { ...bug },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<BugMinInfo>()
      if (item && dropResult && item.id === dropResult.id) {
        console.log(`You dropped bug ${item.id} into shadow bug ${dropResult.id}!`)
        if (match) match(item.id)
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
      // handlerId: monitor.getHandlerId()
    })
  }))

  const opacity = isDragging ? 0.4 : 1

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BUG,
    drop: () => ({
      id: bug.id
    }),
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  }))

  if (matched) return <FrameMatched value={bug.id} img={bug.img} onClick={onClick} />

  if (draggable)
    return (
      <Frame
        ref={drag}
        draggable
        img={bug.img}
        style={{ opacity }}
        role="bug"
        data-testid={`box-${bug.id}`}
      />
    )

  return <Frame ref={drop} isOver={isOver} img={bug.img} />
}
