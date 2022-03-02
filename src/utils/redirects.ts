import React from "react";
import { useNavigate } from "react-router-dom"
import Cookies from 'universal-cookie'

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

export function redirect() {
  const cookies = new Cookies()
  const termState = cookies.get('termState')
  termState ? redirectHome() : redirectAccept()
}
