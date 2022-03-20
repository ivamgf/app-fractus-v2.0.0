/*eslint-disable */
import React from 'react'
import { useParams } from "react-router"
import { classesService } from '../api/ClassService'

export default function classesControler() {
  const params = useParams()
  const id = params.id
  console.log(id)
  const resp = classesService('classes')
  const list = resp.classes.data

  return {
    list
  }
}
/*eslint-disable */
