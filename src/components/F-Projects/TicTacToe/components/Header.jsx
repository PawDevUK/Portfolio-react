import TextField from '@material-ui/core/TextField';
import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import { Capitalize } from '../factory';
import { boxShadow3 } from '../styled';
import {StButton} from 'components/F-Projects/TicTacToe/components/common/Button';
import { AddNewUser, removeUser, clLocalStorage, updateRanking } from 'components/F-Projects/TicTacToe/factory';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 96px;
`;

const InputWrapper = styled.form`
    position: absolute;
    left: 250px;
    display: flex;
    flex-direction: row;
    z-index: 1000;
    ${(p) => {
        return p.nameSubmit
            ? css`
                  opacity: 0;
                  transition: all 0.5s ease-in;
              `
            : css``;
    }}
`;

const UsernameWrapper = styled.div`
    margin: auto;
    ${(p) => {
        return !p.nameSubmit
            ? css`
                  opacity: 0;
                  transition: all 1s ease-in;
              `
            : css`
                  opacity: 1;
                  transition: all 1s ease-in;
              `;
    }}
`;
const H1 = styled.h1`
    color: #fff;
    font-weight: bold;
    background-color: #575a5f47;
    border-radius: 5px;
    padding: 10px;
    ${boxShadow3};
`;

export default function Header(props) {
    const [nameSubmit, setSubmit] = useState(false);
    const [name, setName] = useState('');

    return (
        <Wrapper>
            <InputWrapper
                nameSubmit={nameSubmit}
                onSubmit={(e) => {
                    setSubmit(e.type ? true : false); 
                    e.preventDefault();
                }}>
                <TextField
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    id='user'
                    label='Username'
                    variant='outlined'
                />
                <StButton onClick={()=>{AddNewUser(name);updateRanking()}} variant='contained' size='small' color='primary'>Start</StButton>
                <StButton onClick={()=>removeUser(name)} variant='contained' size='small' color='primary'>Delete</StButton>
            </InputWrapper>
            <UsernameWrapper nameSubmit={nameSubmit}>
                <H1>{Capitalize(name)}</H1>
            </UsernameWrapper>
        </Wrapper>
    );
}
