import PlayerList from './components/PlayerList';
import Board from './components/Board/Board';
import Header from './components/Header';
import styled from 'styled-components';
import { flexCenter } from './styled';
import React from 'react';

const Body = styled.div`
    background: #e2e9e9;
    padding: 100px;
    color: #333;
    ${flexCenter}
`;

export default function TicTacToe() {
    return (
        <Body>
            <div>
                <Header></Header>
                <Board></Board>
                <PlayerList></PlayerList>
            </div>
        </Body>
    );
}
