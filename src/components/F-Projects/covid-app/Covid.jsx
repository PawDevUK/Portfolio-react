import React, {lazy} from 'react';
import { Background } from 'components/F-Projects/covid-app/components/styled';
import { Header, Main, Footer, News } from './components';
import styled from 'styled-components';
import React from 'react';

export const Container = styled.div`
    font-family: 'Lato', sans-serif;
    ${Background};
    width: 1000px;
    margin: 0px auto;
    padding: 1px;
    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export default function App() {
    return (
        <Container>
            <Header></Header>
            <Main></Main>
            <News></News>
            <Footer></Footer>
        </Container>
    );
}
