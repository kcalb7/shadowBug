import React, { createContext, useCallback, useEffect, useState } from 'react'
import {
  BugsProps,
  BugsContext as ContextProps,
  BugFullInfo,
  BugMinInfo,
  BugBasicInfo
} from '../../types'
import { bugs as BugObject } from '../../enums'

const localBugs: string | null = localStorage.getItem('localBugs')

let List: BugFullInfo[] = BugObject
let Bugs: BugMinInfo[] = []
let Shadows: BugMinInfo[] = []
let Infos: BugBasicInfo[] = []
if (localBugs !== null) {
  const localBugsParsed = JSON.parse(localBugs)
  List = localBugsParsed['list']
  Bugs = localBugsParsed['bugs']
  Shadows = localBugsParsed['shadows']
  Infos = localBugsParsed['infos']
}

const defaultValue = {
  list: [],
  setList: () => {},
  bugs: [],
  setBugs: () => {},
  shadows: [],
  setShadows: () => {},
  infos: [],
  setInfos: () => {},
  listBugs: () => {}
}

const BugsContext = createContext<ContextProps>(defaultValue)

const BugsProvider = ({ children }: BugsProps) => {
  const [list, setList] = useState<BugFullInfo[]>(List)
  const [bugs, setBugs] = useState<BugMinInfo[]>(Bugs)
  const [shadows, setShadows] = useState<BugMinInfo[]>(Shadows)
  const [infos, setInfos] = useState<BugBasicInfo[]>(Infos)
  const [ids, setIds] = useState<{ yet: number[]; notYet: number[] }>({
    yet: [],
    notYet: list.filter(b => !b.matched).map(b => b.id)
  })

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
    setBugs(_shuffle(Bugs))
    setShadows(_shuffle(Shadows))
    setInfos(Infos)
    localStorage.removeItem('localBugs')
    localStorage.setItem(
      'localBugs',
      JSON.stringify({ list, bugs: Bugs, shadows: Shadows, infos: Infos })
    )
    while (
      (ids.notYet.length > 5 && ids.yet.length < 5) ||
      (ids.notYet.length > 0 && ids.notYet.length < 5)
    )
      listBugs()
  }

  const _shuffle = (array: BugMinInfo[]) => {
    let currentIndex = array.length,
      randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
  }

  const filter = useCallback((array: BugMinInfo[]) => {
    return array.filter(a => ids.yet.includes(a.id))
  }, [])

  const listBugs = () => {
    let { yet, notYet } = ids

    const id: number | undefined = notYet.pop()

    if (id) yet.push(id)
    setIds({ yet, notYet })
  }

  return (
    <BugsContext.Provider
      value={{
        list,
        setList,
        bugs: filter(bugs),
        setBugs,
        shadows: filter(shadows),
        setShadows,
        infos,
        setInfos,
        listBugs
      }}>
      {children}
    </BugsContext.Provider>
  )
}

export { BugsContext, BugsProvider }
