import React from "react";
import { Link, useParams } from "react-router-dom"

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, Divider, Stack } from '@mui/material'

import Image from '../../../lib/Image'

export default function CardIntro(props: TypeIntro) {
  const params = useParams()
  const id = params.id

  const title = props.content.title
  const image1 = props.content.image1
  const alt1 = props.content.textImage1
  const width1 = '20%'
  const image2 = props.content.image2
  const alt2 = props.content.textImage2
  const width2 = '90%'
  const ordinal = (
      (id === '1') ? "primeira" : (
      (id === '2') ? "segunda" : (
      (id === '3') ? "terceira" : (
      (id === '4') ? "quarta" : (
      (id === '5') ? "quinta" : "mais uma")
          )
        )
      )
    )

  return (
    <>
      <Card sx={{ minWidth: 275, margin: '2em 1em' }}>

        <Stack direction='row' spacing={2} sx={{marginTop: '2em', marginLeft: '2em', marginBottom: '-2em'}}>
          <Image src={image1} alt={alt1} width={width1} />

          <Typography variant="inherit" style={{ textAlign: 'left', marginTop: '1em', marginBottom: '2em', marginLeft: '0em' }}>
            <Image src={image2} alt={alt2} width={width2} />
          </Typography>

        </Stack>


        <CardContent style={{ minHeight: '10em', backgroundColor: '#F18620' }} >

          <Typography variant="inherit" style={{ textAlign: 'left', marginTop: '2em', marginLeft: '2em' }}>
            <span style={{ fontSize: '2em', marginLeft: '0em', marginBottom: '1em', color: '#FFF' }}>
                {title} {id}
            </span>

          </Typography>

        </CardContent>

        <Typography variant="body2" style={{ textAlign: 'left', marginBottom: '3em', marginLeft: '1em', marginTop: '1em' }}>
          Esta é a {ordinal} aula sobre frações
        </Typography>

        <Divider />

        <CardActions>

          <Stack direction="row">
            <Link to={"/views/classes"} style={{textDecoration: 'none'}}>
              <Button variant="text" style={{color: '#249DD9', marginTop: '0.2em'}} fullWidth={true}>Voltar</Button>
            </Link>

            <Link to={`/views/classes/sumary/class/${id}`} style={{textDecoration: 'none'}}>
              <Button variant="text" style={{color: '#249DD9', marginTop: '0.2em'}} fullWidth={true}>Entrar</Button>
            </Link>
          </Stack>

        </CardActions>
      </Card>
    </>
  );
}
