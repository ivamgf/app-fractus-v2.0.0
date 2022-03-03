import React from 'react'
import styled from 'styled-components'
import DataTerms from '../../data/jsons/dataTerms'
import CardTerms from '../../components/mui/Cards/CardTerms/'
import Footer from '../../components/nav/footer/footer'
import Header from '../../components/nav/header/header'
import BasicBreadcrumbs from '../../components/mui/Breadcrumbs'

export default function Terms() {
  const header = DataTerms.header
  const contentText = DataTerms.children.contentText
  const buttons = DataTerms.children.buttons
  const routes = DataTerms.children.routes

  return (
      <>
          <Header />
          <BasicBreadcrumbs routes={routes} />
          <Main>
            <CardTerms header={header} contentText={contentText} buttons={buttons}  />
          </Main>
          <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
