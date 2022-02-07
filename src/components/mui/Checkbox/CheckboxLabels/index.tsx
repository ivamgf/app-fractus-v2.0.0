import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function CheckboxLabels(props: any) {
    const checkedState = props.checkedState
    const label = props.label
    const value = props.value
    const onClick = props.onClick

    return (
        <FormGroup>
            <FormControlLabel
                control={<Checkbox defaultChecked={checkedState} />}
                label={label}
                value={value}
                onClick={onClick}
            />
        </FormGroup>
    )
}
