import { createUsers } from 'components/F-Projects/TicTacToe/factory';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { boxShadow3 } from '../styled';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #575a5f47;
    border-radius: 10px;
    height: 600px;
    width: 800px;
    margin: 30px;
    ${boxShadow3}
`;

const columns = [
    { field: 'ranking', headerName: 'Ranking', width: 129 },
    { field: 'name', headerName: 'User', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'playingWith', headerName: 'Playing with', width: 160 },
    { field: 'playedGames', headerName: 'Played Games', width: 170 },
    { field: 'wonGames', headerName: 'Wins', width: 130 },
    { field: 'lostGames', headerName: 'Lost', width: 130 },
];

export default function PlayerList(params) {
    const [Users, setOnlineUsers] = useState([]);

    //Create check if local storage has data with users/players
    //If there is no users data in the local storage create it, add it to redux and use it to fill up DataGrid.
    //If there is data with users add it to redux and use it to fill up DataGrid.

    useEffect(() => {
        const usersData = localStorage.getItem('users');
        if (usersData && usersData !== "undefined") {
            console.log('Loaded from local storage.');
            setOnlineUsers(JSON.parse(usersData));
        } else {
            console.log('Initialized local storage.');
            const users = createUsers();
            setOnlineUsers(users);
            localStorage.setItem('users', JSON.stringify(users));
        }
    }, []);

    return (
        <Wrapper>
            <DataGrid handleJoin={params.handleJoin} rows={Users ? Users : []} columns={columns} pageSize={15} checkboxSelection />
        </Wrapper>
    );
}
