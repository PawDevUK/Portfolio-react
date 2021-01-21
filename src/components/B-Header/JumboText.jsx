import styled from 'styled-components';
import Button from 'components/common/button'
import React from 'react';

const JumboTextWrapper = styled.div`
text-align:center;
width:600px;
margin:0px auto;
padding-top:1px;
@media(max-width:700px){
    width:350px;
}`

const JumboHeaderWrapper = styled.div`
position:relative;
margin:0px auto auto auto;
height:130px;
width:400px;
margin:100px auto auto auto;
@media(max-width:700px){
    height:16vw;
    margin:100px auto auto auto;
height:80px;
width:250px;
}
`
const JumboHeader = styled.h1`
font-family:'Nunito Sans', sans-serif;
font-weight:400;
width:100%;
display:block;
color:white;
@media(max-width:700px){
    font-size:26px;
}
`
const Quote = styled.p`
font-style: oblique;
height:20px;
width:120px;
position:absolute;
color:white;
right:0px;
bottom:0px;
@media(max-width:700px){
    font-size:13px;
    margin:3px;
}
`
const JumboText = styled.p`
display:none;
@media(min-width:700px){
    display:block;
    font-family:'Nunito Sans', sans-serif;
    color:#fff;
    font-size:20px;
    font-weight:200;
}
`

const Anchor = styled.a`
display:block;
margin-top:30px;
&:hover{
    text-decoration:none;
}
`

export default function JumboMainText({ ...props }) {
    return (
        <JumboTextWrapper>
            <JumboHeaderWrapper>
                <JumboHeader>"Talk is cheap, <br /> show me the code."</JumboHeader>
                <Quote>Linus Torvalds</Quote>
            </JumboHeaderWrapper>
            <JumboText>If you wish, You can check my GitHub repositories.</JumboText>
            <Anchor href="https://github.com/GitcrackerUK" target="_blank">
                <Button mobile={props.mobile} style={{ margin: "auto" }}>My GitHub</Button>
            </Anchor>
        </JumboTextWrapper>
    )
}