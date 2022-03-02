import React from 'react'
import styled from 'styled-components'
import Drawer from '../../mui/Drawer'

export default function Header() {
    return (
        <>
            <Drawer />
        </>
    )
}

const Head = styled.div`
    background-color: #249dd9;
    max-width: 100%;
    padding: 2em;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
`
