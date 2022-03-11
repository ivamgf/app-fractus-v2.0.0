import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function ButtonModel(props: TypeBasicButton) {

    const value = props.value
    const disabled = props.disabled

    return (
        <Stack style={{ marginTop: '0.5em' }}>
            <Button
                variant="contained"
                style={{backgroundColor: '#249DD9'}}
                disabled={disabled}
            >
                {value}
            </Button>
        </Stack>
    )
}
