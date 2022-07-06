import React, { Component } from 'react'
import Toggler from 'components/common/Toggler'
import styled, { keyframes } from 'styled-components'
import {store} from 'configureStore'
import {toggleLang} from 'actions/toggleLang.actions'
import {PolskaFlaga} from 'img/index'
import {EnglishFlag} from 'img/index'

const appear = keyframes`
  0% {
        display: none;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
`;

const Wrapper = styled.div`
  position: absolute;
  top:-40px;
  left:0;
  animation: ${appear} 0.6s linear;
`

export default class LangSwitch extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      checked:false
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(){
    this.setState( {checked:!this.state.checked })
    store.dispatch(toggleLang(this.state.checked))
  }

  render() {
    return (
        <Wrapper>
            <Toggler checkedImg={EnglishFlag} uncheckedImg={PolskaFlaga} toggle={this.onChange} checked={this.state.checked} ></Toggler>
        </Wrapper>
    )
  }
}
