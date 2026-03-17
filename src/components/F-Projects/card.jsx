import { getPLineHight } from 'selectors/pageContent.selector';
import Button from 'components/common/Button';
import styled from 'styled-components';
import { boxShadow12 } from 'styled.js';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
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
  display: flex;
  flex-direction: column;
  align-items: stretch;
  z-index: 1000;
  background-color: #fff;
  border: solid 1px #dbdbdb;
  border-radius: 20px;
  ${boxShadow12};
  max-width: 400px;
  flex: 1 1 360px;
  @media (max-width: 600px) {
    max-width: 100%;
    flex-basis: 100%;
  }
  @media (max-width: 992px) {
    max-width: 640px;
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
  /* width: 300px; */
  @media (max-width: 600px) {
    justify-content: center;
    width: 80%;
    margin: 0px auto 10px auto;
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
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <A
          href={props.item.webHref.href}
          disabled={props.item.webHref.href ? false : true}
          target='_blank'
        >
          <Button light height='35px' width='150px'>
            {props.item.webHref.button}
          </Button>
        </A>
        <A href={props.item.githubHref} target='_blank'>
          <Button light height='35px' width='150px'>
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
