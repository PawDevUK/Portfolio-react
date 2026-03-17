import { getPLineHight } from 'selectors/pageContent.selector';
import { expand } from 'img';
import Button from 'components/common/Button';
import styled from 'styled-components';
import { boxShadow12 } from 'styled.js';
import { connect } from 'react-redux';
import { LimitText } from 'factory/factory';
import React, { useEffect, useState } from 'react';
import { cardTextLength } from 'factory/factory';
import Stack from './Stack';
import Header from '../common/Header';

const Underline = styled.div`
  position: absolute;
  height: 1px;
  width: 100%;
  opacity: 0;
  background: #172a3f96;
  border-radius: 5px;
  left: 0px;
  bottom: -1px;
  transition: opacity 0.3s ease;
`;
const Wrapper = styled.div`
  margin: 40px 40px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1000;
  background-color: #fff;
  border: solid 1px #dbdbdb;
<<<<<<< HEAD
  padding: 4px;
  border-radius: 10px;
  ${boxShadow12};
  width: 100%;
  max-width: 520px;
  flex: 1 1 420px;
=======
  border-radius: 20px;
  ${boxShadow12};
  @media (max-width: 992px) {
    margin: 20px auto 0px auto;
  }
  width: 65%;
>>>>>>> d990d53bba5e6ba4add49868638db01227d32e21
  @media (max-width: 600px) {
    max-width: 100%;
    flex-basis: 90%;
  }
  @media (min-width: 992px) {
<<<<<<< HEAD
    max-width: 45%;
=======
    width: 42%;
  }
  @media (min-width: 992px) {
    &:nth-child(even) {
      margin-right: 0px;
    }
>>>>>>> d990d53bba5e6ba4add49868638db01227d32e21
  }
  &:hover ${Underline} {
    opacity: 1;
  }
`;

const HeaderWrapper = styled.div`
  margin: 0px auto 0px auto;
  width: 100%;
  display: flex;
  position: relative;
`;
const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const Expand = styled.div`
  margin: 0 0 0 auto;
  background-image: url(${expand});
  background-size: cover;
  background-position: center;
  height: 30px;
  width: 30px;
`;
const TextWrapper = styled.div`
  /* padding: 5px; */
  z-index: 10000;
  text-align: center;
  margin: 0px 10px 0px 10px;
`;
const StImg = styled.img`
  display: block;
  /* margin: auto; */
  /* height:200px; */
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0px 0px;
`;
const ButtonWrapper = styled.div`
  justify-content: space-between;
  margin: 0px auto 10px auto;
  display: flex;
  width: 300px;
  @media (max-width: 600px) {
<<<<<<< HEAD
    flex-direction: row;
    /* width: 220px; */
=======
    justify-content: center;
    width: 80%;
    margin: 0px auto 10px auto;
>>>>>>> d990d53bba5e6ba4add49868638db01227d32e21
  }
`;
const P = styled.p`
  line-height: ${(p) => p.p_line_height}px;
  font-size: 16px;
`;
const A = styled.a`
  @media (max-width: 600px) {
    margin: 5px;
  }
  margin: 10px;
  display: block;
  ${(props) =>
    props.disabled &&
    `
      pointer-events: none;
      opacity: 0.5;
      cursor: not-allowed;
    `}
  :hover {
    text-decoration: none;
  }
`;
function Card({ ...props }) {
  const [textLength, setTextLength] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    setTextLength(cardTextLength(width));
  }, [width]);

  return (
    <Wrapper>
      <StImg src={props.item.src} alt={props.item.alt}></StImg>
      {width >= 650 ? <Stack stack={props.stack}></Stack> : null}
      <HeaderWrapper>
        <TitleWrapper>
          <Header>
            {props.item.title}
            <Underline></Underline>
          </Header>
        </TitleWrapper>
        {/* <TopBtnWrapper>
          <Expand></Expand>
        </TopBtnWrapper> */}
      </HeaderWrapper>
      <TextWrapper>
        <P p_line_height={props.p_line_height}>
          {props.item.text}
          {/* {LimitText(props.item.text, !textLength ? 350 : textLength)} */}
        </P>
      </TextWrapper>
      <ButtonWrapper>
<<<<<<< HEAD
        <A href={props.item.webHref.href} target='_blank'>
          <Button light height='35px'>
            {props.item.webHref.button}
          </Button>
=======
        <A
          href={props.item.webHref.href}
          disabled={props.item.webHref.href ? false : true}
          target='_blank'
        >
          <Button light>{props.item.webHref.button}</Button>
>>>>>>> d990d53bba5e6ba4add49868638db01227d32e21
        </A>
        <A href={props.item.githubHref} target='_blank'>
          <Button light height='35px'>
            Github
          </Button>
        </A>
      </ButtonWrapper>
    </Wrapper>
  );
}
const mapStateToProps = (state) => {
  return {
    p_line_height: getPLineHight(state),
  };
};

export default connect(mapStateToProps)(Card);
