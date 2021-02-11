import SectionHeader from 'components/covid-app/components/common/SectionHeader'
import Covid from '../common/Covid.jsx'
import styled from 'styled-components'
import { covidMain } from 'components/covid-app/img'
import React from 'react'

const Wrapper = styled.div`
position:relative;
height:135px;
width:100%;
`
const Image = styled.div`
background-image:url(${covidMain});
background-repeat: no-repeat;
margin:40px 5vw 0 auto;
background-size: 100% ;
height:20vw;
width:80%;
`


export default function Header() {
    return (
        <Wrapper>
            <Covid size={3} top={1} right={6}></Covid>
            <Covid size={1.2} top={11} right={16}></Covid>
            <Covid size={2} top={-1} right={36}></Covid>
            <Covid size={4} top={-1} right={80}></Covid>
            <SectionHeader Large >Covid-19 Data Explorer</SectionHeader>
            <Image></Image>
           
        </Wrapper>
    )
}
