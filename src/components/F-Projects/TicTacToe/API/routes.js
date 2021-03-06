import { Server_URL } from '../store'
import axios from 'axios'


export const getUsers = axios.get(`${Server_URL}/users`).then((res) => {
    return res.data
})
