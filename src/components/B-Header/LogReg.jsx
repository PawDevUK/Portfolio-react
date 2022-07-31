import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import {P} from '../common/typography'

const Wrapper = styled.div`
    color: #fff;
    display:flex;
    justify-content: center;
`

export default function LogReg() {
    const styleB = {
        margin:'10px',
        height:'25px',
        width:'75px'
    }
    const styleP = {
        color:'#fff',
        margin:'auto'
    }
    return (
        <Wrapper>
            <Button style={styleB}>Login</Button>
            <P style={styleP}>or</P> 
            <Button style={styleB} >Register</Button>
        </Wrapper>
  )
}
