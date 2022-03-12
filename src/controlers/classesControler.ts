import React from "react";
import { classesService } from '../../src/api/ClassService'

export default function classesControler() {
  const resp = classesService('classes')
  const list = resp.classes.data
  
  return {
    list
  }
}
