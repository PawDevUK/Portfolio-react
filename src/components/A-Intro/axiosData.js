import axios from 'axios'

export const onEnter = axios.create({
    baseURL:'https://portfolio-backend-304908.ew.r.appspot.com/VisitorsCounter'
})
export const LocalOnEnter = axios.create({
    baseURL:'http://localhost:8080',
    method: 'post',
})