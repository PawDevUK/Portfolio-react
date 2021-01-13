import React from 'react'
import styled from 'styled-components'
import FooterYear from './FooterYear'


const Wrapper = styled.div`
display:flex;
justify-content:flex-end;
padding:0px;
margin:0px;
height: 200px;

background-color: #17293f;
`
const Year = styled(FooterYear)`
font-size:50px;
`

export default function Footer() {
    return (
        <Wrapper>
            <Year></Year>
        </Wrapper>


    )
}
