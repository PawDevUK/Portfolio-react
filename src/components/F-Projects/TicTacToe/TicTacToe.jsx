import Buttons from 'components/F-Projects/TicTacToe/components/Buttons'
import { Row } from 'components/F-Projects/TicTacToe/components/Row'
import React, { useState, useEffect } from 'react'
import { GlobalStyle, boxShadow6, flexCenter } from './styled'
import styled from 'styled-components'

const Body = styled.div`
  height: 100vh;
  font: 62.5%/1.4 Arial, Tahoma, Geneva, Helvetica, sans-serif;
  background: #eae3c8;
  color: #333;
  ${flexCenter}
`
const Wrapper = styled.div`
  background: #cfc5a5;
  border-radius: 5px;
  ${boxShadow6}
`
const RowClickDiv = styled.div``

export default function TicTacToe() {
  const [cell, setCell] = useState(null)
  const [row, setRow] = useState(null)

  useEffect(() => {
    setValueToBoard(row, cell)
  }, [cell, row])

  const [Board, setBoard] = useState([
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ])

  const RowClick = function (RowIndex) {
    setRow(parseInt(RowIndex))
  }
  const CellClick = function (index) {
    setCell(parseInt(index.target.id))
  }

  const setValueToBoard = function (row, cell) {
    if ((row && cell) || (row && cell) === 0) {
      setBoard((prev) => [...prev], (Board[row][cell] = ['X']))
    }
    return
  }

  function handleClear() {
    setBoard([
      [[], [], []],
      [[], [], []],
      [[], [], []],
    ])
  }

  return (
    <Body>
      <Wrapper>
        {Board.map((row, index) => {
          return (
            <RowClickDiv
              key={index}
              onClick={() => {
                RowClick(index)
              }}
            >
              <Row
                CellClick={CellClick}
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
    </Body>
  )
}
