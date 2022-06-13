import React, { useEffect } from 'react'
import { P, Bold } from '../common/typography'
import JumboSectionHeader from 'components/common/JumboSectionHeader'
import styled from 'styled-components'
import 'aos/dist/aos.css'
import AOS from 'aos'

const Wrapper = styled.div`
  padding: 10px 0px;
  margin: 0px auto;
  width: 100%;
`
const Card = styled.div`
  background: #fff;
  width: 100%;
`
const StP = styled(P)`
  margin: 10px;
`

export default function TopIntro() {
  useEffect(() => AOS.init({ duration: 1000 }))

  return (
    <Wrapper id="about">
      <Card data-aos="fade-right">
        <JumboSectionHeader>About Me</JumboSectionHeader>
        <StP>
          I am a <Bold>React</Bold> developer from Reading, UK. I create React
          web apps based on components styled in <br />
          <Bold>styled-components</Bold>. I use mainly JavaScript for front-end
          and have some knowledge of Node.Js for back-end and MongoDB.
        </StP>
        <StP>
          I design and create, modern looking websites and web applications with
          functionality including <Bold>APIs</Bold>. I use <Bold>Figma</Bold> to
          design a modern looking layout with the use of number of popular
          design patterns. Currently, most of the internet users browse Web on
          mobile devices therefor <Bold>RWD</Bold> is quite important that is
          why I am implementing it in my websites and applications.
        </StP>
        <StP>
          I use <Bold>React</Bold> which requires good knowledge of number of
          technologies like <Bold>JavaScript ES6</Bold>, HTML, CSS, Package
          Manager, WebPack, Babel and many more. Most of my work is kept via Git
          CLI on <Bold>GitHub</Bold> so I branch, commit, push, pull and merge
          fairly often.{' '}
        </StP>
        <StP>
          All my work is done on <Bold>Linux</Bold> machine so Terminal is used
          on a regular basis. Code editor of my choice is{' '}
          <Bold>Visual Studio Code</Bold>. Also I know how to build a backend
          for simple communication(express.js) with frontend(Axios) and
          database.
        </StP>
      </Card>
    </Wrapper>
  )
}
