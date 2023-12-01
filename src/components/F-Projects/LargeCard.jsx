import React from 'react';
import Card from '../F-Projects/card';
import styled from 'styled-components';

const Wrapper = styled.div`
    width:100%;
    height:100%;

`

export default function LargeCard(props) {
  return (
  <Wrapper>
    <Card stack={props.stack} key={props.key} item={props.item}></Card>
  </Wrapper>
  )
}
