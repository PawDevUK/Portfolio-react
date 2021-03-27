import axios from 'axios'

export const SendFormData = axios.create({
  baseURL: 'https://strong-charge-305714.ew.r.appspot.com/contactForm'
})

export const SendLocalFormData = axios.create({
  baseURL: 'http://localhost:8080/'
})