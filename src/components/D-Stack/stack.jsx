import React from 'react'
import { stack } from 'config/stack.config'
import Card from './card.jsx'
import styled from 'styled-components'
import JumboSectionHeader from 'components/common/JumboSectionHeader'

const Wrapper = styled.div`
  background: #fff;
  width: 100%;
  margin: 0px auto 50px auto;
`
const Thumbnails = styled.div`
  justify-content: center;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 700px) {
    width: 100%;
  }
`

export default function Stack() {
  return (
    <Wrapper id="use">
      <JumboSectionHeader>What I use</JumboSectionHeader>
      <Thumbnails>
        {stack.map((item, i) => {
          return (
            <Card
              key={i}
              styled={item.styled}
              image={item.img}
              title={item.title}
              text={item.text}
              href={item.webHref}
            ></Card>
          )
        })}
      </Thumbnails>
    </Wrapper>
  )
}
