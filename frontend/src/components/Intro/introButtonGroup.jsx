import React from 'react';
import styled from 'styled-components'
import SButton from '../common/button'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const P = styled.p`
color:white;
opacity:0.7;
margin-bottom:5px;
font-size:15px;
`

function IntroButtonGroup(props) {
    return (
        <div >
            <P>Choose one option from below and tell me who you are?</P>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined primary button group"
            >
                <SButton>Recruiter</SButton>
                <SButton>Employer</SButton>
                <SButton>Client</SButton>
                <SButton>Other</SButton>
            </ButtonGroup>
        </div>
    );
}

export default IntroButtonGroup;