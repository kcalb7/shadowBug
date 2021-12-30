import React from 'react'

// components
export type Category = {
  id: number
  name: string
}

export type BugImages = {
  bug: string
  bugShadow: string
  bugInfo: string
}

export type BugMinInfo = {
  id: number
  img: string
}

export type BugBasicInfo = {
  id: number
  img: string
  categoryId: number
}

export type BugFullInfo = {
  id: number
  name: string
  nickname: string
  categoryId: number
  location: string
  coordinates: string
  lat: number | null
  lng: number | null
  date: string
  matched: boolean
  img: BugImages
}

export type ContainerProps = {
  children: React.ReactNode
}

export type ColBugsProps = {
  children?: React.ReactNode
  draggable?: boolean
  bugs: BugMinInfo[]
  onDragEnd?: Function
  onDragOver?: Function
}

export type FrameBugsProps = {
  children?: any
  matched?: boolean
  draggable?: boolean
  bug: BugMinInfo
  onDragEnd?: Function
  onDragOver?: Function
  onClick?: Function
}
// components end

// contexts
export type AuthProps = {
  children?: React.ReactNode
}

export interface AuthContext {
  auth: boolean
  handleLogin: object
  handleLogout: object
  loading: boolean
  checkLogin: object
}

export type DefaultStatesProps = {
  children?: React.ReactNode
}

export interface DefaultStatesContext {
  modal: Modal | null
  setModal: object
}

export type Modal = {
  title: string
  bug?: BugFullInfo | object
  toggle: boolean
  onHide?: object
  confirm?: object
  cancel?: object
}
// contexts end
