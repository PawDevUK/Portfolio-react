import Button from 'components/common/Button'
import styled from 'styled-components'
import { boxShadow12 } from 'styled.js'
import { LimitText } from 'factory'
import React from 'react'
import Stack from './Stack'

const Header = styled.h5`
  transition: transform 0.5s;
`
const Wrapper = styled.div`
  border: solid 1px #dbdbdb;
  margin: 20px auto 0px auto;
  border-radius: 10px;
  ${boxShadow12};
  width: 60%;
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (min-width: 992px) {
    height: 430px;
    width: 40%;
  }
  &:hover ${Header} {
    transform: scale(1.2);
  }
`
const CardContent = styled.div`
  z-index: 10000;
  text-align: center;
  margin: 0 5px 10px 5px;
`
const StImg = styled.img`
  /* border-radius: 10px 10px 0px 0px; */
  height: 200px;
  width: 100%;
`

const ButtonWrapper = styled.div`
  justify-content: space-between;
  margin: 10px auto auto auto;
  display: flex;
  width: 210px;
`
const P = styled.p``
const A = styled.a`
  :hover {
    text-decoration: none;
  }
`
export default function Card({ ...props }) {
  return (
    <Wrapper>
      <Stack stack={props.stack}></Stack>
      <StImg src={props.item.src} alt={props.item.alt}></StImg>
      <CardContent>
        <Header className="card-title">{props.item.title}</Header>
        <P className="card-text">{LimitText(props.item.text, 120)}</P>

        <ButtonWrapper>
          <A href={props.item.webHref.href} target="_blank">
            <Button light>{props.item.webHref.button}</Button>
          </A>
          <A href={props.item.githubHref} target="_blank">
            <Button light>Github Repo</Button>
          </A>
        </ButtonWrapper>
      </CardContent>
    </Wrapper>
  )
}
