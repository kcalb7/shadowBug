import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ColBugs, FrameBug } from '../../components'
import { DefaultStatesContext } from '../../contexts/defaultStates'
import { colors } from '../../utils/colors'
import { bugs as BugObject } from '../../enums'
import { categories } from '../../enums'
import { BugBasicInfo, BugMinInfo, BugsContext as BugsContextType } from '../../types'
import { BugsContext } from '../../contexts/bug'

const Home = () => {
  const { list, setList, bugs, setBugs, shadows, setShadows, infos, setInfos }: BugsContextType =
    useContext(BugsContext)
  const [selected, setSelected] = useState(null)

  const { setModal }: any = useContext(DefaultStatesContext)

  useEffect(() => {
    setList(BugObject)
    return prepare()
  }, [list])

  const prepare = () => {
    let Bugs: BugMinInfo[] = []
    let Shadows: BugMinInfo[] = []
    let Infos: BugBasicInfo[] = []
    BugObject.forEach(b => {
      if (!b.matched) {
        Bugs.push({ id: b.id, img: b.img['bug'] })
        Shadows.push({ id: b.id, img: b.img['bugShadow'] })
      } else Infos.push({ id: b.id, img: b.img['bugInfo'], categoryId: b.categoryId })
    })
    setBugs(Bugs)
    setShadows(Shadows)
    setInfos(Infos)
  }

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

  return (
    <>
      <Row>
        <Col className={'d-flex justify-content-center'}>
          <h1 style={{ color: colors.primaryLight.text }}>shadowBugs</h1>
        </Col>
      </Row>
      <Row>
        <Col className={'d-flex justify-content-center'}>
          <ColBugs draggable bugs={bugs} onDragEnd={onDragEnd} />
        </Col>
        <Col className={'d-flex justify-content-center'}>
          <ColBugs bugs={shadows} onDragOver={onDragOver} />
        </Col>
      </Row>
      <Row>
        <Col className={'d-flex justify-content-center'}>
          <h1 style={{ color: colors.primaryLight.text }}>Catálogo</h1>
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
