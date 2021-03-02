import React from 'react'
import { flexCenter } from '../styled'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

const RowCell = styled.div`
  border-radius: 5px;
  height: 100px;
  width: 100px;
  background: #a1cae2;
  margin: 30px;
  ${flexCenter};
  font-size: 40px;
  color: #025955;
`

export const GetRowElement = function (row, index) {
  return (
    <Wrapper>
      {row[index].map((item) => {
        return <RowCell>{item}</RowCell>
      })}
    </Wrapper>
  )
}
