import React from 'react'
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import logo from '../../../../assets/logos/logo-32x32.png'
import { Button, Divider } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function CardExercises(props: any) {
  const title = props.title
  const lists = props.lists

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

          <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ backgroundColor: '#249DD9', color: '#fff' }}
            >
                <Typography>{lists.list1}</Typography>
            </AccordionSummary>

            <AccordionDetails style={{backgroundColor: '#4bc4ff'}}>
              <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>
                <a href="http://app-fractus.orkneytech.com.br/exercises/exercicios-de-fracoes1.pdf" style={{textDecoration: 'none', color: '#fff'}}>Baixar a Lista 1</a>
              </Typography>
            </AccordionDetails>
          </Accordion>


        </CardContent>

        <Divider />

        <CardActions >
            <Link to="/home" style={{textDecoration: 'none', marginTop: '0.5em'}}>
              <Button variant="contained" style={{backgroundColor: '#249DD9'}}>Voltar</Button>
            </Link>
        </CardActions>
      </Card>
    </>
  )
}
