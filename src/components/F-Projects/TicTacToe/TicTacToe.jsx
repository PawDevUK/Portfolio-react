import React from 'react'
import { GlobalStyle, flexCenter } from './styled'
import styled from 'styled-components'
import { GetRowElement } from 'components/F-Projects/TicTacToe/components/Row'

const Wrapper = styled.div`
  background: #cfc5a5;
  border-radius: 5px;
  /* width: 100px; */
`
const Board = [
  [[1], [2], [3]],
  [[4], [5], [6]],
  [[7], [8], [9]],
]

export default function TicTacToe() {
  return (
    <Wrapper>
      <GlobalStyle></GlobalStyle>
      {GetRowElement(Board, 0)}
      {GetRowElement(Board, 1)}
      {GetRowElement(Board, 2)}
    </Wrapper>
  )
}
