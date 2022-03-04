import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Stack from '@mui/material/Stack'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import PolicyIcon from '@mui/icons-material/Policy'
import PublicIcon from '@mui/icons-material/Public'
import ContactsIcon from '@mui/icons-material/Contacts'
import Cookies from 'universal-cookie'
import FooterDesktop from "../footerDesktop";

/*eslint-disable */
export default function FooterComponent() {
    const cookies = new Cookies()
    const termState = cookies.get('termState')
    const homeLink = '/views/home/'
    const aboutLink = '/views/about/'
    const termsLink = '/views/terms/'
    const urlLink = ''
    const contactLink = '/views/contact/'

    return (
        <>
            <Footer>
              <Stack
                  style={{ marginTop: '0.5em', marginLeft: '0.5em' }}
                  direction="row"
                  spacing={5}
              >
                
              </Stack>
            </Footer>
        </>
    )
}

const Footer = styled.div`
  display: block;
  background-color: #249dd9;
  padding: 2em;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
`
/*eslint-disable */
