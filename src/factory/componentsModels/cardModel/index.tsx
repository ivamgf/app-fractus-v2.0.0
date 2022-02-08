import * as React from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import ButtonModel from '../buttonModel/index'
import BreadcrumbsModel from '../BreadcrumbsModel/index'

export default function CardModel(props: TypeModelFull) {
    const title = props.header.title
    const logo = props.header.image
    const routes = props.routes
    const buttonPrev = props.buttons.buttonPrev

    return (
        <>
          <BreadcrumbsModel routes={routes} />
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
                  <ButtonModel value={buttonPrev.value} variant={buttonPrev.variant} color={buttonPrev.color} />
              </CardActions>
          </Card>
        </>
    )
}


