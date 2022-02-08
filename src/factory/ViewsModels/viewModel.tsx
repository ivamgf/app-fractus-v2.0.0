import React from 'react'
import styled from 'styled-components'
import CardModel from '../componentsModels/cardModel'
import DataModels from '../jsons/dataModels'

export default function ViewModel() {
  const header = DataModels.header
  const content = DataModels.children.content
  const contentText = DataModels.children.contentText
  const routes = DataModels.children.routes
  const buttons = DataModels.children.buttons

  return (
      <>
          <Main>
            <CardModel header={header} content={content} contentText={contentText} routes={routes} buttons={buttons} />
          </Main>
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
