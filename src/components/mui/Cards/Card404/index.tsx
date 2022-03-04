import React from "react";
import { Card, CardContent, Typography } from '@mui/material'
import logo from '../../../../assets/logos/logo-32x32.png'

export default function Card404() {
  return (
    <>
      <Card sx={{ minWidth: 220, margin: '1em 1em', height: '400px' }}>
        <CardContent>

              <Typography variant="h3" style={{ textAlign: 'center', fontStyle: 'italic', margin: '1em 0em', color: '#E52024' }}>
                4
                <img
                  src={logo}
                  className="App-logo"
                  alt="logo"
                  width={30}
                  height={30}
                  style={{marginLeft: '0.2em', marginRight: '0.1em'}}
                />
                4
              </Typography>

            <Typography variant="body2" style={{ textAlign: 'center', color: '#E52024'  }}>
              Erro! Página não encontrada!
            </Typography>
        </CardContent>
      </Card>
    </>
  );
}
