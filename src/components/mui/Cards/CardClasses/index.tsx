import React from "react";

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import logo from '../../../../assets/logos/logo-32x32.png'
import { Button, Divider } from '@mui/material'
import { Link } from "react-router-dom";

export default function CardClasses(props: TypeClasses) {
  const content = props.content
  const classes = content.classes
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

          <Link to="/views/classes/sumary/intro/4" style={{textDecoration: 'none', marginTop: '0.5em'}}>
            <Button variant="contained" style={{backgroundColor: '#249DD9', marginTop: '0.2em'}} fullWidth={true}>{classes.class4}</Button>
          </Link>

          <Link to="/views/classes/sumary/intro/1" style={{textDecoration: 'none', marginTop: '0.5em'}}>
              <Button variant="contained" style={{backgroundColor: '#249DD9', marginTop: '0.2em'}} fullWidth={true}>{classes.class1}</Button>
          </Link>

          {/*<Link to="/views/classes/sumary/intro/2" style={{textDecoration: 'none', marginTop: '0.5em'}}>
            <Button variant="contained" style={{backgroundColor: '#249DD9', marginTop: '0.2em'}} fullWidth={true}>{classes.class2}</Button>
          </Link>*/}

          {/*<Link to="/views/classes/sumary/intro/3" style={{textDecoration: 'none', marginTop: '0.5em'}}>
            <Button variant="contained" style={{backgroundColor: '#249DD9', marginTop: '0.2em'}} fullWidth={true}>{classes.class3}</Button>
          </Link>*/}

          <Link to="/views/classes/sumary/intro/5" style={{textDecoration: 'none', marginTop: '0.5em'}}>
            <Button variant="contained" style={{backgroundColor: '#249DD9', marginTop: '0.2em'}} fullWidth={true}>{classes.class5}</Button>
          </Link>

          <Link to="/views/classes/sumary/intro/6" style={{textDecoration: 'none', marginTop: '0.5em'}}>
            <Button variant="contained" style={{backgroundColor: '#249DD9', marginTop: '0.2em'}} fullWidth={true}>{classes.class6}</Button>
          </Link>
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
