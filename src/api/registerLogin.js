import axios from 'axios'
import SERVER_URL from './index'

export const registerLogin_API = axios.create({
    baseURL: SERVER_URL + '/register',
})