import React from 'react'
import styled from 'styled-components'
import Header from '../../components/nav/header/header'
import Footer from '../../components/nav/footer/footer'
import Image from '../../components/lib/Image'
import ImagePizza from '../../data/jsons/imagePizza'

export default function Home() {
  const imageProps = ImagePizza
  console.log(imageProps)

  return (
      <>
          <Main>
            <Header />
            <Image src={imageProps.path} alt={imageProps.alt} />
          </Main>
          <Footer />
      </>
  )
}

const Main = styled.div`
    margin: 2em 1em;
`
