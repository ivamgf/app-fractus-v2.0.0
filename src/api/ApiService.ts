/*eslint-disable */
import React from 'react'
import axios from 'axios'

const url = 'https://api-fractus.herokuapp.com/api/'

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

/*eslint-disable */
