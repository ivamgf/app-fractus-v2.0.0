import React from 'react'
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import logo from '../../../../assets/logos/logo-32x32.png'
import { Button, Divider } from '@mui/material'
import AccordianText from '../../Accordians/AccordianText'

export default function CardText(props: any) {
  const title = props.content.title
  const text1 = props.texts.text1
  const text2 = props.texts.text2

  return (
    <>
      <Card sx={{ minWidth: 275, margin: '1em 1em' }}>
        <CardContent style={{ minHeight: '22em' }}>
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

          <AccordianText text1={text1} text2={text2} />

        </CardContent>

        <Divider />

        <CardActions >
            <Link to="/home" style={{textDecoration: 'none', marginTop: '0.5em'}}>
              <Button variant="contained" style={{backgroundColor: '#249DD9'}}>Voltar</Button>
            </Link>
        </CardActions>
      </Card>
    </>
  );
}

