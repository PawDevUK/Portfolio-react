import React, { Component} from 'react'
import LogReg from 'components/F-Projects/Register_Login/LogReg'
import Base from './Base'

export default class RegisterSignIn extends Component {

  render() {
    return (
      <>
        <Base>
          <LogReg left='SignIn' textL='Login' right='Register' textR='Register'></LogReg> 
        </Base>
      </>
    )
  }
}
