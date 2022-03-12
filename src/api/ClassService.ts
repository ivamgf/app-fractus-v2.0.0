/*eslint-disable */
import React, { useState } from "react"

import { classesApi } from '../hooks/classesApi'

export function classesService(endpoint: any) {

  const classes = classesApi(endpoint)

  return {
    classes
  }
}
/*eslint-disable */
