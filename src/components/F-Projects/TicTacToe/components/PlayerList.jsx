import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import { getUsers } from '../API/routes';
import { boxShadow3 } from '../styled';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #cfc5a5;
    border-radius: 10px;
    height: 300px;
    width: 650px;
    margin: 30px;
    ${boxShadow3}
`;

function handleJoin(e, params) {
    console.log(e, params);
}
const columns = [
    { field: 'user', headerName: 'User', width: 100 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'playingWith', headerName: 'Playing with', width: 130 },
    {
        field: 'action',
        headerName: 'Action',
        width: 130,
        renderCell: (params) => (
            <strong>
                <Button onClick={(e) => handleJoin(e, params)} variant='contained' color='primary' size='small' style={{ marginLeft: 16 }}>
                    {params.row.status === 'Available' ? 'Join' : 'Watch'}
                </Button>
            </strong>
        ),
    },
];

export default function PlayerList(params) {
    const [onlineUsers, setOnlineUsers] = useState([]);

    async function getUsersFromDB() {
        const onlineUsers = await getUsers();
        setOnlineUsers(onlineUsers);
    }

    useEffect(() => {
        getUsersFromDB();
        const interval = setInterval(() => {
            getUsersFromDB();
        }, 5000);
        return () => {
            console.log('Dismount');
            clearInterval(interval);
        };
    }, []);

    return (
        <Wrapper>
            <DataGrid handleJoin={params.handleJoin} rows={onlineUsers ? onlineUsers : []} columns={columns} pageSize={5} checkboxSelection />
        </Wrapper>
    );
}
