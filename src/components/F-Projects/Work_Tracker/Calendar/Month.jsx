import styled from 'styled-component';
import React, { Component, useEffect, useState } from 'react'

const Wrapper = styled.div`
    height:196px;
    width:225px;
    background-color: #373435;
`

export default function Month() {
  
  const [month, setMonth] = useState([]);

  function createMont(L) {
    const newMonth = [];
    for (let i = 0; i < L; i++) {
      newMonth.push(i);
    }
    setMonth(newMonth);
  }

  useEffect(() => {
    createMont(12); // Assuming L is 12 for the number of months
    console.log('---------->',month);

  }, []);

  return (
    <Wrapper>
      {/* You can render your months or other content here */}
    </Wrapper>
  );
}
