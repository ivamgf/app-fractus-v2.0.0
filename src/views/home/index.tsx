import React from 'react'
import styled from 'styled-components'

import Header from '../../components/nav/header/header'
import Footer from '../../components/nav/Footer/footer'
import Image from '../../components/lib/Image'
import ImagePizza from '../../data/jsons/imagePizza'
import logo from '../../assets/logos/logo-fractus-cor.svg'
import { Card, CardContent, Divider, Typography } from '@mui/material'
import BasicBreadcrumbs from '../../components/mui/Breadcrumbs'
import contentHome from '../../data/jsons/contentHome'

export default function Home() {

  const imageProps = ImagePizza
  const routes = contentHome.children.routes

  return (
      <>
      <Header />
          <Main>
            <BasicBreadcrumbs routes={routes} />
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

              <Image src={imageProps.path} alt={imageProps.alt} width={imageProps.width} />

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
    margin: 0.5em 0.5em;
`
