import { Modal } from 'react-bootstrap'
import styled from 'styled-components'
import { bootstrapMax } from '../../utils/mediaQueries'

export const CustomModal = styled(Modal)`
  text-align: center;
`

export const CustomModalHeader = styled(Modal.Header)`
  border: none;
  align-items: unset;

  div {
    width: 32px;
    height: 32px;
  }

  .btn-close {
    margin: 0;
  }
`

export const CustomModalBody = styled(Modal.Body)`
  border: none;
  padding-top: 5px;
  max-height: 50vh;
  overflow-y: auto;
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }

  p {
    @media ${bootstrapMax.sm} {
      font-size: 10px;
    }
  }
`

export const CustomModalFooter = styled(Modal.Footer)`
  border: none;
  display: flex;
  justify-content: center;
`

export const Frame = styled.div`
  width: 100%;
  height: 50%;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-user-select: none;
`
