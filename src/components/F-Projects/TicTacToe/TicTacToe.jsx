import React from 'react'
import { GlobalStyle, boxShadow6 } from './styled'
import styled from 'styled-components'
import { Row } from 'components/F-Projects/TicTacToe/components/Row'
import Buttons from 'components/F-Projects/TicTacToe/components/Buttons'

const Wrapper = styled.div`
  background: #cfc5a5;
  border-radius: 5px;
  ${boxShadow6}
`
const Board = [
  [['X'], [], ['O']],
  [[], ['X'], ['O']],
  [[], [], ['X']],
]

export default function TicTacToe() {
  function handleCellClick(e) {
    console.log(e.target.id)
    handleRowClick(e)
  }

  function handleRowClick(e) {
    console.log(e.target)
    // handleCellClick(e)
  }
  return (
    <Wrapper>
      <GlobalStyle></GlobalStyle>
      {Board.map((row, index) => {
        return (
          <Row
            handleRowClick={handleRowClick}
            handleCellClick={handleCellClick}
            row={Board}
            key={index}
            index={index}
            id={index}
          ></Row>
        )
      })}
      <Buttons></Buttons>
    </Wrapper>
  )
}
