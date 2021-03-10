import React from 'react';
import { StButton } from '../common/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
`;

export default function Row(props) {
    return (
        <Wrapper>
            {props.row[props.index].map((item, i) => {
                return (
                    <StButton
                        disabled={!props.Disabled}
                        cell
                        onClick={(index) => {
                            props.CellClick(index);
                        }}
                        key={i}
                        id={i}
                        variant='contained'
                        size='medium'>
                        {item}
                    </StButton>
                );
            })}
        </Wrapper>
    );
}
