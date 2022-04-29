import { rightData } from 'store/footer'
import { BackgroundBlue } from 'styled'
import styled, { css } from 'styled-components'
import Particles from 'react-particles-js'
import { getYear } from 'factory'
import React, { useState } from 'react'
import VisitorCounter from 'components/H-Footer/VisitorCounter'

const center = css`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`

const Wrapper = styled.div`
  position: relative;
  ${BackgroundBlue}
  width: 100%;
`
const StParticles = styled(Particles)`
  position: absolute;
  height: 90%;
  width: 100%;
`
const InnerWrapper = styled.div`
  height: 100px;
  display: flex;
  margin: auto;
  width: 95%;
  @media (max-width: 992px) {
    display: block;
    height: auto;
  }
`
const Left = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
  ${center};
  width: 20%;
`

const Mid = styled.div`
  ${center};
  width: 60%;
  @media (max-width: 992px) {
    display: none;
  }
`
const Mobile = styled.div`
  margin: auto;
  display: none;
  @media (max-width: 992px) {
    text-align: center;
    padding: 20px;
    display: block;
    margin: auto;
  }
`

const Right = styled.div`
  ${center};
  width: 20%;
  @media (max-width: 992px) {
    display: none;
  }
`
const NickHover = css`
  color: #01579b;
  font-size: 20px;
`

const H2 = styled.h2`
  text-align:center;
  opacity:80%;
  font-size:13px ;
  margin: auto;
  cursor: pointer;
  color: #fff;
  display: flex;
  width: 280px;
  padding: 0px 0px 10px 0px !important;
  @media (max-width: 400px) {
    display: block;
    width: 265px;
  }
`
const Nick = styled.p`
  margin: -4px 3px;
  font-size: 20px;
  font-weight: 600;
  ${(p) =>
    p.nick
      ? css`
          ${NickHover}
        `
      : css`
          color: #fff;
        `};
`
const Text = styled.p`
  color: #fff;
  opacity:80%;
  font-size:13px ;
`
export default function Footer() {
  let [nick, setNick] = useState(false)
  function mouseEnterH2() {
    setNick((p) => (nick = !p))
  }

  function FooterHeader(nick){
    return(
      <H2>
        All rights reserved <Nick nick={nick}> pavdev </Nick> London {getYear()}
      </H2>
    )
  }
  return (
    <Wrapper onMouseEnter={mouseEnterH2} onMouseLeave={mouseEnterH2}>
      <StParticles
        params={{
          particles: {
            number: {
              value: 30,
            },
            size: {
              value: 1,
            },
            autoPlay: true,

            opacity: {
              value: 0.4,
              random: true,
            },
            links: {
              enable: true,
              opacity: 0.1,
            },
          },
        }}
      />
      <InnerWrapper>
        <Left></Left>
        <Mid>
          {FooterHeader(nick)}
          <VisitorCounter counter={4}></VisitorCounter>
        </Mid>
        <Right>
          <ul>
            {rightData.map((li, i) => {
              return (
                <li key={i}>
                  <Text>{li}</Text>
                </li>
              )
            })}
          </ul>
        </Right>
        <Mobile>
          {FooterHeader(nick)}
          <ul>
            {rightData.map((li, i) => {
              return (
                <li key={i}>
                  <Text>{li}</Text>
                </li>
              )
            })}
          </ul>
        </Mobile>
      </InnerWrapper>
    </Wrapper>
  )
}
