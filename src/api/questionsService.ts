/*eslint-disable */
import React, { useState } from "react"

import { useApi } from '../hooks/useApi'

export function questionsService() {
  const questions = useApi('/questions')

  return {
    questions
  }
}
/*eslint-disable */
