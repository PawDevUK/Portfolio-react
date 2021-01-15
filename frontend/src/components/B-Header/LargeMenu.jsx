import 'react-slidedown/lib/slidedown.css';
import styled from 'styled-components';
import { SvgLoader } from 'react-svgmt';
import React,{useEffect}from 'react';
import logo from "img/pavdev.svg";
import { Menu } from 'store'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Wrapper = styled.div`
    display:flex;
    height:110px;
    width:100%;
`
const InnerMainNav = styled.div`
display:flex;
margin:43px 0px 0px auto; 
width:600px;
`
const MainLogo = styled(SvgLoader)`
    display:inline-block;
    margin:30px auto auto 30px;
    width:auto;
    height:50px;
>path{
    fill:#fff;
}
`;

const Link = styled.a`
    font-size:18px;
    color:#CDCDCD;
    text-transform:capitalize;
    margin-right:32px;
    font-weight:700;
    &:hover{
        text-decoration:none;
        color:#fff;
    }
`

export default function MainLarge({ ...props }) {
    useEffect(()=>{
        AOS.init({ duration: 1000 });
    })
    return (
        <Wrapper data-aos="fade-in">
            <MainLogo path={logo} ></MainLogo>
            <InnerMainNav>
                {Menu.map((item, i) => {
                    return (
                        <Link key={i} href={item.href}>
                            {item.title}
                        </Link>
                    )
                })}
            </InnerMainNav>
        </Wrapper>
    )
}