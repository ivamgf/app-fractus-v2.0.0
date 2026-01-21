/*eslint-disable */
import React from 'react'
import axios from 'axios'

const url = 'https://api-fractus-next-v4-9ab380a16ec1.herokuapp.com/api'

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json'
  }
})

/*eslint-disable */
