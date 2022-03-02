import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function ButtonModel(props: any): JSX.Element {

    const value = props.value
    const variant = props.variant
    const color = props.color
    const disabled = props.disabled

    return (
        <Stack style={{ marginTop: '0.5em' }}>
            <Button
                variant={variant}
                style={{color}}
                disabled={disabled}
            >
                {value}
            </Button>
        </Stack>
    )
}
