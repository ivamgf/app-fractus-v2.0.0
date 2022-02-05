import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logos/logo-fractus-cor.svg'

export default function MainIntro() {
  return (
      <>
          <Main>
            <p>Aprendendo Frações com Fractus!</p>
            <img src={logo} className="App-logo" alt="logo" />

            <p>Carregando ...</p>
            <br />
            <br />
            <p>App Versão 1.0.0</p>
          </Main>
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
