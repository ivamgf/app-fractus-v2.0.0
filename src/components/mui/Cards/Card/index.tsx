import * as React from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import BasicButton from '../../Buttons/BasicButton'
import CheckboxLabel from '../../Checkbox/CheckboxLabels'

export default function CardModel(props: any): JSX.Element {
    const title = props.header.title
    const logo = props.header.image
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
                  
                  <BasicButton value={buttonLink.value} variant={buttonLink.variant} color={buttonLink.color} disabled={buttonLink.disabled} />
              </CardActions>
          </Card>
          <BasicButton value={buttonAdvance.value} variant={buttonAdvance.variant} color={buttonAdvance.color} disabled={buttonAdvance.disabled} />
        </>
    )
}


