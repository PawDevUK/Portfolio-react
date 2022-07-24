import { getPLineHight } from 'selectors/pageContent.selector'
import Button from 'components/common/Button'
import styled from 'styled-components'
import { boxShadow12 } from 'styled.js'
import { connect } from 'react-redux'
import { LimitText } from 'factory'
import React from 'react'
import Stack from './Stack'

const Header = styled.h5`
  font-size:18px;
  transition:transform 0.5s;
`
const Wrapper = styled.div`
  z-index:1000;
  background-color:#fff;
  border:solid 1px #dbdbdb;
  margin:20px auto 0px auto;
  padding:4px;
  border-radius:10px;
  ${boxShadow12};
  width:60%;
  @media (max-width:600px) {
    width:100%;
  }
  @media (min-width:992px) {
    height:430px;
    width:40%;
  }
  &:hover ${Header} {
    transform: scale(1.2);
  }
`
const CardContent = styled.div`
  z-index:10000;
  text-align:center;
  margin:0 5px 10px 5px;
`
const StImg = styled.img`
  display:block;
  margin:auto;
  height:200px;
  width:80%;
`
const ButtonWrapper = styled.div`
  justify-content:space-between;
  margin:10px auto auto auto;
  display:flex;
  width:250px;
`
const P = styled.p`
  line-height: ${p=>p.p_line_height}px;
  font-size:16px;
`
const A = styled.a`
  margin:auto;
  :hover {
    text-decoration: none;
  }
`
 function Card({ ...props }) {
  return (
    <Wrapper>
      <Stack stack={props.stack}></Stack>
      <StImg 
        src={props.item.src} 
        alt={props.item.alt}></StImg>
      <CardContent>
        <Header className="card-title">{props.item.title}</Header>
        <P 
          p_line_height={props.p_line_height} 
          className="card-text">
            {LimitText(props.item.text, 150)}
        </P>
        <ButtonWrapper>
          <A 
            href={props.item.webHref.href} 
            target="_blank">
            <Button light>{props.item.webHref.button}</Button>
          </A>
          <A 
            href={props.item.githubHref} 
            target="_blank">
            <Button light>Github Repo</Button>
          </A>
        </ButtonWrapper>
      </CardContent>
    </Wrapper>
  )
}
const mapStateToProps = (state)=>{
  return {
    p_line_height:getPLineHight(state)
  }
}

export default connect(mapStateToProps)(Card)