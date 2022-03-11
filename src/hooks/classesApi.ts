import React from 'react'
import useSWR from 'swr'
import { ApiService } from '../api/ApiService'

/*eslint-disable */
export function classesApi(endpoint: any, config?: any) {
  const { data, error } = useSWR(endpoint, async (url: any) => {
    const response = await ApiService(url, config)

    return response.data
  })

  return { data, error }
}
/*eslint-disable */
