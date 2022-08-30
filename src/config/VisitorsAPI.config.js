import axios from 'axios'

export const onEnter = axios.create({
    baseURL: '',
})
export const LocalOnEnter = axios.create({
    baseURL: 'https://portfolio-server-pavdev.herokuapp.com/visitor',
})
