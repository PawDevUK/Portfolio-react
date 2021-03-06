import {
  SectionHeaders,
  h1Light,
  h1LightRES,
  h3Light,
  shadow6,
} from 'components/F-Projects/covid-app/components/styled'
import styled, { css } from 'styled-components'
import React from 'react'

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  ${SectionHeaders};
  display: flex;
  ${(p) =>
    p.Large
      ? css`
          position: absolute;
          width: 269px;
          height: 40px;
          ${h1Light}
          ${shadow6};
          top: 40px;
          left: 40px;
          @media (max-width: 1000px) {
            top: 4vw;
            left: 3vw;
            width: 27vw;
            height: 4.5vw;
            ${h1LightRES}
          }
        `
      : css``}

  ${(p) =>
    p.Regular
      ? css`
          margin: 5px auto 0px auto;
          padding-left: 60px;
          ${shadow6};
          ${h3Light};
          width: 80%;
        `
      : css``}
`

export default function SectionHeader(props) {
  return <Wrapper {...props}></Wrapper>
}
