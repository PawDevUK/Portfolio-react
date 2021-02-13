import styled from 'styled-components';
import {Header, Main,Footer} from './components';
import {Background} from 'components/covid-app/components/styled'
import React from 'react';

export const Container = styled.div`
font-family: 'Lato', sans-serif;
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
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Container>
  )
}


