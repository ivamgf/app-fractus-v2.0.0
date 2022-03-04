import React from 'react'
import styled from 'styled-components'

import Header from '../components/nav/header/header'
import Footer from '../components/nav/Footer/footer'
import Card404 from '../components/mui/Cards/Card404'

export default function Page404() {
  return (
      <>
        <Header />
        <Main>
          <Card404 />
        </Main>
        <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
