import * as React from 'react'
import Button from '@mui/material/Button'
import ClearIcon from '@mui/icons-material/Clear'
import Stack from '@mui/material/Stack'

export default function IconLabelButtons(props: any): JSX.Element {
    return (
        <Stack direction="row" spacing={2}>
            <Button
                variant="outlined"
                startIcon={<ClearIcon />}
                onClick={props.onClick}
            >
                Rejeitar
            </Button>
        </Stack>
    )
}
