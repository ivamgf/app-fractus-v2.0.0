import React from 'react'
import styled from 'styled-components'
import Header from '../../components/nav/header/header'
import Footer from '../../components/nav/footer/footer'
import Image from '../../components/lib/Image'
import ImagePizza from '../../data/jsons/imagePizza'
import logo from '../../assets/logos/logo-fractus-cor.svg'
import { Card, CardContent, Divider, Typography } from '@mui/material'

export default function Home() {
  const imageProps = ImagePizza

  return (
      <>
      <Header />
          <Main>
            <Card sx={{ minWidth: 220, margin: '1em 1em' }}>
              <CardContent>
                <Typography variant="body2" style={{ textAlign: 'center' }}>
                  <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                    width={300}
                    height={150}
                  />
                </Typography>



              </CardContent>

              <Image src={imageProps.path} alt={imageProps.alt} />

              <CardContent>
                <Typography variant="body2" style={{ textAlign: 'center', marginTop: '1em' }}>
                  Objeto de Aprendizagem para Ensino de Frações.
                </Typography>
              </CardContent>
              <Divider />
              <CardContent></CardContent>
            </Card>
          </Main>
          <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 0em 0em;
`
