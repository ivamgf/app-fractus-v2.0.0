import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logos/logo-fractus-cor.svg'
import './main.css'
import { redirect } from '../../utils/redirects'
import HeaderInit from '../../components/nav/header/headerInit'
import Footer from '../../components/nav/footer/footer'

export default function MainIntro() {

  redirect();

  return (
      <>
        <HeaderInit />
        <div className='container'>
          <Main className='main'>
            <p>Aprendendo Frações com Fractus!</p>
            <img
              src={logo}
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
        <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
