import React from "react";

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import logo from '../../../../assets/logos/logo-32x32.png'
import { Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function About(props: TypeCardAbout) {
  const title = props.content.title
  const text = props.content.text
  const credits = props.content.credits

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
          <br />
          <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>
              {text}
          </Typography>
          <br />
          <Typography variant="body2" style={{ textAlign: 'right', marginBottom: '1em' }}>
              {credits}
          </Typography>

        </CardContent>

        <Divider />

        <CardActions >
            <Link to="/home" style={{textDecoration: 'none'}}>
              <Button variant="contained" style={{backgroundColor: '#249DD9'}}>Voltar</Button>
            </Link>
        </CardActions>
    </Card>

    </>
  );
}
