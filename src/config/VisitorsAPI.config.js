import axios from 'axios'

export const onEnter = axios.create({
    baseURL: '',
})
export const LocalOnEnter = axios.create({
    baseURL: 'http://localhost:8080/visitor',
})
