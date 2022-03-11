import React from 'react'
import styled from 'styled-components'

import Header from '../../components/nav/header/header'
import Footer from '../../components/nav/Footer/footer'
import BasicBreadcrumbs from '../../components/mui/Breadcrumbs'
import contentContacts from '../../data/jsons/contentContacts'
import CardContacts from '../../components/mui/Cards/CardContacts'

export default function Contact() {
  const content = contentContacts.content
  const routes = contentContacts.children.routes

  return (
      <>
        <Header />
        <BasicBreadcrumbs routes={routes} />
        <Main>
          <CardContacts content={content} />
        </Main>
        <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
