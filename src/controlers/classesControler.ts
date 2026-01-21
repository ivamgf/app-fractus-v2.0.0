/*eslint-disable */
import { any } from "prop-types";
import React from "react";
import { questionsService } from '../api/questionsService'

export default function questionsController() {
  const { questions } = questionsService()

  return {
    questionsList: questions.data,
    isLoading: questions.isLoading,
    isError: questions.isError
  }
}
/*eslint-disable */
