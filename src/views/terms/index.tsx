import React from 'react'
import styled from 'styled-components'
import DataTerms from '../../data/jsons/dataTerms'
import CardAccordian from '../../components/mui/Cards/CardAccordian/'
import HeaderInit from '../../components/nav/header/headerInit'
import Footer from '../../components/nav/footer/footer'

export default function Terms() {
  const header = DataTerms.header
  const contentText = DataTerms.children.contentText
  const buttons = DataTerms.children.buttons

  return (
      <>
          <HeaderInit />
          <Main>
            <CardAccordian header={header} contentText={contentText} buttons={buttons}  />
          </Main>
          <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
