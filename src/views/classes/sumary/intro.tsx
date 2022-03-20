import React from 'react'
import styled from 'styled-components'

import Header from '../../../components/nav/header/header'
import Footer from '../../../components/nav/Footer/footer'
import BasicBreadcrumbs from '../../../components/mui/Breadcrumbs'
import dataIntro from '../../../data/jsons/dataIntro'
import CardIntro from '../../../components/mui/Cards/CardIntro'

export default function Intro() {
  const routes = dataIntro.children.routes
  const content = dataIntro.content

  return (
      <>
      <Header />
      <BasicBreadcrumbs routes={routes} />

      <Main>
        <CardIntro content={content} />
      </Main>
      <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
