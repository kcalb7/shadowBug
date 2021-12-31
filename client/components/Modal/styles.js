import { Modal } from 'react-bootstrap'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

export const CustomModal = styled(Modal)`
  text-align: center;
`

export const CustomModalHeader = styled(Modal.Header)`
  border: none;
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
`

export const CustomModalFooter = styled(Modal.Footer)`
  border: none;
  display: flex;
  justify-content: center;
`

export const CustomModalHeaderApp = styled(Modal.Header)`
  border: none;
  background-color: ${colors.primaryDark};
  .close {
    color: ${colors.white};
  }
`

export const CustomModalBodyApp = styled(Modal.Body)`
  border: none;
  padding-top: 5px;
  max-height: 50vh;
  overflow-y: auto;
  background-color: ${colors.primaryDark};

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
    background: ${colors.secondary};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
`

export const CustomModalFooterApp = styled(Modal.Footer)`
  background-color: ${colors.white};
  border: none;
  display: flex;
  justify-content: center;
`
