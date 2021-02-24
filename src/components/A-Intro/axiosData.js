import axios from 'axios'

export const onEnter = axios.create({
    baseURL: 'https://strong-charge-305714.ew.r.appspot.com/visitor',
})
export const LocalOnEnter = axios.create({
    baseURL: 'http://localhost:8080/visitor',
})
