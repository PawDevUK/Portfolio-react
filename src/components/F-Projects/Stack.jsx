import React from 'react'
import styled from 'styled-components'
import { boxShadow1 } from 'styled'

const Wrapper = styled.div`
  padding: 3px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`
const Thumbnail = styled.img`
  height: 36px;
  margin: 2px;
  border-radius: 5px;
  ${boxShadow1}
`
export default function Stack({ ...props }) {
  return (
    <Wrapper>
      {props.stack.map((item, index) => {
        return <Thumbnail src={item} key={index}></Thumbnail>
      })}
    </Wrapper>
  )
}
