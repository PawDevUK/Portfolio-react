
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Navigation from "react-sticky-nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Particles from 'react-particles-js'
import styled from 'styled-components';
import logo from "../../img/pavdev.png"

const height = "50px";
const blue = "#1598C3"

const NavigationSticky = styled(Navigation)`
// display:flex;
z-index:100;
min-height:${height};
`;
const Cont = styled(Container)`

`;
const Parti = styled(Particles)`
position:absolute;
top:0px;
height:80px;
width:100%;
margin:auto
`;
const NavbarStyled = styled(Navbar)`
z-index:100;
min-height:${height};
`;
const Collapse = styled(Navbar.Collapse)`

`;
const Link = styled(Nav.Link)`
color:#d2d4d6 !important;
font-size:18px;
font-weight:600;
{ transition: all .2s ease-in-out; }
&:hover{
    color:#1598C3 !important;
    { transform: scale(1.04); }
}
`;
// const Toggle = styled(Navbar.Toggle)`
// color:white !important;
// `
const Logo = styled.img`
display: flex;
justify-content: center;
height:50px;
width:auto;
`;
const Burger = styled(FontAwesomeIcon)`
color:#d2d4d6;
`

class HeaderReactBootstrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [{
                title: "HOME",
                href: "#home",
                style: "Green",

            },
            {
                title: "PROJECTS",
                href: "#projects",


            },
            {
                title: "ABOUT",
                href: "#about",


            },
            {
                title: "CV",
                target: "_blank",
                href: "https://gitcrackeruk.github.io/CV/",
            }
            ]
        }
    }
    checkForCv(item) {
        if (item.title === "CV") {
            return item.target
        }
    }
    render() {
        return (
            <NavigationSticky>
                <Cont style={{
                    backgroundColor: "#35495e",
                    minHeight: "110px !important"
                }}>
                    <NavbarStyled expand="lg" >
                        <Navbar.Brand href="#">
                            <Logo src={logo} alt="pavdev"></Logo>
                        </Navbar.Brand>
                        <Navbar.Toggle variant="light" aria-controls="basic-navbar-nav"><Burger icon={faBars} /></Navbar.Toggle>
                        <Collapse >
                            <Nav className="ml-auto">
                                {this.state.menu.map((item, i) => {
                                    return (
                                        <Link key={i}
                                            target={this.checkForCv(item)} href={item.href}> {
                                                item.title}
                                        </Link>
                                    )
                                })}
                            </Nav>
                        </Collapse>
                    </NavbarStyled>
                    <Parti
                        params={{
                            particles: {
                                number: {
                                    value: 20
                                },
                                size: {
                                    value: 1
                                },
                                autoPlay: true,

                                opacity: {
                                    value: 0.3,
                                    random: true
                                },
                                links: {
                                    enable: true,
                                    opacity: 0.1
                                },

                            }

                        }} />
                </Cont>
            </NavigationSticky>
        );
    }
}


export default HeaderReactBootstrap;