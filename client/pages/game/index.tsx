import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ColBugs, FrameBug } from '../../components'
import { DefaultStatesContext } from '../../contexts/defaultStates'
import { colors } from '../../utils/colors'
import { categories } from '../../enums'
import { BugMinInfo, BugsContext as BugsContextType } from '../../types'
import { BugsContext } from '../../contexts/bug'

const Home = () => {
  const { list, setList, bugs, shadows, infos }: BugsContextType = useContext(BugsContext)
  const [selected, setSelected] = useState(null)
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

  const match = (id: string | null) => {
    const update = list.map(l => {
      l.matched = l.matched || l.id.toString() === id
      return l
    })
    setList(update)
  }

  //todo: rever type
  const onDragEnd = ({
    target: {
      attributes: {
        value: { value }
      }
    }
  }: any) => {
    if (selected === value) match(selected)
    setSelected(null)
  }

  const onDragOver = ({
    target: {
      attributes: {
        value: { value }
      }
    }
  }: any) => {
    if (selected !== value) setSelected(value)
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
      // return shuffle(array.filter(a => ids.yet.includes(a.id)))
    },
    [ids.yet]
  )

  const shuffle = (array?: BugMinInfo[]) => {
    console.log('shuffle', array)
    const _shuffle = (array: BugMinInfo[] | number[]) => {
      let currentIndex = array.length,
        randomIndex

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
      }

      return array
    }

    if (!array) {
      let { yet, notYet } = ids
      const id: any = _shuffle(notYet).pop()
      yet.push(id)
      setIds({ yet, notYet })
    } else {
      return _shuffle(array)
    }
  }

  return (
    <>
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
          <ColBugs draggable bugs={filter(bugs)} onDragEnd={onDragEnd} />
        </Col>
        <Col className={'d-flex justify-content-end justify-content-md-center'}>
          <ColBugs bugs={filter(shadows)} onDragOver={onDragOver} />
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
    </>
  )
}

export default Home
