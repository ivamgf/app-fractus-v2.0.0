import React from 'react'
import styled from 'styled-components'

import Header from '../../components/nav/header/header'
import Footer from '../../components/nav/Footer/footer'
import BasicBreadcrumbs from '../../components/mui/Breadcrumbs'
import contentExercises from '../../data/jsons/contentExercises'
import CardExercises from '../../components/mui/Cards/CardExercises'

export default function Exercises() {
  const routes = contentExercises.children.routes
  const title = contentExercises.content.title
  const lists = contentExercises.children.lists

  return (
      <>
        <Header />
        <BasicBreadcrumbs routes={routes} />
        <Main>
          <CardExercises title={title} lists={lists}  />
        </Main>
        <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
