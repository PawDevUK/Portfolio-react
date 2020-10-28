import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const P = styled.p`
color:white;
opacity:0.7;
margin-bottom:5px;
font-size:15px;

`
const Butt = styled(Button)`
color:white !important;
border: solid 1px #fff !important;
margin:1px !important ;
&:focus {
    outline: none !important;
}
&:hover{
    opacity:0.5;
}
`

function IntroButtonGroup(props) {
    return (
        <div >
            
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined primary button group"
            >
                <P>Tell me who you are?</P>
                <Butt>Recruiter</Butt>
                <Butt>Employer</Butt>
                <Butt>Client</Butt>
                <Butt>Other</Butt>
            </ButtonGroup>
        </div>
    );
}

export default IntroButtonGroup;