import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function ButtonModel(props: TypeButton) {

    const value = props.value

    return (
        <Stack style={{ marginTop: '0.5em' }}>
            <Button
                value={value}
                variant="contained"
            >
                {}
            </Button>
        </Stack>
    )
}
