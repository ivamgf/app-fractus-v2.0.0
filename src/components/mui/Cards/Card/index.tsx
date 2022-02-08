import * as React from 'react'
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TermsButton from '../../Buttons/TermsButton'
import BasicButton from '../../Buttons/BasicButton'
import CheckboxLabels from '../../Checkbox/CheckboxLabels'
import logo from '../../../../assets/logos/logo-fractus-cor.svg'

import Cookies from 'universal-cookie'
import { useState } from 'react'

export default function CardModel(props: TypeAccept): JSX.Element {
    const title = props.header.title
    const checkBox = props.checkBox
    const buttonAdvance = props.buttons.buttonAdvance
    const buttonLink = props.buttons.buttonLink

    const cookies = new Cookies()
    const cookieState = cookies.get('cookieState')
    const [checkedState, setChecked] = useState(checkBox.checkedState)
    const [checkedValue, setValue] = useState(checkBox.value)
    const [buttonState, setActive] = useState(buttonAdvance.disabled)
    const [buttonColor, setColor] = useState(buttonAdvance.color)

    function handleClick() {
        checkedState ? setChecked(true) : setChecked(false)
        buttonState ? setActive(false) : setActive(true)
        checkedState ? setValue('yes') : setValue('no')
        buttonState
            ? setColor('background: rgba(0, 0, 0, 0.12)')
            : setColor('backgroundColor: "#249DD9"')
        cookieState
            ? cookies.set('termState', true, { path: '/' })
            : cookies.set('termState', false, { path: '/' })
    }

    React.useEffect(() => {
      cookieState ? cookies.set('termState', true, { path: '/' }) : cookies.set('termState', false, { path: '/' })
    }, [cookieState])
    console.log('state:', buttonState)

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
                  <CheckboxLabels value={checkedValue} label={checkBox.label} checkedState={checkedState} onClick={handleClick} />
                  <Link to="/terms" style={{textDecoration: 'none'}}>
                    <TermsButton value={buttonLink.value} variant={buttonLink.variant} color={buttonLink.color} disabled={buttonLink.disabled} />
                  </Link>

              </CardActions>
          </Card>
          <Link to="/home" style={{textDecoration: 'none'}} onClick={ buttonState ? (event) => event.preventDefault() : undefined }>
            <BasicButton value={buttonAdvance.value} variant={buttonAdvance.variant} color={buttonColor} disabled={buttonState} />
          </Link>

        </>
    )
}


