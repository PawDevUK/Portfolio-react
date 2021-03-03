import React from 'react'
import styled from 'styled-components'
import { flexCenter } from '../styled'
import { StButton } from './common/Button'

const Wrapper = styled.div`
  ${flexCenter}
  height: 50px;
`
const PlayerX = styled.div``
const PlayerO = styled.div``
export default function Header(props) {
  return (
    <Wrapper>
      <PlayerX onClick={props.PlayerX}>
        <StButton header>X</StButton>
      </PlayerX>
      <PlayerO onClick={props.PlayerO}>
        <StButton header>O</StButton>
      </PlayerO>
    </Wrapper>
  )
}
