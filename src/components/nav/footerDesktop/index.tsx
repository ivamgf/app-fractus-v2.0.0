import React from "react";
import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import PolicyIcon from '@mui/icons-material/Policy'
import PublicIcon from '@mui/icons-material/Public'
import ContactsIcon from '@mui/icons-material/Contacts'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

const FooterDesktop = () => {
    const homeLink = '/home/'
    const aboutLink = '/views/about/'
    const termsLink = '/views/terms/'
    const urlLink = 'https://fractus.orkneytech.com.br/'
    const contactLink = '/views/contacts/'

    return (
        <div>
            <FooterComponentDesktop>
                <Stack
                    style={
                        {
                            marginTop: '0.5em',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '30em',
                            cursor: 'pointer'
                        }
                    }
                    direction="row"
                    spacing={2}
                >
                    <Link to={homeLink} style={{textDecoration: 'none'}}>
                        <HomeIcon sx={{color: "#fff"}} />
                    </Link>
                    <Link to={homeLink} style={{textDecoration: 'none'}}>
                        <Typography variant="subtitle1" component="div" sx={{color: "#fff"}}>
                            Home
                        </Typography>
                    </Link>


                    <Link to={aboutLink} style={{textDecoration: 'none'}}>
                        <InfoIcon sx={{color: "#fff"}} />
                    </Link>
                    <Link to={aboutLink} style={{textDecoration: 'none'}}>
                        <Typography variant="subtitle1" component="div" sx={{color: "#fff"}}>
                            Sobre
                        </Typography>
                    </Link>


                    <Link to={termsLink} style={{textDecoration: 'none'}}>
                        <PolicyIcon sx={{color: "#fff"}} />
                    </Link>
                    <Link to={termsLink} style={{textDecoration: 'none'}}>
                        <Typography variant="subtitle1" component="div" sx={{color: "#fff"}}>
                            Termos
                        </Typography>
                    </Link>

                    <Link to={urlLink} style={{textDecoration: 'none'}}>
                        <PublicIcon sx={{color: "#fff"}} />
                    </Link>
                    <Link to={urlLink} style={{textDecoration: 'none'}}>
                        <Typography variant="subtitle1" component="div" sx={{color: "#fff"}}>
                            Site
                        </Typography>
                    </Link>

                    <Link to={contactLink} style={{textDecoration: 'none'}}>
                        <ContactsIcon sx={{color: "#fff"}} />
                    </Link>
                    <Link to={contactLink} style={{textDecoration: 'none'}}>
                        <Typography variant="subtitle1" component="div" sx={{color: "#fff"}}>
                            Contatos
                        </Typography>
                    </Link>
                </Stack>
            </FooterComponentDesktop>
        </div>
    );
}

const FooterComponentDesktop = styled.div`

    @media screen and (min-width: 481px) {
        background-color: #249dd9;
        min-height: 15em;
        padding: 2em;
        text-align: center;
        color: #ffffff;
        font-weight: bold;
    }
    @media screen and (max-width: 481px) {
        display: none;
    }
`
/*eslint-disable */

export default FooterDesktop;
