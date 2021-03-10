import TextField from '@material-ui/core/TextField';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { setUserOnEntry } from '../API/routes';
import { Capitalize } from '../factory';
import { boxShadow3 } from '../styled';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 96px;
`;

const InputWrapper = styled.form`
    position: absolute;
    left: 230px;
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
    background-color: #cfc5a5;
    border-radius: 5px;
    padding: 10px;
    ${boxShadow3};
`;

export default function Header(props) {
    const [nameSubmit, setSubmit] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {}, []);

    return (
        <Wrapper>
            <InputWrapper
                nameSubmit={nameSubmit}
                onSubmit={(e) => {
                    props.Submit(e, name);
                    setUserOnEntry({
                        user: name,
                        status: 'Available',
                        playingWith: '---',
                        board: [],
                    });
                    setSubmit(e.type ? true : false);
                }}>
                <TextField
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    id='user'
                    label='Username'
                    variant='outlined'
                />
            </InputWrapper>
            <UsernameWrapper nameSubmit={nameSubmit}>
                <H1>{Capitalize(name)}</H1>
            </UsernameWrapper>
        </Wrapper>
    );
}
