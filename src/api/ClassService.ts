/*eslint-disable */
import React from "react"

import { ApiService } from './ApiService'

export const TodoService = {
    list() {
        return ApiService.get(endpoint)
    },
}
function endpoint(endpoint: any) {
    throw new Error('Function not implemented.')
}
/*eslint-disable */
