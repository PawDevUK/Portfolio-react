import React from 'react'
import { stack } from 'store.js'
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
        {stack.map((item) => {
          return (
            <Card
              styled={item.styled}
              key={item._id}
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
