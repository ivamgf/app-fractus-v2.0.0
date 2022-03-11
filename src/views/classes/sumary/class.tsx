import React from 'react'
import styled from 'styled-components'

import Header from '../../../components/nav/header/header'
import Footer from '../../../components/nav/Footer/footer'
import BasicBreadcrumbs from '../../../components/mui/Breadcrumbs'
import dataRoute from '../../../data/jsons/dataRoute'
import CardClass from '../../../components/mui/Cards/CardClasses/CardClass'

export default function Class() {
  const routes = dataRoute.routes
  return (
      <>
        <Header />
        <BasicBreadcrumbs routes={routes} />
        <Main>
          <CardClass />
        </Main>
        <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
