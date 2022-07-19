import React from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
width:250px;
height:60px;
margin:auto;
/* border-radius:0 0 0 5px; */
`
const Inner = styled.div`
background-color:rgba(33, 33, 33, 0.08);
border-radius: 4px 4px 0px 0px;
height:60px;
padding: 8px 0px 0px 16px;
border-bottom:1px solid rgba(1, 87, 155, 1);
`
const Label = styled.div`
margin-left:3px;
color:rgba(1, 87, 155, 1);
font-size:14px;
`
const Inp = styled.input`
margin-left:0px;
height:24px;
outline: none;
border:none;
background-color:rgba(33, 33, 33, 0.00);
`
const UnderText = styled.div`
color:rgba(1, 87, 155, 1);
font-size:8px;
margin: 3px 0px 0px 16px;
`

export default function Input({red, label, placeholder, underText, }) {
    return (
        <>
            <Wrapper>
                <Inner>
                    <Label>{label}</Label>
                    <Inp placeholder={placeholder}></Inp>
                </Inner>
               {red?<UnderText>{underText}</UnderText>:null} 
            </Wrapper>
        </>
    )
} 