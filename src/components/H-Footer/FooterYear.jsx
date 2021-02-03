import React from "react"
import styled from 'styled-components'
import {Year} from 'factory'

const Wrapper = styled.div`
color:white;
width:100vw;
`
export default function FooterYear() {
    return (
        <Wrapper>{Year()}</Wrapper>
    )
}