import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h5`
  font-size: 20px;
  font-weight: bold;
  margin: 0px 0px 4px 0px;
  position: relative;
  display: inline-block;
`;

export default function Header(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
