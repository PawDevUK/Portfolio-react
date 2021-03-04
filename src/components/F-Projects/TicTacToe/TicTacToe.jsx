import BottomButtons from 'components/F-Projects/TicTacToe/components/BottomButtons'
import {
  topRbottL,
  topLbottR,
  topLR,
  midLR,
  bottomLR,
  leftTopBottom,
  midTopBottom,
  TopBottom,
} from './img'
import Header from 'components/F-Projects/TicTacToe/components/Header'
import Row from 'components/F-Projects/TicTacToe/components/Row'
import React, { useState, useEffect } from 'react'
import { boxShadow6, flexCenter } from './styled'
import styled from 'styled-components'

const Body = styled.div`
  font: 62.5%/1.4 Arial, Tahoma, Geneva, Helvetica, sans-serif;
  background: #eae3c8;
  color: #333;
  ${flexCenter}
  height: 100vh;
`
const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  background: #cfc5a5;
  border-radius: 5px;
  ${boxShadow6}
`
const Cross = styled.div`
  display: none;
  background-image: url(${leftTopBottom});
  position: absolute;
  height: 378px;
  width: 379px;
  z-index: 100;
  top: 120px;
  left: 70px;
`
const RowClickDiv = styled.div``

export default function TicTacToe() {
  const [cell, setCell] = useState(null)
  const [row, setRow] = useState(null)
  const [player, setPlayer] = useState(null)
  const [moveCounter, setMoveCounter] = useState(0)
  const [TopButtonsDisabled, setButtonsDisable] = useState(false)

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
    setButtonsDisable(true) //disable buttons on first click
    DisableTopButtons() //keeps buttons disabled during a game
    setMoveCounter((prev) => prev + 1)
    setCell(parseInt(index.target.id))
    if (moveCounter > 0) {
      if (player === 'X') {
        HandlePlayerO()
      }
      if (player === 'O') {
        HandlePlayerX()
      }
    }
  }

  const setValueToBoard = function (row, cell) {
    if ((row && cell) || (row && cell) === 0) {
      setBoard((prev) => [...prev], (Board[row][cell] = [player]))
    }
    return
  }

  function handleClear() {
    setBoard([
      [[], [], []],
      [[], [], []],
      [[], [], []],
    ])
    setMoveCounter(0)
    setButtonsDisable(false)
    setPlayer(null)
  }

  function HandlePlayerX() {
    setPlayer('X')
  }
  function HandlePlayerO() {
    setPlayer('O')
  }
  function DisableTopButtons() {
    if (moveCounter !== 0) {
      setButtonsDisable(true)
    }
  }
  return (
    <Body>
      <Wrapper>
        <Header
          Player={player === 'X' ? 'O' : 'X'}
          Disabled={TopButtonsDisabled}
          PlayerX={HandlePlayerX}
          PlayerO={HandlePlayerO}
        ></Header>
        <Cross></Cross>
        {Board.map((row, index) => {
          return (
            <RowClickDiv
              key={index}
              onClick={() => {
                RowClick(index)
              }}
            >
              <Row
                Disabled={player}
                CellClick={CellClick}
                row={Board}
                key={index}
                index={index}
                id={index}
              ></Row>
            </RowClickDiv>
          )
        })}
        <BottomButtons handleClear={handleClear}></BottomButtons>
      </Wrapper>
    </Body>
  )
}
