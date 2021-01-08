import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "react-sticky-nav";
import Particles from 'react-particles-js'
import React, { Component } from 'react';
import styled from 'styled-components';
import logo from "../../img/pavdev.png"


const height = "80px";
const logoBlue = "#1598C3"
const backgroundColor = '#35495e'

const NavigationSticky = styled(Navigation)`
z-index:100;
min-height:${height};
-webkit-box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.75);
box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.75);
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
font-size:20px
`;

const Navi = styled(Nav)`
margin-right:10vw;
`;

const Link = styled(Nav.Link)`
color:#d2d4d6 !important;
font-size:20px;
font-weight:500;
transition: all .2s ease-in-out; 
&:hover{
    color:#1598C3 !important;
    transform: scale(1.04); 
}
`;
const Brand = styled(Navbar.Brand)`
margin-left:10vw;
`
const LogoHeader = styled.img`
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
                title: "Home",
                href: "#home",
                style: "Green",
                disabled: false
            },
            {
                title: "Projects",
                href: "#projects",
                disabled: false

            },
            {
                title: "CV",
                target: "_blank",
                href: "https://gitcrackeruk.github.io/CV/",
                disabled: false
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
            <div>
                <NavigationSticky>
                    <div style={{ backgroundColor: '#35495e', minHeight: "110px !important" }}>
                        <NavbarStyled expand="lg">
                            <Brand href="#">
                            <LogoHeader  src={logo} alt="pavdev"></LogoHeader>
                            </Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"><Burger icon={faBars} /></Navbar.Toggle>
                            <Navbar.Collapse >
                                <Navi className="ml-auto">
                                    {this.state.menu.map((item, i) => {

                                        return (
                                            <Link key={i} target={this.checkForCv(item)} href={item.href}>
                                                { item.title}
                                            </Link>
                                        )
                                    })}
                                </Navi>
                            </Navbar.Collapse>
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
                    </div>
                </NavigationSticky>

            </div>

        );
    }
}


export default HeaderReactBootstrap;