import '../../../node_modules/aos/dist/aos.css';
import { AnimationWrapper } from 'react-hover-animation'
import React, { useEffect } from 'react';
import styled from 'styled-components'
import AOS from 'aos';

const Wrapper = styled.div`
@media(max-width:700px){
    margin: 10px;
height:120px;
width:120px;
}
margin: 5px;
height:150px;
width:150px;
box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);
text-align:center;
border-radius: 10px;
padding:0px;

`
const Text = styled.p`
margin:10px auto 8px auto;
font-size:16px;
font-family:'Nunito Sans';
`
const Img = styled.img`
@media(max-width:700px){
    width:100px;
    height:80px;
}
width:122px;
height:100px;
object-fit: scale-down;
`
const Link = styled.a`
&:hover{
    text-decoration:none;
}
`

export default function CardSection(props) {

    useEffect(() => {
    
        AOS.init({ duration: 1000 });
    })

    return (
        <Link href={props.href} target="_blank" key={props.key} data-aos="fade">
            <AnimationWrapper>
                <Wrapper mobile={props.Mobile} >
                    <Text>{props.title}</Text>
                    <Img src={props.image} mobile={props.Mobile}></Img>
                </Wrapper>
            </AnimationWrapper>

        </Link>
    );

};