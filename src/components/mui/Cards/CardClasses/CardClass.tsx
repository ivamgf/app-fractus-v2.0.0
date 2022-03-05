import React from "react";

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, Divider, Stack } from '@mui/material'
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CardClass() {
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
            <Link to={''} style={{textDecoration: 'none', margin: '0.5em', marginBottom: '0.5em'}}>
              <Button variant="contained" style={{backgroundColor: '#249DD9'}}>
                <ArrowBackIosNewIcon sx={{color: '#FFF', marginLeft: '-0.5em'}} /> Voltar
              </Button>
            </Link>

            <Link to={''} style={
                {
                  textDecoration: 'none',
                  marginLeft: 'auto',
                  marginRight: '0.5em',
                  marginTop: '0.5em'
                }
              }>
              <Button variant="contained" style={{backgroundColor: '#249DD9'}}>
                Próxima <ArrowForwardIosIcon sx={{color: '#FFF', marginRight: '-0.5em'}} />
              </Button>
            </Link>
          </Stack>

      </Card>
    </>
  );
}
