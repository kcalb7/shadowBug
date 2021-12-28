import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ColBugs, FrameBug } from '../../components'
import { colors } from '../../utils/colors'
import { bugs as BugObject } from '../../enums'
import { categories } from '../../enums'

const Home = () => {
  const [list, setList] = useState([])
  const [bugs, setBugs] = useState([])
  const [shadows, setShadows] = useState([])
  const [infos, setInfos] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    setList(BugObject)
    return prepare()
  }, [list])

  const prepare = () => {
    let Bugs = []
    let Shadows = []
    let Infos = []
    BugObject.forEach(b => {
      if (!b.matched) {
        Bugs.push({ id: b.id, img: b.img['bug'] })
        Shadows.push({ id: b.id, img: b.img['shadow'] })
      } else Infos.push({ id: b.id, img: b.img['bugInfo'], categoryId: b.categoryId })
    })
    setBugs(Bugs)
    setShadows(Shadows)
    setInfos(Infos)
  }

  const match = id => {
    const update = list.map(l => {
      l.matched = l.matched || l.id.toString() === id
      return l
    })
    setList(update)
  }

  const onDragEnd = ({
    target: {
      attributes: {
        value: { value }
      }
    }
  }) => {
    if (selected === value) match(selected)
    setSelected(null)
  }

  const onDragOver = ({
    target: {
      attributes: {
        value: { value }
      }
    }
  }) => {
    if (selected !== value) setSelected(value)
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

      {categories.map(c => (
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
                  <FrameBug key={m.id} bug={m} matched />
                ))}
            </Col>
          </Row>
        </div>
      ))}
    </>
  )
}

export default Home
