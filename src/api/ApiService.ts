/*eslint-disable */
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-fractus-next-v4-9ab380a16ec1.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: 15000
})

/*eslint-disable */
