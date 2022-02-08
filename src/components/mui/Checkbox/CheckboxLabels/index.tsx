import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Stack } from '@mui/material'

export default function CheckboxLabels(props: any) {
    const checkedState = props.checkedState
    const label = props.label
    const value = props.value
    const onClick = props.onClick

    return (
      <Stack style={{ marginTop: '0.5em' }}>
        <FormGroup>
            <FormControlLabel
                control={<Checkbox defaultChecked={checkedState} />}
                label={label}
                value={value}
                onClick={onClick}
            />
        </FormGroup>
      </Stack>
    )
}
