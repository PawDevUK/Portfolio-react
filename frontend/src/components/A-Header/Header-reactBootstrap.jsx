import styled, { css } from 'styled-components';
import 'react-slidedown/lib/slidedown.css'
import { SlideDown } from 'react-slidedown'
import React, { useState } from 'react';
import logo from "../../img/pavdev.png";
import Burger from '../common/burger'
const backgroundColor = '#17293F';

const LogoHeader = styled.img`
margin:auto 50px auto auto;
width:auto;
height:50px;
`;

const Wrapper = styled.div`
margin:0px;
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


const MobileNav = styled.div`
${p => p.toggle ? css`display:block;` : css`display:none;`};
@media(max-width:992px){
    margin-top:0px;
    background-color:#ffffff;
}
>${MobileLink}{
    margin: 16px auto 22px 86px;
}
`
const LinkContainer = styled.div`
  margin: 16px auto 22px 86px;
  height:auto;
`
const MobileLink = styled.a`
display:none;
@media(max-width:992px){
display:block;
}
`
const MobileText = styled.p`
color:#444444;
display:inline-block;
margin:30px auto 16px 64px;
`
// Main nav

const MainNav = styled.div`
height:150px;
width:100%;
display:inline-block;
`
const InnerMainNav = styled.div`
margin:43px 0px auto auto; 
width:600px;
display:flex;
justify-content:flex-end;
`
const Link = styled.a`
display:none;
@media(min-width:990px){
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
height:583px;
background-color:${backgroundColor};
`
export default function HeaderReactBootstrap() {
    const [toggle, setToggle] = useState(false)
    const [menu, setMenu] = useState([{
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

    function click() {
        setToggle(p => !p)
    }
    return (
        <Wrapper>


            <MobilTopDiv>
                <Burger click={click}></Burger>
                <LogoHeader src={logo}></LogoHeader>
            </MobilTopDiv>
            <SlideDown>
                {toggle ? <MobileNav toggle={toggle}>
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
                </MobileNav> : null}
            </SlideDown>
            <BigBlue>
                <MainNav>
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
            </BigBlue>




        </Wrapper>
    );
}