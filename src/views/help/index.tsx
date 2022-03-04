import React from 'react'
import styled from 'styled-components'

import Header from '../../components/nav/header/header'
import Footer from '../../components/nav/Footer/footer'
import BasicBreadcrumbs from '../../components/mui/Breadcrumbs'
import contentHelp from '../../data/jsons/contentHelp'
import CardHelp from '../../components/mui/Cards/CardHelp'

export default function Help() {
  const content = contentHelp.content
  const help = contentHelp.help
  const routes = contentHelp.children.routes

  return (
      <>
        <Header />
        <Main>
        <BasicBreadcrumbs routes={routes} />
          <CardHelp content={content} help={help} />
        </Main>
        <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 0.5em 0.5em;
`
