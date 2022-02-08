import * as React from 'react'
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import BasicButton from '../../Buttons/BasicButton'
import CheckboxLabels from '../../Checkbox/CheckboxLabels'
import logo from '../../../../assets/logos/logo-fractus-cor.svg'

export default function CardModel(props: TypeAccept): JSX.Element {
    const title = props.header.title
    const checkBox = props.checkBox
    const buttonAdvance = props.buttons.buttonAdvance
    const buttonLink = props.buttons.buttonLink

    return (
        <>
          <Card sx={{ minWidth: 275 }}>
              <CardContent style={{ minHeight: '20em' }}>
                  <img
                      src={logo}
                      alt="Logo Fractus"
                      width={300}
                      height={150}
                  />
                  <Typography
                      variant="body2"
                      style={{ textAlign: 'center', marginTop: '4em' }}
                  >
                      {title}
                  </Typography>
              </CardContent>
              <CardActions>
                  <CheckboxLabels value={checkBox.value} label={checkBox.label} checkedState={checkBox.checkedState} />
                  <Link to="/terms" style={{textDecoration: 'none'}}>
                    <BasicButton value={buttonLink.value} variant={buttonLink.variant} color={buttonLink.color} disabled={buttonLink.disabled} />
                  </Link>

              </CardActions>
          </Card>
          <Link to="/home" style={{textDecoration: 'none'}} onClick={ (event) => event.preventDefault() }>
            <BasicButton value={buttonAdvance.value} variant={buttonAdvance.variant} color={buttonAdvance.color} disabled={buttonAdvance.disabled} />
          </Link>

        </>
    )
}


