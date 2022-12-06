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
import googleSignInLogo  from '../assets/googleSignInButton.svg'

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Pictle
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const theme = createTheme()
const LoggedOut = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        handleSuccessAuth()
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
    }
    // const handleLogout = x => {
    //     props.setIsAuthenticated(false)
    // }


    const handleSuccessAuth = x => {
        props.setIsAuthenticated(true)
        console.log(props.isAuthenticated)
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
                        src="https://avatars.dicebear.com/api/pixel-art/+dfe334322122124566532a.svg"
                    />
                    <Typography component="h1" variant="h5"
                            onClick={() => {
                                handleSuccessAuth()
                                // console.log(props.isAuthenticated)
                              }}>
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
                            margin="normal"
                            // required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
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
export default LoggedOut