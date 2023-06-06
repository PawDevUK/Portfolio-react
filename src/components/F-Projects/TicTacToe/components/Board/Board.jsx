import { InitialBoard, Scenario } from '../../store';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { boxShadow6 } from '../../styled';
import BottomButtons from './BottomButtons';
import TopButtons from './TopButtons';
import Row from './Row';

const BoardWrapper = styled.div`
    margin: auto;
    width: 520px;
    position: relative;
    padding: 20px;
    background: #575a5f47;
    border: 2px solid #00000052;
    border-radius: 5px;
    ${boxShadow6};
`;

const RowClickDiv = styled.div``;
const Cross = styled.div`
    ${(p) => {
        return p.img
            ? css`
                  display: block;
              `
            : css`
                  display: none;
              `;
    }}
    background-image: url(${(p) => p.img});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    height: 480px;
    width: 480px;
    z-index: 100;
`;

export default function Board() {
    const [TopButtonsDisabled, setButtonsDisable] = useState(false);
    const [WinnerCrossLine, setWinnerCrossLine] = useState(null);
    const [Board, setBoard] = useState(InitialBoard());
    const [moveCounter, setMoveCounter] = useState(0);
    const [player, setPlayer] = useState(null);
    const [cell, setCell] = useState(null);
    const [row, setRow] = useState(null);

    useEffect(() => {
        setValueToBoard(row, cell);
        checkIfWin();
    }, [cell, row, WinnerCrossLine]);

    function RowClick(RowIndex) {
        setRow(parseInt(RowIndex));
    }
    function CellClick(index) {
        setButtonsDisable(true); // disables top buttons on first click
        DisableTopButtons(); // keeps top buttons disabled during a game
        setMoveCounter((prev) => prev + 1);
        setCell(parseInt(index.target.id));
        if (moveCounter > 0) {
            if (player === 'X') {
                HandlePlayerO();
            }
            if (player === 'O') {
                HandlePlayerX();
            }
        }
    }

    function setValueToBoard(row, cell) {
        if ((row && cell) || (row && cell) === 0) {
            setBoard((prev) => [...prev], (Board[row][cell] = [player]));
        }
        return;
    }

    function handleClear() {
        setBoard(InitialBoard());
        setMoveCounter(0);
        setButtonsDisable(false);
        setPlayer(null);
        setWinnerCrossLine(null);
    }

    function HandlePlayerX() {
        setPlayer('X');
    }
    function HandlePlayerO() {
        setPlayer('O');
    }
    function DisableTopButtons() {
        if (moveCounter !== 0) {
            setButtonsDisable(true);
        }
    }

    function checkIfWin() {
        const topLbottR = [Board[0][0], Board[1][1], Board[2][2]];
        const topRbottL = [Board[0][2], Board[1][1], Board[2][0]];
        const topLR = [Board[0][0], Board[0][1], Board[0][2]];
        const midLR = [Board[1][0], Board[1][1], Board[1][2]];
        const bottomLR = [Board[2][0], Board[2][1], Board[2][2]];
        const leftTopBottom = [Board[0][0], Board[1][0], Board[2][0]];
        const midTopBottom = [Board[0][1], Board[1][1], Board[2][1]];
        const rightTopBottom = [Board[0][2], Board[1][2], Board[2][2]];
        const Scenario = [topRbottL, topLbottR, topLR, midLR, bottomLR, leftTopBottom, midTopBottom, rightTopBottom];

        function CheckIfRowXorO(scenario) {
            for (let i = 0; i < scenario.length; i++) {
                if (scenario[i][0][0] === 'X' && scenario[i][1][0] === 'X' && scenario[i][2][0] === 'X') {
                    setWinnerCrossLine(i);
                }
                if (scenario[i][0][0] === 'O' && scenario[i][1][0] === 'O' && scenario[i][2][0] === 'O') {
                    setWinnerCrossLine(i);
                }
            }
        }
        CheckIfRowXorO(Scenario);
    }

    return (
        <BoardWrapper>
            <TopButtons Player={player === 'X' ? 'O' : 'X'} Disabled={TopButtonsDisabled} PlayerX={HandlePlayerX} PlayerO={HandlePlayerO}></TopButtons>
            <Cross img={Scenario[WinnerCrossLine]}></Cross>
            {Board.map((row, index) => {
                return (
                    <RowClickDiv
                        key={index}
                        onClick={() => {
                            RowClick(index);
                        }}>
                        <Row Disabled={player} CellClick={CellClick} row={Board} key={index} index={index} id={index}></Row>
                    </RowClickDiv>
                );
            })}
            <BottomButtons handleClear={handleClear}></BottomButtons>
        </BoardWrapper>
    );
}
