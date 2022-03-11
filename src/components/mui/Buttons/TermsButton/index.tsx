import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

type TypeTermsButton = {
  value: string,
  color?: string,
  disabled?: boolean
}

export default function ButtonModel(props: TypeTermsButton) {

    const value = props.value
    const color = props.color
    const disabled = props.disabled

    return (
        <Stack style={{ marginTop: '0.5em' }}>
            <Button
                variant= "contained"
                style={{color}}
                disabled={disabled}
            >
                {value}
            </Button>
        </Stack>
    )
}
