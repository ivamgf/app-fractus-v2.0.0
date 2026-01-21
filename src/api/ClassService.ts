/*eslint-disable */
import React, { useState } from "react"

import { useApi } from '../hooks/useApi'

export function classesService(endpoint: any) {

  const classes = useApi(endpoint)

  return {
    classes
  }
}
/*eslint-disable */
