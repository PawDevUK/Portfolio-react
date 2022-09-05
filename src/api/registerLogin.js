import {serverURL} from './base_server_URI'
import axios from 'axios'

export const registerLogin_API = axios.create({
    baseURL: serverURL + '/register',
})