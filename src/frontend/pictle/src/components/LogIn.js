import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { IconButton } from '@mui/material'
import googleSignInLogo from '../assets/googleSignInButton.svg'
import axios from 'axios'

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href=".">
                Pictle
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const theme = createTheme()

const LogIn = (props) => {
    const [failedLogin, setFailedLogin] = React.useState(false)

    React.useEffect(() => {
        if (props.user) {
            console.log(props.user)
        }
    }, [props.user])

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })

        const getUser = async () => {
            try {
                await axios
                    .get('/users/email/' + data.get('email'))
                    .then((response) => {
                        var user = response.data
                        if (user.password === data.get('password')) {
                            setFailedLogin(false)
                            props.setUser(user)
                        }
                    })
            } catch (error) {
                setFailedLogin(true)
            }
        }
        getUser()
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        sx={{
                            width: 70,
                            height: 70,
                            background: 'white',
                            border: '1.5px solid black',
                            marginTop: 1,
                        }}
                        alt="avatar"
                        src={props.userAvatar}
                    />
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Button
                        sx={{
                            width: 350,
                            height: 60,
                            marginTop: 2,
                        }}
                        href="http://localhost:8000/auth/google"
                    >
                        <img src={googleSignInLogo} />
                    </Button>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            error={failedLogin}
                            margin="normal"
                            // required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            error={failedLogin}
                            margin="normal"
                            // required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
}

export default LogIn
