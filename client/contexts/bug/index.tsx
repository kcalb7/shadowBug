import React, { createContext, useEffect, useState } from 'react'
import {
  BugsProps,
  BugsContext as ContextProps,
  BugFullInfo,
  BugMinInfo,
  BugBasicInfo
} from '../../types'
import { bugs as BugObject } from '../../enums'

const localBug = localStorage.getItem('bugs')
const localBugs: BugFullInfo[] = localBug !== null ? JSON.parse(localBug) : BugObject
const defaultValue = {
  list: [],
  setList: () => {},
  bugs: [],
  setBugs: () => {},
  shadows: [],
  setShadows: () => {},
  infos: [],
  setInfos: () => {}
}

const BugsContext = createContext<ContextProps>(defaultValue)

const BugsProvider = ({ children }: BugsProps) => {
  const [list, setList] = useState<BugFullInfo[]>(localBugs)
  const [bugs, setBugs] = useState<BugMinInfo[]>([])
  const [shadows, setShadows] = useState<BugMinInfo[]>([])
  const [infos, setInfos] = useState<BugBasicInfo[]>([])

  useEffect(() => {
    return prepare()
  }, [list])

  const prepare = () => {
    let Bugs: BugMinInfo[] = []
    let Shadows: BugMinInfo[] = []
    let Infos: BugBasicInfo[] = []
    list.forEach(b => {
      if (!b.matched) {
        Bugs.push({ id: b.id, img: b.img['bug'] })
        Shadows.push({ id: b.id, img: b.img['bugShadow'] })
      } else Infos.push({ id: b.id, img: b.img['bugInfo'], categoryId: b.categoryId })
    })
    setBugs(Bugs)
    setShadows(Shadows)
    setInfos(Infos)
    localStorage.setItem('bugs', JSON.stringify(list))
  }

  return (
    <BugsContext.Provider
      value={{ list, setList, bugs, setBugs, shadows, setShadows, infos, setInfos }}>
      {children}
    </BugsContext.Provider>
  )
}

export { BugsContext, BugsProvider }
