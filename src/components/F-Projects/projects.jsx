import JumboSectionHeader from 'components/common/JumboSectionHeader'
import '../../../node_modules/aos/dist/aos.css'
import styled from 'styled-components'
import React, { useEffect } from 'react'
import { projects } from 'config/projects.config'
import Card from './card'
import AOS from 'aos'
import Particles from 'react-particles-js'


const MainWrapper = styled.div`
  padding: 0px 0px 50px 0px;
  position: relative;
`
const StParticles = styled(Particles)`
position:absolute;
height:100%;
z-index:1;
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
    <MainWrapper id="projects" >
      <StParticles
            params={{
              particles: {
                color:{
                  value:'#17293f'
                },
                number: {
                  value: 330,
                },
                size: {
                  value: 1,
                },
                autoPlay: true,

                opacity: {
                  value: 0.5,
                  random: true,
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: {
                    value:'#17293f'
                  },
                  opacity: 0.15,
                  width: 1
                }
              },
            }}
          />
      <JumboSectionHeader projects >Projects</JumboSectionHeader>
      <Wrapper>
        {projects.map((item, index) => {
          return <Card stack={item.stack} key={index} item={item}></Card>
        })}
      </Wrapper>
    </MainWrapper>
  )
}
