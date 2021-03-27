import { Server_URL } from '../store';
import axios from 'axios';

export function getUsers() {
    const onlineUsers = axios.get(`${Server_URL}/users`).then((res) => {
        return res.data;
    });
    return onlineUsers;
}

export function setUserOnEntry(user) {
    axios
        .post(`${Server_URL}/users/addUser`, user)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}
