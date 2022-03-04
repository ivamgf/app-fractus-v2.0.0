import React from 'react'
import styled from 'styled-components'

import Stack from '@mui/material/Stack'
import Cookies from 'universal-cookie'

/*eslint-disable */
export default function FooterComponent() {
    const cookies = new Cookies()

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
