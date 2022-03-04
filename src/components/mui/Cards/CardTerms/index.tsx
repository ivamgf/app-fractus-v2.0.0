import * as React from 'react'
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import logo from '../../../../assets/logos/logo-32x32.png'
import BasicAccordian from '../../../mui/Accordians/BasicAccordian'
import { Button } from '@mui/material'

export default function CardTerms(props: TypeCardTerms) {
    const title = props.header.title
    const contentText = props.contentText
    const buttonPrev = props.buttons.buttonPrev

    return (
        <>
          <Card sx={{ minWidth: 275 }}>
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
                  <Link to="/home" style={{textDecoration: 'none'}}>
                    <Button value={buttonPrev.value} variant="contained" style={{backgroundColor: '#249DD9'}}>Voltar</Button>
                  </Link>
              </CardActions>
          </Card>
        </>
    )
}


