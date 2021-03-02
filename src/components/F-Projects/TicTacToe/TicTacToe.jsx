import React from 'react'
import { GlobalStyle, boxShadow6 } from './styled'
import styled from 'styled-components'
import { GetRowElement } from 'components/F-Projects/TicTacToe/components/Row'
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
  return (
    <Wrapper>
      <GlobalStyle></GlobalStyle>
      {GetRowElement(Board, 0)}
      {GetRowElement(Board, 1)}
      {GetRowElement(Board, 2)}
      <Buttons></Buttons>
    </Wrapper>
  )
}
