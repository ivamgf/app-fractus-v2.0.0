/*eslint-disable */
import useSWR from 'swr'
import { api } from '../api/ApiService'

const fetcher = async (endpoint: string) => {
  console.log('CHAMANDO ENDPOINT:', endpoint)
  const response = await api.get(endpoint)
  return response.data
}

export function useApi<T = any>(endpoint: string | null) {
  const { data, error } = useSWR(endpoint, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  })

  return {
    data: data as T,
    isLoading: !data && !error,
    isError: error
  }
}
/*eslint-disable */
