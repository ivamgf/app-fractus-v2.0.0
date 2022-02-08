import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function ButtonModel(props: any) {

    const value = props.value
    const variant = props.variant
    const color = props.color

    return (
        <Stack style={{ marginTop: '0.5em' }}>
            <Button
                value={value}
                variant={variant}
                color={color}
            >
                {}
            </Button>
        </Stack>
    )
}
