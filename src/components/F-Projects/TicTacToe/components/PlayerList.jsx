import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import { getUsers } from '../API/routes';
import { boxShadow3 } from '../styled';
import styled from 'styled-components';
import {users} from 'config/TicTacToe.config'

const Wrapper = styled.div`
    background-color: #575a5f47;
    border-radius: 10px;
    height: 300px;
    width: 650px;
    margin: 30px;
    ${boxShadow3}
`;

const columns = [
    { field: 'ranking', headerName: 'Ranking', width: 120 },
    { field: 'name', headerName: 'User', width: 120 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'playingWith', headerName: 'Playing with', width: 150 },
    { field: 'playedGames', headerName: 'Played Games', width: 120 },
];

export default function PlayerList(params) {
    const [onlineUsers, setOnlineUsers] = useState([]);

    async function getUsersFromDB() {
        // const onlineUsers = await getUsers();
        setOnlineUsers(onlineUsers);
    }

    // useEffect(() => {
    //     getUsersFromDB();
    //     const interval = setInterval(() => {
    //         getUsersFromDB();
    //     }, 5000);
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    useEffect(()=>{
        setOnlineUsers(users);
    },[])

    return (
        <Wrapper>
            <DataGrid handleJoin={params.handleJoin} rows={onlineUsers ? onlineUsers : []} columns={columns} pageSize={5} checkboxSelection />
        </Wrapper>
    );
}
