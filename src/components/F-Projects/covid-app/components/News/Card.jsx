import styled from 'styled-components';
import { h1Light } from '../styled';
import React from 'react';

const Wrapper = styled.div`
    width: 730px;
    background-color: #fff;
`;
const LeftInnerWrapper = styled.div``;
const Country = styled.div``;
const Thumbnail = styled.div``;
const RightInnerWrapper = styled.div``;
const Header = styled.div`
    ${h1Light}
`;
const Article = styled.div``;
const ArticleText = styled.div;
export default function Card(props) {
    return (
        <Wrapper>
            <LeftInnerWrapper>
                <Country>{props.country}</Country>
                <Thumbnail></Thumbnail>
            </LeftInnerWrapper>
            <RightInnerWrapper>
                <Header>{props.title}</Header>
                <Article></Article>
            </RightInnerWrapper>
        </Wrapper>
    );
}
