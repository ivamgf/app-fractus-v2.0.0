import React from "react";

import { Card } from "@mui/material"
import { CardContent } from "@mui/material"
import { CardActions } from "@mui/material"
import { Typography } from "@mui/material"
import { Divider } from "@mui/material"
import { Button } from "@mui/material"
import { Link } from "react-router-dom";
import logo from '../../../../assets/logos/logo-32x32.png'

export default function CardContacts(props: TypeContacts) {
  const content = props.content
  const title = content.title

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
        </CardContent>

        <Divider />

        <CardActions>
          <Link to="/home" style={{textDecoration: 'none', marginTop: '0.5em'}}>
            <Button variant="contained" style={{backgroundColor: '#249DD9'}}>Enviar</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}
