/*eslint-disable */
import { any } from "prop-types";
import React from "react";
import { questionsService } from '../api/questionsService'

export default function classesControler() {
  const resp = questionsService('questions')
  const questionsList = resp.questions.data

  return {
    questionsList
  }
}
/*eslint-disable */
