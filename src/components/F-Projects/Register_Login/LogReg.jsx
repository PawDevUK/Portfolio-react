import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Button from '../../common/Button';
import {P} from '../../common/typography'

const Wrapper = styled.div`
    color: #fff;
    display:flex;
    justify-content: center;
`

export default function LogReg(props) {
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
            <Link to={props.left} style={Style_Link}>
                <Button style={style_B}>{props.textL}</Button>
            </Link>
            <P style={style_P}>or</P>
            <Link to={props.right} style={Style_Link}>
                <Button style={style_B}>{props.textR}</Button>
            </Link>
        </Wrapper>
  )
}
