import React from 'react'
import styled from 'styled-components'

export default function MainIntro() {

  return (
        <div className='container'>
          <Main className='main'>
            <p>Aprendendo Frações com Fractus!</p>
            <img
              src='../src/assets/images/logo-fractus-cor.png'
              className="App-logo"
              alt="logo"
              width={300}
              height={150}
            />

            <div className='grid'>
                <div className='loader'></div>
            </div>

            <p>Carregando ...</p>
            <br />
            <br />
            <p>App Versão 2.0.0</p>
          </Main>
        </div>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
