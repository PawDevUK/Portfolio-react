import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
margin:auto auto auto 60px;
width:24px;
height:28px;
transition: transform .2s;
&:hover{
    transform: scale(1.2)
}
`
const Line = styled.div`
border-radius:20px;
width:100%;
height:4px;
background-color:black;
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