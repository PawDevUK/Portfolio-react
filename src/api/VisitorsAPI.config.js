import SERVER_URL from './index'
import axios from 'axios'

export const onEnter = axios.create({
    baseURL: '',
})
export const LocalOnEnter = axios.create({
    baseURL: SERVER_URL + '/visitor',
})
