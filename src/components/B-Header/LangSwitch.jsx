import React, { Component } from 'react'
import Toggler from 'components/common/Toggler'
import styled from 'styled-components'

const Wrapper = styled.div`

`


export default class LangSwitch extends Component {
  render() {
    return (
        <Wrapper>
            <Toggler></Toggler>
        </Wrapper>
    )
  }
}
