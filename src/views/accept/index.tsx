import React from 'react'
import styled from 'styled-components'
import DataAccept from '../../data/jsons/dataAccept'
import Card from '../../components/mui/Cards/Card'

export default function Accept() {
  const header = DataAccept.header
  const buttons = DataAccept.children.buttons
  const checkBox = DataAccept.children.checkBox

  return (
      <>
          <Main>
            <Card header={header} buttons={buttons} checkBox={checkBox} />
          </Main>
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
