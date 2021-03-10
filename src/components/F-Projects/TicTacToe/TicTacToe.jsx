import PlayerList from './components/PlayerList';
import Board from './components/Board/Board';
import React, { useEffect } from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import { flexCenter } from './styled';

const Body = styled.div`
    padding: 100px;
    font: 62.5%/1.4 Arial, Tahoma, Geneva, Helvetica, sans-serif;
    background: #eae3c8;
    color: #333;
    ${flexCenter}
`;
const BoardAndDataTableWrapper = styled.div``;

export default function TicTacToe() {
    useEffect(() => {});

    function HeaderSubmit(event, name) {
        event.preventDefault();
    }
    return (
        <Body>
            <BoardAndDataTableWrapper>
                <Header Submit={HeaderSubmit}></Header>
                <Board></Board>
                <PlayerList></PlayerList>
            </BoardAndDataTableWrapper>
        </Body>
    );
}
