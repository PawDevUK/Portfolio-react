import React from 'react'
import { flexCenter, boxShadow1 } from '../styled'
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
  color: black;
  ${boxShadow1}
`

export const Row = function (props) {
  return (
    <Wrapper id={props.id} onClick={props.handleRowClick}>
      {props.row[props.index].map((item, i) => {
        return (
          <RowCell
            onClick={(index) => {
              props.handleCellClick(index)
            }}
            key={i}
            id={i}
          >
            {item}
          </RowCell>
        )
      })}
    </Wrapper>
  )
}
