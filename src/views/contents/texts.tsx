import React from 'react'
import styled from 'styled-components'

import Header from '../../components/nav/header/header'
import Footer from '../../components/nav/Footer/footer'
import BasicBreadcrumbs from '../../components/mui/Breadcrumbs'
import contentText from '../../data/jsons/contentText'
import CardText from '../../components/mui/Cards/CardText'

/*eslint-disable */
export default function Texts() {
  const routes = contentText.children.routes
  const content = contentText.content
  const texts = contentText.children.texts

  return (
      <>
        <Header />
        <Main>
          <BasicBreadcrumbs routes={routes} />
          <CardText texts={texts} content={content} />
        </Main>
        <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 0.5em 0.5em;
`
/*eslint-disable */
