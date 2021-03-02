import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

const RowCell = styled.div`
  height: 40px;
  width: 40px;
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
