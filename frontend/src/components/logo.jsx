import React from 'react';
import logo from "../img/pavdev.png"
import styled from "styled-components"


const LogoDiv = styled.img`
display: flex;
justify-content: center;
height:80px;
width:auto;
`

function Logo(props) {
    return (
            <LogoDiv src={logo} alt="pavdev"></LogoDiv>
    );
}

export default Logo;