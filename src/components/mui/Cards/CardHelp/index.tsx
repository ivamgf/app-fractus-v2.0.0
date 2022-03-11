import React from 'react'
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import logo from '../../../../assets/logos/logo-32x32.png'
import BasicAccordian from '../../../mui/Accordians/BasicAccordian'
import { Button } from '@mui/material'

type TypeCardAccordian = {
  content: {
    title: string
  },
  help: {
    title1: string,
    text1: string,
    title2: string,
    text2: string,
    title3: string,
    text3: string,
    title4: string,
    text4: string,
    title5: string,
    text5: string,
    title6: string,
    text6: string,
    title7: string,
    text7: string,
    title8: string,
    text8: string,
    title9: string,
    text9: string
  }
}

export default function CardAccordian(props: TypeCardAccordian) {
  const title = props.content.title
  const contentText = props.help

  return (
      <>
        <Card sx={{ minWidth: 275, margin: '1em 1em' }}>
            <CardContent style={{ minHeight: '20em' }}>
              <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>
                <img
                    src={logo}
                    alt="Logo Fractus"
                    width={25}
                    height={25}
                />
                <span style={{ fontSize: '2em', marginLeft: '0.3em', marginBottom: '4em' }}>
                    {title}
                </span>
              </Typography>

              <BasicAccordian contentText={contentText}/>

            </CardContent>
            <hr style={{marginBottom: '-0.5em'}} />
            <CardActions >
                <Link to="/home" style={{textDecoration: 'none', marginTop: '0.5em'}}>
                  <Button variant="contained" style={{backgroundColor: '#249DD9'}}>Voltar</Button>
                </Link>
            </CardActions>
        </Card>
      </>
  )
}
