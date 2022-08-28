import axios from 'axios'

export const onEnter = axios.create({
    baseURL: '',
})
export const LocalOnEnter = axios.create({
    baseURL: 'http://portfolio-server22.nw.r.appspot.com/visitor',
})
