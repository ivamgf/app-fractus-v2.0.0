import * as React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault()
    console.info('Você clicou no Breadcrumb.')
}

export default function BreadcrumbsModel(props: TypeRoutes): JSX.Element {
    const { routes } = props

    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs
                aria-label="breadcrumb"
                style={{ marginBottom: '1em', marginTop: '-3em' }}
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
                    <Typography color="text.primary">
                        {routes.route3}
                    </Typography>
                )}
            </Breadcrumbs>
        </div>
    )
}
