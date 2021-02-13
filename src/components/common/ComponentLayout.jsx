import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
padding:5px;
`

export default function ComponentLayout({children}){
    return(
      <Wrapper>
      {children}
      </Wrapper>
    )
}