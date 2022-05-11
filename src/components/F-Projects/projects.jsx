import JumboSectionHeader from 'components/common/JumboSectionHeader'
import '../../../node_modules/aos/dist/aos.css'
import styled from 'styled-components'
import React, { useEffect } from 'react'
import { projects } from 'config/projects.config'
import Card from './card'
import AOS from 'aos'
import { projectsBackground }from '../../img/index'


const MainWrapper = styled.div`
  background-image: url(${projectsBackground});
  padding: 0px 0px 50px 0px;
`

const Wrapper = styled.div`
  @media (max-width: 992px) {
    display: block;
  }
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`
export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <MainWrapper id="projects">
      <JumboSectionHeader projects >Projects</JumboSectionHeader>
      <Wrapper>
        {projects.map((item, index) => {
          return <Card stack={item.stack} key={index} item={item}></Card>
        })}
      </Wrapper>
    </MainWrapper>
  )
}
