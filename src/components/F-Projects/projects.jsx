import JumboSectionHeader from 'components/common/JumboSectionHeader'
import '../../../node_modules/aos/dist/aos.css';
import styled from 'styled-components'
import React, { useEffect } from 'react'
import {projects} from 'store'
import AOS from 'aos';
import Card from  './card'

const MainWrapper = styled.div`
margin-bottom:20px;
`
const Wrapper = styled.div`
margin:auto;
display:flex;
flex-wrap:wrap;
`


export default function Projects() {
  
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <MainWrapper id="projects">
           <JumboSectionHeader>Projects</JumboSectionHeader>
            <Wrapper  >
            
                {projects.map((item, index) => {
                    return (
                       <Card item={item}></Card>
                    )
                })
                }
            </Wrapper>
        </MainWrapper>
    )

}
