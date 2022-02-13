import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { ColBugs, FrameBug } from '../../components'
import { DefaultStatesContext } from '../../contexts/defaultStates'
import { colors } from '../../utils/colors'
import { categories } from '../../enums'
import { BugsContext as BugsContextType } from '../../types'
import { BugsContext } from '../../contexts/bug'

const Game = () => {
  const { list, setList, bugs, shadows, infos, listBugs }: BugsContextType = useContext(BugsContext)

  const { handleModal }: any = useContext(DefaultStatesContext)

  const match = (id: number | null) => {
    const update = list.map(l => {
      l.matched = l.matched || l.id === id
      return l
    })
    setList(update)
    listBugs()
  }

  const openModal = (category: string, id: number) => {
    const bug = list.filter(l => l.id === id)[0]
    handleModal({
      title: category,
      bug,
      toggle: true
    })
  }

  const opts = {
    enableMouseEvents: true
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
            {bugs.length
              ? 'Arraste os insetos sobre suas sombras e desbloqueie informações'
              : 'Parabéns! Você desbloqueou todos os insetos.'}
          </h5>
        </Col>
      </Row>
      <Row>
        <Col className={'d-flex justify-content-start justify-content-md-center'}>
          <ColBugs draggable bugs={bugs} match={match} />
        </Col>
        <Col className={'d-flex justify-content-end justify-content-md-center'}>
          <ColBugs bugs={shadows} />
        </Col>
      </Row>

      {infos.length ? (
        <Row className={'my-5'}>
          <Col className={'d-flex justify-content-center'}>
            <h2 style={{ color: colors.primaryLight.text }}>Catálogo</h2>
          </Col>
        </Row>
      ) : (
        <></>
      )}

      {categories.map(c => {
        return infos.filter(l => l.categoryId === c.id).length ? (
          <div key={c.name} className={'mt-5'}>
            <Row>
              <Col className={'d-flex justify-content-center'}>
                <h3 style={{ color: colors.primaryLight.text }}>{c.name}</h3>
              </Col>
            </Row>
            <Row className={'mt-3'}>
              <Col xs={12} className={'d-flex flex-wrap justify-content-center'}>
                {infos
                  .filter(l => l.categoryId === c.id)
                  .map(m => (
                    <FrameBug key={m.img} bug={m} matched onClick={() => openModal(c.name, m.id)} />
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

export default Game
