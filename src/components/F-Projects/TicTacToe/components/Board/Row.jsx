import { StButton } from '../common/Button';
import styled from 'styled-components';
import React from 'react';

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
                        cell='true'
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
