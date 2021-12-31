import React /*, { useContext, useEffect, useState }*/ from 'react'
import { Col, Row } from 'react-bootstrap'
// import { DefaultStatesContext } from '../../contexts/defaultStates'
import { colors } from '../../utils/colors'

const Home = () => {
  // const [selected, setSelected] = useState(null)

  // const { setModal }: any = useContext(DefaultStatesContext)

  // useEffect(() => {})

  // const openModal = () => {
  //   setModal({
  //     title: '',
  //     toggle: true,
  //     onHide: () => setModal({ toggle: false })
  //   })
  // }

  return (
    <>
      <Row>
        <Col className={'d-flex flex-column align-items-center'}>
          <h1 style={{ color: colors.primaryLight.text }}>shadowBugs</h1>
          <a href={'/sombras'}>Jogar</a>
        </Col>
      </Row>
    </>
  )
}

export default Home
