import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
`;
const H1 = styled.h1`
    margin-top:100px;
`;

export default function Calendar() {
    return (
        <Wrapper>
            <H1>Calendar</H1>
        </Wrapper>
    );
}
