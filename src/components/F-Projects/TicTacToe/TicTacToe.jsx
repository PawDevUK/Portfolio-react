import React from 'react'
import styled from 'styled-components'
import { GetRowElement } from 'components/F-Projects/TicTacToe/Row'
const Wrapper = styled.div``

const Board = [
  [[1], [2], [3]],
  [[4], [5], [6]],
  [[7], [8], [9]],
]

export default function TicTacToe() {
  return (
    <Wrapper>
      {GetRowElement(Board, 0)}
      {GetRowElement(Board, 1)}
      {GetRowElement(Board, 2)}
    </Wrapper>
  )
}
