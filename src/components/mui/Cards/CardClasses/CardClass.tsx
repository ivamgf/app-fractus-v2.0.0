import React, { useState } from "react";

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, Divider, Stack } from '@mui/material'
import { Link, useNavigate, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import classesControler from '../../../../controlers/classesControler'

export default function CardClass() {
  const countInit = 1
  const [ count, setCount] = useState(countInit)
  const params = useParams()
  const id = params.id
  const classList = classesControler().classList
  console.log('classList:',classList)

  const handleNext = (event: any) => {
    event.preventDefault()
    setCount(count + 1)
    console.log('count inc:',count)
  }

  const handlePrev = (event: any) => {
    event.preventDefault()
    setCount((count > 1) ? (count - 1) : count)
    console.log('count dec:', count)
  }

  const sceneList = classList?.filter((i: any) => (i.scene === count))
  console.log(sceneList)

  return (
    <>
      <Card sx={{minWidth: 275, margin: '1em 1em'}}>

        <Card>
          <CardContent style={{ minHeight: '8em' }}>
            <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>

            </Typography>
          </CardContent>
        </Card>

        <CardContent style={{ minHeight: '16em' }}>
          <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>

          </Typography>
        </CardContent>

        <Divider />

          <Stack direction='row' spacing={3}>
            {
              (count === 1 ) ?
              <Link to={`/views/classes/sumary/intro/${id}`} style={{textDecoration: 'none', margin: '0.5em', marginBottom: '0.5em'}}>
                <Button variant="contained" style={{backgroundColor: '#249DD9'}}>
                  <ArrowBackIosNewIcon sx={{color: '#FFF', marginLeft: '-0.5em'}} /> Voltar
                </Button>
              </Link> :
              <div style={{textDecoration: 'none', margin: '0.5em', marginBottom: '0.5em'}}>
                <Button variant="contained" style={{backgroundColor: '#249DD9'}} onClick={handlePrev}>
                  <ArrowBackIosNewIcon sx={{color: '#FFF', marginLeft: '-0.5em'}} /> Voltar
                </Button>
              </div>

            }


            <Link to={''} style={
                {
                  textDecoration: 'none',
                  marginLeft: 'auto',
                  marginRight: '0.5em',
                  marginTop: '0.5em'
                }
              }>
              <Button variant="contained" style={{backgroundColor: '#249DD9'}} onClick={handleNext}>
                Próxima <ArrowForwardIosIcon sx={{color: '#FFF', marginRight: '-0.5em'}} />
              </Button>
            </Link>
          </Stack>

      </Card>
    </>
  );
}
