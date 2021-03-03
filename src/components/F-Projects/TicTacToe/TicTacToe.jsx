import React, { useState } from 'react'
import { GlobalStyle, boxShadow6 } from './styled'
import styled from 'styled-components'
import { Row } from 'components/F-Projects/TicTacToe/components/Row'
import Buttons from 'components/F-Projects/TicTacToe/components/Buttons'

const Wrapper = styled.div`
  background: #cfc5a5;
  border-radius: 5px;
  ${boxShadow6}
`
const RowClickDiv = styled.div``

export default function TicTacToe() {
  const [Board, setBoard] = useState([
    [['X'], [], ['O']],
    [[], ['X'], ['O']],
    [[], [], ['X']],
  ])
  const [cell, setCell] = useState(null)
  const [row, setRow] = useState(null)

  function handleCellClick(e) {
    setCell(parseInt(e.target.id))
  }
  function handleRowClick(rowIndex) {
    setRow(rowIndex)
  }
  function handleClear() {
    console.log('clear')
    setBoard([
      [[], [], []],
      [[], [], []],
      [[], [], []],
    ])
  }

  return (
    <Wrapper>
      <GlobalStyle></GlobalStyle>
      {Board.map((row, index) => {
        return (
          <RowClickDiv
            key={index}
            onClick={() => {
              handleRowClick(index)
            }}
          >
            <Row
              handleCellClick={handleCellClick}
              row={Board}
              key={index}
              index={index}
              id={index}
            ></Row>
          </RowClickDiv>
        )
      })}
      <Buttons handleClear={handleClear}></Buttons>
    </Wrapper>
  )
}
