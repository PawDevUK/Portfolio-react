import React from 'react';
import styled from 'styled-components';
import { StButton } from '../common/Button';
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export default function Buttons(props) {
    return (
        <Wrapper>
            <StButton variant='contained' size='medium' color='primary'>
                Play
            </StButton>
            <StButton onClick={props.handleClear} variant='contained' size='medium' color='primary'>
                Clear
            </StButton>
        </Wrapper>
    );
}
