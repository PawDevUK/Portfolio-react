import React, { Component} from 'react'
import LogReg from 'components/F-Projects/Register_Login/LogReg'
import Base from './Base'

export default class RegisterSignIn extends Component {

  render() {
    return (
      <>
        <Base>
          <LogReg></LogReg> 
        </Base>
      </>
    )
  }
}
