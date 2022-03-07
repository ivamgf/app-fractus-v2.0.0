import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'

import { Box, Card, Stack, TextField } from "@mui/material"
import { CardContent } from "@mui/material"
import { Typography } from "@mui/material"
import { Divider } from "@mui/material"
import { Button } from "@mui/material"
import logo from '../../../../assets/logos/logo-32x32.png'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

function initialState() {
  return {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}

export default function CardContacts(props: TypeContacts) {
  const [values, setValues] = useState(initialState)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  const content = props.content
  const title = content.title

  const redirectHome = async () => {
    await setTimeout(() => {
      navigate('/home')
    }, 3000)
  }

  function handleChange(event: any) {
    const { value, name } = event.target
    setValues({
        ...values,
        [name]: value,
    })
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    console.log(values)
    setOpen(true)
    redirectHome()
  }

  return (
    <>
      <Card sx={{ minWidth: 275, margin: '1em 1em' }}>
        <CardContent style={{ minHeight: '22em' }}>

          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Mensagem Enviada com Sucesso!
            </Alert>
          </Collapse>

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

          <Form>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {
                        m: 1,
                        marginLeft: 'auto',
                        marginRight: 'auto'
                      },
                }}
                noValidate
                autoComplete="off"
            >
            <TextField
                id="frmName"
                type="text"
                name="name"
                label="Nome"
                color="primary"
                value={values.name}
                variant="standard"
                fullWidth={true}
                onChange={handleChange}
              />
              <br />
              <TextField
                  id="frmEmail"
                  type="email"
                  name="email"
                  label="E-mail"
                  color="primary"
                  value={values.email}
                  variant="standard"
                  fullWidth={true}
                  onChange={handleChange}
              />
              <br />
              <TextField
                  id="frmSubject"
                  type="text"
                  name="subject"
                  label="Assunto"
                  color="primary"
                  value={values.subject}
                  variant="standard"
                  fullWidth={true}
                  onChange={handleChange}
              />
              <br />
              <TextField
                  id="frmMessage"
                  type="textArea"
                  name="message"
                  label="Mensagem"
                  color="primary"
                  value={values.message}
                  variant="standard"
                  fullWidth={true}
                  onChange={handleChange}
              />

            <Divider style={{marginTop: '2em'}} />

            <Stack direction='row' spacing={2}>
              <Link to={'/home'} style={{textDecoration: 'none'}}>
                <Button variant="contained" style={{backgroundColor: '#249DD9', marginBottom: '-1em'}}>
                  <ArrowBackIosNewIcon sx={{color: '#FFF', marginLeft: '-0.5em'}} /> Voltar
                </Button>
              </Link>

              <Button
                type="submit"
                variant="contained"
                style={{backgroundColor: '#249DD9', marginLeft: 'auto', marginBottom: '-1em'}}
                onClick={handleSubmit}
              >
                Enviar
                <ArrowForwardIosIcon sx={{color: '#FFF', marginRight: '-0.5em'}} />
              </Button>
            </Stack>

            </Box>
          </Form>
        </CardContent>

      </Card>
    </>
  );
}

const Form = styled.div`
    margin: auto;
`
