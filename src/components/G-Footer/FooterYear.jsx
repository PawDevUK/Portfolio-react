import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
color:white;
width:100vw;
`

export default function FooterYear() {

    function year(){
        return new Date().getFullYear()
    }
    return (
        <Wrapper>{year()}</Wrapper>
    )
}