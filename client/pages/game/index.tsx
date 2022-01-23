import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { ColBugs, FrameBug } from '../../components'
import { DefaultStatesContext } from '../../contexts/defaultStates'
import { colors } from '../../utils/colors'
import { categories } from '../../enums'
import { BugMinInfo, BugsContext as BugsContextType } from '../../types'
import { BugsContext } from '../../contexts/bug'

const Home = () => {
  const { list, setList, bugs, shadows, infos }: BugsContextType = useContext(BugsContext)
  const [ids, setIds] = useState<{ yet: number[]; notYet: number[] }>({
    yet: [],
    notYet: [1, 2, 3, 2, 1, 3]
  })

  const { setModal }: any = useContext(DefaultStatesContext)

  useEffect(() => {
    while (ids.yet.length < 5 && ids.notYet.length) shuffle()
  })

  useCallback(() => {
    if (ids.notYet.length) shuffle()
  }, [list])

  const match = (id: number | null) => {
    // console.log('match', id)
    const update = list.map(l => {
      l.matched = l.matched || l.id === id
      return l
    })
    setList(update)
  }

  const openModal = (category: string, id: number) => {
    const bug = list.filter(l => l.id === id)[0]
    setModal({
      title: category,
      bug,
      toggle: true,
      onHide: () => setModal({ toggle: false })
    })
  }

  const filter = useCallback(
    (array: BugMinInfo[]) => {
      return array.filter(a => ids.yet.includes(a.id))
      // return shuffle()
    },
    [ids.yet]
  )

  const shuffle = () => {
    let { yet, notYet } = ids
    // console.log('shuffle', yet)
    const _shuffle = (array: number[]) => {
      let currentIndex = array.length,
        randomIndex

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
      }

      return array
    }

    const id: number | undefined = _shuffle(notYet).pop()
    if (id) yet.push(id)
    setIds({ yet, notYet })
  }

  const opts = {
    enableMouseEvents: true,
    enableHoverOutsideTarget: true,
    ignoreContextMenu: true,
    touchSlop: 5
  }

  return (
    <DndProvider backend={TouchBackend} options={opts}>
      <Row className={'my-5'}>
        <Col className={'d-flex justify-content-center'}>
          <h1 style={{ color: colors.primaryLight.text }}>Jogo das sombras</h1>
        </Col>
      </Row>
      <Row className={'my-5'}>
        <Col className={'d-flex justify-content-center'}>
          <h5 style={{ color: colors.primaryLight.text }}>
            Arraste os insetos sobre suas sombras e desbloqueie informações
          </h5>
        </Col>
      </Row>
      <Row>
        <Col className={'d-flex justify-content-start justify-content-md-center'}>
          <ColBugs draggable bugs={filter(bugs)} match={match} />
        </Col>
        <Col className={'d-flex justify-content-end justify-content-md-center'}>
          <ColBugs bugs={filter(shadows)} />
        </Col>
      </Row>

      <Row className={'my-5'}>
        <Col className={'d-flex justify-content-center'}>
          <h2 style={{ color: colors.primaryLight.text }}>Catálogo</h2>
        </Col>
      </Row>

      {categories.map(c => {
        return infos.filter(l => l.categoryId === c.id).length ? (
          <div key={c.id}>
            <Row>
              <Col className={'d-flex justify-content-center'}>
                <h1 style={{ color: colors.primaryLight.text }}>{c.name}</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={{ span: 6, offset: 3 }} className={'d-flex justify-content-start'}>
                {infos
                  .filter(l => l.categoryId === c.id)
                  .map(m => (
                    <FrameBug key={m.id} bug={m} matched onClick={() => openModal(c.name, m.id)} />
                  ))}
              </Col>
            </Row>
          </div>
        ) : (
          <></>
        )
      })}
    </DndProvider>
  )
}

export default Home
