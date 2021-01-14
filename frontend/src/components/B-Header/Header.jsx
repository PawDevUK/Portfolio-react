import { Transition } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { SlideDown } from 'react-slidedown';
import Button from 'components/common/button'
import 'react-slidedown/lib/slidedown.css'
import React, { useState } from 'react';
import { SvgLoader } from 'react-svgmt';
import logo from "img/pavdev.svg";
import Burger from 'components/common/burger'
const backgroundColor = '#17293F';

const LogoHeader = styled(SvgLoader)`
margin:auto 50px auto auto;
width:auto;
height:50px;
>path{
    fill:#17293f;
}
`;

const Wrapper = styled.div`
margin:0px;
padding:0px;
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
color:#353535;
display:none;
@media(max-width:992px){
display:block;
}
`
const MobileText = styled.p`
color:#444444;
display:inline-block;
margin:30px auto 16px 64px;
@media(min-width:992px){
    display:none;
}
`
// Main nav
const MainNav = styled.div`
display:flex;
height:150px;
width:100%;
/* display:inline-block; */
`
const InnerMainNav = styled.div`
display:flex;
margin:43px 0px auto auto; 
width:600px;
`
const MainLogo = styled(SvgLoader)`
display:none;
@media(min-width:993px){
    display:inline-block;
    margin:30px auto auto 30px;
    width:auto;
    height:50px;
}
>path{
    fill:#fff;
}
`;

const Link = styled.a`
display:none;
@media(min-width:993px){
    display:block;
    font-family:'Nunito Sans', sans-serif;
    font-size:18px;
    color:#CDCDCD;
    text-transform:capitalize;
    margin-right:32px;
    font-weight:700;
    &:hover{
        text-decoration:none;
        color:#fff;
    }
}
`

const BigBlue = styled.div`
display:block;
margin:0px;
height:583px;
background-color:${backgroundColor};
@media(max-width:700px){
    height:60vw;
}
`
const JumboTextWrapper = styled.div`
position:relative;
text-align:center;
width:400px;
margin:auto;
@media(max-width:700px){
    width:50vw;
    height:auto;
}
`
const JumboHeader = styled.h1`
display:block;
color:white;
@media(max-width:700px){
    font-size:5vw;
}
`
const Quote= styled.p`
font-style: oblique;
height:20px;
width:120px;
position:absolute;
bottom:10px;
right:0px;
color:white;

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
export default function Header() {
    const [toggle, setToggle] = useState(false)
    const [menu] = useState([{
        title: "Projects",
        href: "#home",
        style: "Green",
        disabled: false
    },
    {
        title: "About",
        href: "#about",
        disabled: false,

    },
    {
        title: "What I Use",
        href: "#use",
        disabled: false
    },
    {
        title: "React",
        href: "#react",
        disabled: false,
    },
    {
        title: "Hacker News",
        href: "#hacker",
        disabled: false,
    }
    ])
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
    return (
        <Wrapper>
            <MobilTopDiv>
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
                            {menu.map((item, i) => {
                                return (
                                    <MobileLink key={i} href={item.href}>
                                        { item.title}
                                    </MobileLink>
                                )
                            })}
                        </LinkContainer>
                    </MobilNav> : null}
                </Transition>
            </SlideDown>
            <BigBlue>
                <MainNav>
                    <MainLogo path={logo} ></MainLogo>
                    <InnerMainNav>
                        {menu.map((item, i) => {
                            return (
                                <Link key={i} href={item.href}>
                                    { item.title}
                                </Link>
                            )
                        })}
                    </InnerMainNav>
                </MainNav>
                <JumboTextWrapper>
                    <JumboHeader>"Talk is cheap, <br/> show me the code."</JumboHeader>
                    <Quote>Linus Torvalds</Quote>
                    <JumboText> </JumboText>
                    <Button style={{ margin: "auto" }}>Projects</Button>
                </JumboTextWrapper>

            </BigBlue>
        </Wrapper>
    );
}