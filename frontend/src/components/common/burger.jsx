import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
margin:auto auto auto 60px;
width:20px;
height:24px;
`
const Line = styled.div`
border-radius:20px;
width:100%;
height:3px;
background-color:black;
margin-bottom:3px;
`

export default function Burger({...props}){
  
    return(
        <Wrapper onClick={props.click}>
            <Line></Line>
            <Line></Line>
            <Line></Line>
        </Wrapper>

    )
}