import styled, { css } from 'styled-components';
import { h3Regular, h2Regular, shadow6, Background } from '../styled';
import { RemoveURLFromString } from '../factory';
import React from 'react';

const Wrapper = styled.div`
    background-color: #fff;
    display: flex;
    margin: 10px auto;
    width: 730px;
    ${shadow6};
    padding: 5px;
`;
const LeftInnerWrapper = styled.div`
    ${(p) => {
        return p.src
            ? css`
                  width: 35%;
              `
            : css`
                  display: none;
              `;
    }}
`;

const Thumbnail = styled.img`
    margin: 80px auto;
    display: block;
    width: 90%;
`;
const RightInnerWrapper = styled.div`
    padding: 10px;
    ${(p) => console.log(p)}
    ${(p) => {
        return p.src !== null
            ? css`
                  width: 65%;
              `
            : css`
                  width: 100%;
              `;
    }}
`;
const Header = styled.div`
    ${h2Regular};
    margin: 21px auto;
    text-align: center;
`;
const Article = styled.div`
    margin: auto;
    ${Background};
    padding: 20px;
    margin: auto;
`;
const ArticleText = styled.p`
    ${h3Regular}
`;
const Here = styled.span`
    margin: 0px 5px;
`;
const A = styled.a``;
const Author = styled.p`
    ${h3Regular}
    margin-top:10px;
`;
export default function Card(props) {
    return (
        <Wrapper>
            <LeftInnerWrapper src={props.src}>
                <Thumbnail src={props.src}></Thumbnail>
            </LeftInnerWrapper>
            <RightInnerWrapper src={props.src}>
                <Header>{props.title}</Header>
                <Article>
                    <ArticleText>
                        {RemoveURLFromString(props.summary)}
                        ...
                        <A target='_blanc' href={props.link}>
                            <Here>continue reading</Here>
                        </A>
                    </ArticleText>
                    <Author>Author: {props.author}</Author>
                </Article>
            </RightInnerWrapper>
        </Wrapper>
    );
}
