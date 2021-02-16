import axios from 'axios'

export const SendFormData = axios.create({
    baseURL:'https://portfolio-backend-304908.ew.r.appspot.com/'
  })

  export const SendLocalFormData = axios.create({
    baseURL:'http://localhost:8080/'
  })