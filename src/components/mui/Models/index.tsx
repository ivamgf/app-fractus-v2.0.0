import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Cookies from 'universal-cookie'
import IconButton from '../../mui/Buttons/IconButton'
import Stack from '@mui/material/Stack'

/*eslint-disable */
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}
/*eslint-disable */

export default function TransitionsModal() {
    const cookies = new Cookies()
    const cookieState = cookies.get('cookieState')
    const [open, setOpen] = React.useState(true)
    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
        cookies.set('cookieState', true, { path: '/' })
    }

    const handleCookie = async () => await setOpen(false)

    return (
        <div>
            {!cookieState && (
                <Button onClick={handleOpen}>Aceitar Cookies</Button>
            )}
            {!cookieState && (
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <Typography
                                id="transition-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                Aceite os cookies para uma melhor experiência.
                            </Typography>
                            <Typography
                                id="transition-modal-description"
                                sx={{ mt: 2 }}
                            >
                                Utilizamos cookies para melhorar a sua
                                experiência em nosso aplicativo. Não utilizamos
                                seus dados pessoais em nossos cookies.
                            </Typography>
                            <br />
                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant="contained"
                                    onClick={handleClose}
                                    style={{ backgroundColor: '#249DD9' }}
                                >
                                    Aceitar Cookies
                                </Button>
                                <IconButton onClick={handleCookie} />
                            </Stack>
                        </Box>
                    </Fade>
                </Modal>
            )}
        </div>
    )
}
