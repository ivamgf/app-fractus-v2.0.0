import * as React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault()
}

export default function BasicBreadcrumbs(props: TypeRoutes): JSX.Element {
    const { routes } = props

    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs
                aria-label="breadcrumb"
                style={{ marginBottom: '1em', marginTop: '-2em', marginLeft: '1em' }}
            >
                {routes.route1 && (
                    <Link underline="hover" color="inherit" href="/">
                        {routes.route1}
                    </Link>
                )}

                {routes.route2 && (
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/getting-started/installation/"
                    >
                        {routes.route2}
                    </Link>
                )}
                {routes.route3 && (
                    <Typography color="inherit">
                        {routes.route3}
                    </Typography>
                )}
            </Breadcrumbs>
        </div>
    )
}
