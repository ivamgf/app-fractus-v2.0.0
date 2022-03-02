import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
        <>
            <Head>Fractus</Head>
        </>
    )
}

const Head = styled.div`
    background-color: #249dd9;
    width: 100%;
    padding: 2em 0em;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
`
