import React from 'react'
import styled from 'styled-components'
import DataTerms from '../../data/jsons/dataTerms'
import CardAccordian from '../../components/mui/Cards/CardAccordian/'

export default function Terms() {
  const header = DataTerms.header
  const contentText = DataTerms.children.contentText
  const buttons = DataTerms.children.buttons

  return (
      <>
          <Main>
            <CardAccordian header={header} contentText={contentText} buttons={buttons}  />
          </Main>
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
