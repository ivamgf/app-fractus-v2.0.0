import * as React from 'react'
import { Link } from 'react-router-dom'

import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import PolicyIcon from '@mui/icons-material/Policy'
import ContactsIcon from '@mui/icons-material/Contacts'
import ClassIcon from '@mui/icons-material/Class'
import QuizIcon from '@mui/icons-material/Quiz'

/*eslint-disable */
const drawerWidth = 240

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}))

interface AppBarProps extends MuiAppBarProps {
    open?: boolean
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}))

export default function PersistentDrawerLeft() {
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar style={{ backgroundColor: '#249DD9' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Fractus
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader style={{ backgroundColor: '#249DD9' }}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? (
                            <ChevronLeftIcon sx={{ color: '#fff' }} />
                        ) : (
                            <ChevronRightIcon sx={{ color: '#fff' }} />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />

                <List>
                    <Link to="/views/home/" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemIcon>
                                <HomeIcon style={{ color: '#249DD9' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <span style={{ color: '#249DD9' }}>Início</span>
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>

                <List>
                    <Link to="/views/about/" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemIcon>
                                <InfoIcon style={{ color: '#249DD9' }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#249DD9' }}>
                                Sobre
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>

                <List>
                    <Link to="/views/terms/" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemIcon>
                                <PolicyIcon style={{ color: '#249DD9' }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#249DD9' }}>
                                Termos
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>

                <Divider />

                <List>
                    <Link to="/classes/class/" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemIcon>
                                <ClassIcon style={{ color: '#249DD9' }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#249DD9' }}>
                                Aulas
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>

                <List>
                    <Link to="/contents/texts" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemIcon>
                                <InboxIcon style={{ color: '#249DD9' }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#249DD9' }}>
                                Textos
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>

                <List>
                    <Link to="/contents/exercises" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemIcon>
                                <QuizIcon style={{ color: '#249DD9' }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#249DD9' }}>
                                Exercícios
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>

                <Divider />

                <List>
                    <Link to="/views/help/" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemIcon>
                                <InboxIcon style={{ color: '#249DD9' }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#249DD9' }}>
                                Ajuda
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>

                <List>
                    <Link to="/views/contact/" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemIcon>
                                <ContactsIcon style={{ color: '#249DD9' }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#249DD9' }}>
                                Contatos
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
            </Main>
        </Box>
    )
}
/*eslint-disable */
