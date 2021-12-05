import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ColBugs } from '../../components'
import { colors } from '../../utils/colors'
import { bugs as BugObject } from '../../enums'

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
      Bugs.push({ id: b.id, img: b.img['bug'] })
      Shadows.push({ id: b.id, img: b.img['shadow'] })
      Infos.push({ id: b.id, img: b.img['bugInfo'] })
    })
    setBugs(Bugs)
    setShadows(Shadows)
    setInfos(Infos)
  }

  const onDragLeave = () => {
    // setSelected(null)
  }

  const onDragEnd = ({
    target: {
      attributes: {
        value: { value }
      }
    }
  }) => {
    if (selected === value) alert('ok')
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
          <ColBugs bugs={infos} />
        </Col>
        <Col className={'d-flex justify-content-center'}>
          <ColBugs bugs={shadows} onDragOver={onDragOver} onDragLeave={onDragLeave} />
        </Col>
      </Row>
    </>
  )
}

export default Home
