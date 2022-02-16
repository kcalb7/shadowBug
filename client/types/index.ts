import React from 'react'

// components
export type Category = {
  id: number
  name: string
  description: string
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
  date: string
  agent: string
  nickname: string
  categoryId: number
  location: string
  coordinates: string
  lat: number | null
  lng: number | null
  matched: boolean
  img: BugImages
}

export type BodyProps = {
  children: React.ReactNode
}

export type ColBugsProps = {
  children?: React.ReactNode
  draggable?: boolean
  bugs: BugMinInfo[]
  match?: Function
}

export type FrameBugsProps = {
  children?: React.ReactNode
  matched?: boolean
  draggable?: boolean
  bug: BugMinInfo
  match?: Function
  onClick?: Function
}

export type ButtonProps = {
  text: string
  to?: string
  nav?: boolean
  blank?: boolean
  onClick?: Function
}

export type Modal = {
  title: string
  bug?: BugFullInfo | object
  toggle: boolean
  onHide?: Function
  confirm?: Function
  cancel?: Function
}
// components end

// contexts
export type ContextProps = {
  children?: React.ReactNode
}

export interface AuthContext {
  auth: boolean
  handleLogin: Function
  handleLogout: Function
  loading: boolean
  checkLogin: Function
}

export interface DefaultStatesContext {
  modal: Modal | object
  handleModal: Function
  pushHistory: Function
}

export interface BugsContext {
  list: BugFullInfo[]
  setList: (value: BugFullInfo[]) => void
  bugs: BugMinInfo[]
  setBugs: (value: BugMinInfo[]) => void
  shadows: BugMinInfo[]
  setShadows: (value: BugMinInfo[]) => void
  infos: BugBasicInfo[]
  setInfos: (value: BugBasicInfo[]) => void
  listBugs: Function
  reset: Function
}

export interface MenuContext {
  show: boolean
  handleMenu: () => void
  onClose: () => void
}
// contexts end

// item types
export const ItemTypes = {
  BUG: 'bug',
  SHADOW: 'shadow'
}
