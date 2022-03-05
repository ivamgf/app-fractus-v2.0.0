import React from 'react'
import styled from 'styled-components'

import Header from '../../components/nav/header/header'
import Footer from '../../components/nav/Footer/footer'
import BasicBreadcrumbs from '../../components/mui/Breadcrumbs'
import contentClasses from '../../data/jsons/contentClasses'
import CardClasses from '../../components/mui/Cards/CardClasses'

export default function Classes() {
  const routes = contentClasses.children.routes
  const content = contentClasses.content

  return (
      <>
        <Header />
        <BasicBreadcrumbs routes={routes} />
        <Main>
          <CardClasses content={content}  />
        </Main>
        <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
