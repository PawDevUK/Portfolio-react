import  React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display:block;
  width:100%;
  text-align:center;
`
export default function VisitorCounter(props) {
  const H2 = props.h2
  return (
    <Wrapper>
      <H2>Visits {props.visitors}</H2>
    </Wrapper>
  )
}
