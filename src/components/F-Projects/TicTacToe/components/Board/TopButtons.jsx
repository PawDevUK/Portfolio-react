import { StButton } from '../common/Button';
import { flexCenter } from '../../styled';
import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
    ${flexCenter}
    height: 50px;
`;

export default function TopButtons(props) {
    return (
        <Wrapper>
            <StButton id='X' player={props.Player} disabled={props.Disabled} variant='contained' size='medium' color='primary' onClick={props.PlayerX} header>
                X
            </StButton>

            <StButton id='O' player={props.Player} disabled={props.Disabled} variant='contained' size='medium' color='primary' onClick={props.PlayerO} header>
                O
            </StButton>
        </Wrapper>
    );
}
