/*eslint-disable */
import React from "react"

const url = ''

export const ApiService = {
    async get(endpoint: any) {
        const response = await fetch(`${url}${endpoint}`)
        return await response.json()
    },
}
/*eslint-disable */
