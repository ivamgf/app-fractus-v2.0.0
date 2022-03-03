import React from 'react'
import styled from 'styled-components'

import CardAbout from '../../components/mui/Cards/CardAbout'
import Header from '../../components/nav/header/header'
import Footer from '../../components/nav/Footer/footer'
import contentAbout from '../../data/jsons/contentAbout'
import BasicBreadcrumbs from '../../components/mui/Breadcrumbs'

export default function About() {
  const content = contentAbout.header
  const routes = contentAbout.children.routes

  return (
      <>
          <Header />
          <Main>

            <BasicBreadcrumbs routes={routes} />
            <CardAbout content={content} />
          </Main>
          <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 0.5em 0.5em;
`
