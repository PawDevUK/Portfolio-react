import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
position:absolute;
bottom:20px ;
height:20px;
width:100%;
text-align:center;
`
const Text = styled.p`
color:white;
font-size:4px;
opacity:60%;
`
export default function VisitorCounter(props) {
  return (
    <Wrapper>
      <Text>Visits {props.counter}</Text>
    </Wrapper>
  )
}
