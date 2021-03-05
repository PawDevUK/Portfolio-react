import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import TextField from '@material-ui/core/TextField'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 96px;
`
const InputWrapper = styled.form`
  margin: 20px auto;
  ${(p) =>
    p.nameSubmit
      ? css`
          display: none;
        `
      : css``}
`
const UsernameWrapper = styled.div`
  margin: auto;
  ${(p) =>
    !p.nameSubmit
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`

export default function Header(props) {
  const [name, setName] = useState('')
  const [nameSubmit, setSubmit] = useState(false)
  useEffect(() => {}, [])

  return (
    <Wrapper>
      <InputWrapper
        nameSubmit={nameSubmit}
        onSubmit={(e) => {
          props.Submit(e, name)
          setSubmit(e.type ? true : false)
        }}
      >
        <TextField
          onChange={(e) => {
            setName(e.target.value)
          }}
          id="user"
          label="Username"
          variant="outlined"
        />
      </InputWrapper>
      <UsernameWrapper nameSubmit={nameSubmit}>
        <h1>{name}</h1>
      </UsernameWrapper>
    </Wrapper>
  )
}
