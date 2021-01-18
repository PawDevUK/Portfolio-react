
import JumboSectionHeader from 'components/common/JumboSectionHeader'
import '../../../node_modules/aos/dist/aos.css';
import styled from 'styled-components'
import React, { useEffect } from 'react'
import {projects} from 'store'
import AOS from 'aos';
import Card from  './card'


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
        <div>
           <JumboSectionHeader>Projects</JumboSectionHeader>
            <Wrapper id="projects" >
            
                {projects.map((item, index) => {
                    return (
                       <Card item={item}></Card>
                    )
                })
                }
            </Wrapper>
        </div>
    )

}
