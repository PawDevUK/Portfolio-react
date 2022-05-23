import React, { Component } from 'react'
import Toggler from 'components/common/Toggler'
import styled from 'styled-components'
import {store} from 'configureStore'
import {toggleLang} from 'actions/toggleLang.actions'
import {PolskaFlaga} from 'img/index'
import {EnglishFlag} from 'img/index'

const Wrapper = styled.div`
position: absolute;
top:-40px;
left:0;
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
