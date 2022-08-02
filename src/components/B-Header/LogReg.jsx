import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Button from '../common/Button';
import {P} from '../common/typography'

const Wrapper = styled.div`
    color: #fff;
    display:flex;
    justify-content: center;
`

export default function LogReg() {
    const style_B = {
        margin:'10px',
        height:'25px',
        width:'75px'
    }
    const style_P = {
        color:'#fff',
        margin:'auto'
    }
    const Style_Link = {
        'text-decoration':'none'
    }
    return (
        <Wrapper>
            <Link to="login" style={Style_Link}>
                <Button style={style_B}>Login</Button>
            </Link>
            <P style={style_P}>or</P>
            <Link to="register" style={Style_Link}>
                <Button style={style_B}>Register</Button>
            </Link>
        </Wrapper>
  )
}
