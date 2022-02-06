import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logos/logo-fractus-cor.svg'
import './main.css'

export default function MainIntro() {
  return (
      <>
        <div className='container'>
          <Main className='main'>
            <p>Aprendendo Frações com Fractus!</p>
            <img src={logo} className="App-logo" alt="logo" />

            <div className='grid'>
                <div className='loader'></div>
            </div>

            <p>Carregando ...</p>
            <br />
            <br />
            <p>App Versão 2.0.0</p>
          </Main>
        </div>
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
