import styled from 'styled-components';
import { h3Regular, h2Regular, shadow6, Background, GlobalBackground, FlexCenter } from '../styled';
import React from 'react';

const Wrapper = styled.div`
    background-color: #fff;
    display: flex;
    margin: 10px auto;
    width: 730px;
    ${shadow6};
`;
const LeftInnerWrapper = styled.div`
    width: 35%;
`;
const Country = styled.div`
    margin: 100px auto 10px auto;
    ${FlexCenter};
    width: 80%;
    height: 33px;
    ${GlobalBackground}
`;
const Thumbnail = styled.img`
    display: block;
    margin: auto;
    width: 90%;
`;
const RightInnerWrapper = styled.div`
    width: 65%;
    padding: 10px;
`;
const Header = styled.div`
    ${h2Regular};
    margin: 21px auto;
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
            <LeftInnerWrapper>
                <Country>{props.country}</Country>
                <Thumbnail src={props.src}></Thumbnail>
            </LeftInnerWrapper>
            <RightInnerWrapper>
                <Header>{props.title}</Header>
                <Article>
                    <ArticleText>
                        {props.summary}
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
