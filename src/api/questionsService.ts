/*eslint-disable */
import React, { useState } from "react"

import { useApi } from '../hooks/useApi'

export function questionsService(endpoint: any) {

  const questions = useApi(endpoint)

  return {
    questions
  }
}
/*eslint-disable */
