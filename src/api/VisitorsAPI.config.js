import {serverURL} from './base_server_URI'
import axios from 'axios'

export const onEnter = axios.create({
    baseURL: '',
})
export const LocalOnEnter = axios.create({
    baseURL: serverURL + '/visitor',
})
