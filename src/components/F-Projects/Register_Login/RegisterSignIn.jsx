import React, { Component} from 'react'
import NanButtons from 'components/F-Projects/Register_Login/NavButtons'
import Base from './Base'

export default class RegisterSignIn extends Component {

  render() {
    return (
      <>
        <Base>
          <NanButtons left='SignIn' textL='Login' right='Register' textR='Register'></NanButtons> 
        </Base>
      </>
    )
  }
}
