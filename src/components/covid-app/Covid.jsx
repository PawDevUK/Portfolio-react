import styled, { createGlobalStyle } from 'styled-components';
import {Header, Main,Footer} from './components';
import {Background} from 'components/covid-app/components/styled'
import React from 'react';

const GlobalStyle = createGlobalStyle`
body{
  margin:0px ;
  padding:0px;
  font-family: 'Lato', sans-serif;
}
`
export const Container = styled.div`
${Background};
width:1000px;
margin:0px auto;
padding:1px;
@media(max-width:1000px){
  width:100%;
}
`
export default function App() {
  return (
    <Container>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Container>
  )
}


