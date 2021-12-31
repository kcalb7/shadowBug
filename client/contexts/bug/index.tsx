import React, { createContext, useState } from 'react'
import {
  BugsProps,
  BugsContext as ContextProps,
  BugFullInfo,
  BugMinInfo,
  BugBasicInfo
} from '../../types'

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
  const [list, setList] = useState<BugFullInfo[]>([])
  const [bugs, setBugs] = useState<BugMinInfo[]>([])
  const [shadows, setShadows] = useState<BugMinInfo[]>([])
  const [infos, setInfos] = useState<BugBasicInfo[]>([])

  return (
    <BugsContext.Provider
      value={{ list, setList, bugs, setBugs, shadows, setShadows, infos, setInfos }}>
      {children}
    </BugsContext.Provider>
  )
}

export { BugsContext, BugsProvider }
