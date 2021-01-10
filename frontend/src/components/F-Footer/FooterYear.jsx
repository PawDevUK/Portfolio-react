import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`

`

export default function FooterYear() {

    function year(){
        return new Date().getFullYear()
    }
    return (
        <Wrapper>{year()}</Wrapper>
    )
}