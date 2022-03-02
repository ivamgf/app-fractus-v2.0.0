import React from 'react'
import styled from 'styled-components'
import DataAccept from '../../data/jsons/dataAccept'
import Card from '../../components/mui/Cards/Card'
import ModelTrans from '../../components/mui/Models'
import HeaderInit from '../../components/nav/header/headerInit'
import Footer from '../../components/nav/footer/footer'

export default function Accept() {
  const header = DataAccept.header
  const buttons = DataAccept.children.buttons
  const checkBox = DataAccept.children.checkBox

  return (
      <>
          <Main>
            <HeaderInit />
            <Card header={header} buttons={buttons} checkBox={checkBox} />
            <ModelTrans />
          </Main>
          <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
