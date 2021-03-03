import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const StButton = styled(Button)`
  margin: 10px 20px !important;
  width: 80px;
  background-color: #c2b092 !important;
  font-size: 20px !important;
  :active {
    border: none !important;
    background-color: #a1cae2 !important;
  }
`
export default function Buttons(props) {
  return (
    <Wrapper>
      <StButton variant="contained" size="medium" color="primary">
        Play
      </StButton>
      <StButton
        onClick={props.handleClear}
        variant="contained"
        size="medium"
        color="primary"
      >
        Clear
      </StButton>
    </Wrapper>
  )
}
