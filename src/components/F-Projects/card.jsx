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
  /* To push inner wrapper all the way down */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* ------- */
  z-index: 1000;
  background-color: #fff;
  border: solid 1px #dbdbdb;
  margin: 20px auto 0px auto;
  padding: 4px;
  border-radius: 10px;
  ${boxShadow12};
  width: 65%;
  @media (max-width: 600px) {
    width: 90%;
  }
  @media (min-width: 992px) {
    width: 45%;
  }
  &:hover ${Underline} {
    opacity: 1;
  }
`;
const HeaderWrapper = styled.div`
  margin: 0px auto 5px auto;
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
  padding: 5px;
  z-index: 10000;
  text-align: center;
  margin: 5px 20px;
`;
const StImg = styled.img`
  display: block;
  margin: auto;
  /* height:200px; */
  width: 80%;
`;
const ButtonWrapper = styled.div`
  justify-content: space-between;
  margin: auto auto 10px auto;
  display: flex;
  width: 250px;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 120px;
  }
`;
const P = styled.p`
  line-height: ${(p) => p.p_line_height}px;
  font-size: 16px;
`;
const A = styled.a`
  margin: 5px auto;
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
      {width >= 650 ? <Stack stack={props.stack}></Stack> : null}
      <StImg src={props.item.src} alt={props.item.alt}></StImg>
      <TextWrapper>
        <P p_line_height={props.p_line_height}>
          {LimitText(props.item.text, !textLength ? 150 : textLength)}
        </P>
      </TextWrapper>
      <ButtonWrapper>
        <A href={props.item.webHref.href} target='_blank'>
          <Button light>{props.item.webHref.button}</Button>
        </A>
        <A href={props.item.githubHref} target='_blank'>
          <Button light>Github Repo</Button>
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
