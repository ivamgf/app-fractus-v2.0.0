import React from 'react'
import styled from 'styled-components'
import Header from '../../components/nav/header/header'
import Footer from '../../components/nav/footer/footer'

export default function Home() {
  return (
      <>
          <Main>
            <Header />
          </Main>
          <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
