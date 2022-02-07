import React from "react";
import { useNavigate } from "react-router-dom"

export const redirectHome = async () => {
  const navigate = useNavigate();
  await setTimeout(() => {
    navigate('/home')
  }, 3000)
}

export const redirectAccept = async () => {
  const navigate = useNavigate();
  await setTimeout(() => {
    navigate('/accept')
  }, 3000)
}


