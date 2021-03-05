import BottomButtons from 'components/F-Projects/TicTacToe/components/BottomButtons'
import Header from 'components/F-Projects/TicTacToe/components/Header'
import Row from 'components/F-Projects/TicTacToe/components/Row'
import React, { useState, useEffect } from 'react'
import { boxShadow6, flexCenter } from './styled'
import styled, { css } from 'styled-components'
import PlayerList from './components/PlayerList'
import {
  topRbottL,
  topLbottR,
  topLR,
  midLR,
  bottomLR,
  leftTopBottom,
  midTopBottom,
  rightTopBottom,
} from './img'

const Body = styled.div`
  font: 62.5%/1.4 Arial, Tahoma, Geneva, Helvetica, sans-serif;
  background: #eae3c8;
  color: #333;
  ${flexCenter}
`
const BoardAndDataTableWrapper = styled.div``

const BoardWrapper = styled.div`
  margin: auto;
  width: 520px;
  position: relative;
  padding: 20px;
  background: #cfc5a5;
  border-radius: 5px;
  ${boxShadow6}
`
const Cross = styled.div`
  ${(p) =>
    p.img
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
  background-image: url(${(p) => p.img});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  height: 480px;
  width: 480px;
  z-index: 100;
`

const RowClickDiv = styled.div``

export default function TicTacToe() {
  const [cell, setCell] = useState(null)
  const [row, setRow] = useState(null)
  const [player, setPlayer] = useState(null)
  const [moveCounter, setMoveCounter] = useState(0)
  const [TopButtonsDisabled, setButtonsDisable] = useState(false)
  const [WinnerCrossLine, setWinnerCrossLine] = useState(null)
  const Scenario = [
    topRbottL,
    topLbottR,
    topLR,
    midLR,
    bottomLR,
    leftTopBottom,
    midTopBottom,
    rightTopBottom,
  ]
  useEffect(() => {
    setValueToBoard(row, cell)
    checkIfWin()
  }, [cell, row, WinnerCrossLine])

  const [Board, setBoard] = useState([
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ])

  const RowClick = function (RowIndex) {
    setRow(parseInt(RowIndex))
  }
  const CellClick = function (index) {
    setButtonsDisable(true) // disable top buttons on first click
    DisableTopButtons() // keeps top buttons disabled during a game
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
    setWinnerCrossLine(null)
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

  function checkIfWin() {
    const topLbottR = [Board[0][0], Board[1][1], Board[2][2]]
    const topRbottL = [Board[0][2], Board[1][1], Board[2][0]]
    const topLR = [Board[0][0], Board[0][1], Board[0][2]]
    const midLR = [Board[1][0], Board[1][1], Board[1][2]]
    const bottomLR = [Board[2][0], Board[2][1], Board[2][2]]
    const leftTopBottom = [Board[0][0], Board[1][0], Board[2][0]]
    const midTopBottom = [Board[0][1], Board[1][1], Board[2][1]]
    const rightTopBottom = [Board[0][2], Board[1][2], Board[2][2]]

    const Scenario = [
      topRbottL,
      topLbottR,
      topLR,
      midLR,
      bottomLR,
      leftTopBottom,
      midTopBottom,
      rightTopBottom,
    ]
    function CheckIfRowXorO(scenario) {
      for (let i = 0; i < scenario.length; i++) {
        if (
          scenario[i][0][0] === 'X' &&
          scenario[i][1][0] === 'X' &&
          scenario[i][2][0] === 'X'
        ) {
          setWinnerCrossLine(i)
        }
        if (
          scenario[i][0][0] === 'O' &&
          scenario[i][1][0] === 'O' &&
          scenario[i][2][0] === 'O'
        ) {
          setWinnerCrossLine(i)
        }
      }
    }
    CheckIfRowXorO(Scenario)
  }

  return (
    <Body>
      <BoardAndDataTableWrapper>
        <BoardWrapper>
          <Header
            Player={player === 'X' ? 'O' : 'X'}
            Disabled={TopButtonsDisabled}
            PlayerX={HandlePlayerX}
            PlayerO={HandlePlayerO}
          ></Header>
          <Cross img={Scenario[WinnerCrossLine]}></Cross>
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
        </BoardWrapper>
        <PlayerList></PlayerList>
      </BoardAndDataTableWrapper>
    </Body>
  )
}
