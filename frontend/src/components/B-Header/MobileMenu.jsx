import { Transition } from 'react-transition-group';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Burger from 'components/common/burger'
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css'
import dropdown from 'img/icon/dropdown.svg'
import { SvgLoader } from 'react-svgmt';
import logo from "img/pavdev.svg";
import { Menu } from 'store';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Wrapper = styled.div`
`
const LogoHeader = styled(SvgLoader)`
margin:auto 50px auto auto;
width:auto;
height:50px;
>path{
    fill:#17293f;
}
`;

const MobilTopDiv = styled.div`
display:none;
@media(max-width:992px){
    margin:0px;
    height:70px ;
    background-color:#fff;
    display:flex;
    width:100%;
}
`
const MobilNav = styled.div`
${p => p.toggle ? css`display:block;` : css`display:none;`};
@media(max-width:992px){
    margin:0px;
    background-color:#ffffff;
}
`
const LinkContainer = styled.div`
padding-bottom:20px;
margin: 16px auto 0px 86px;
height:auto;
@media(min-width:992px){
    display:none;
}
`

const MobileLink = styled.a`
&:hover{
    color:#353535;
    text-decoration:none;
    opacity:0.7;
}
position:relative;
color:#353535;
display:block;
`
const DropDowIcon =styled(SvgLoader)`
position:absolute;
left:85px;
top:10px;
`
const DropDown= styled(MobileLink)`
margin-left:50px;
padding:0px;

` 
const MobileText = styled.p`
color:#444444;
display:inline-block;
margin:30px auto 16px 64px;
@media(min-width:992px){
    display:none;
}
`
export default function MobileMenu() {
    const [toggle, setToggle] = useState(false)
    const [mouseOver, setMouseOver] = useState(false)
    const duration = 300;
    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 1 },
        exited: { opacity: 0 },
    };
    function click() {
        setToggle(p => !p)
    }
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })
    function handleMouseHover(){
        setMouseOver((mouseOver)=>!mouseOver)
    }
    return (
        <Wrapper >
            <MobilTopDiv  >
                <Burger click={click}></Burger>
                <LogoHeader path={logo}>
                </LogoHeader>
            </MobilTopDiv>
            <SlideDown>
                <Transition in={toggle} timeout={duration}>
                    {(state) => toggle ? <MobilNav style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}
                        className={`fade fade-${state}`} toggle={toggle}>
                        <MobileText>PAWEL SIWEK PORTFOLIO</MobileText>
                        <LinkContainer>
                            {Menu.map((item, i) => {
                                return (
                                        <MobileLink   onMouseEnter={item.react?handleMouseHover:null} onMouseLeave={item.react?handleMouseHover:null} key={i} href={item.href}>
                                            {item.title}
                                            <SlideDown>  {mouseOver?<DropDown href={item.href}>{item.react?item.react.title:null}</DropDown>:item.react?<DropDowIcon path={dropdown}></DropDowIcon>:null}</SlideDown>
                                        </MobileLink>
                                )
                            })}
                        </LinkContainer>
                    </MobilNav> : null}
                </Transition>
            </SlideDown>
        </Wrapper>




    )


}