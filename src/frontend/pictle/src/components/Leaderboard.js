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

const theme = createTheme()

const Board = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
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
                    <Typography component="h1" variant="h5">
                        Leaderboard <br/>
                    </Typography>

                    <Box
                        sx={{
                            marginTop: 5,
                        }}
                    >

                        <Grid container rowSpacing={4} columnSpacing={2} justifyContent="center" alignItems="center" columns={3}>
                            <Grid item rank md={1}>
                                <item>Rank</item>
                            </Grid>
                            <Grid item userName md={1}>
                                <item>Username</item>
                            </Grid>
                            <Grid item score md={1}>
                                <item>Score</item>
                            </Grid>


                            {/* First user */}
                            <Grid item rank md={1}>
                                <item>1.</item>
                            </Grid>
                            <Grid item userName md={1}>
                                <item>TestUser1</item>
                            </Grid>
                            <Grid item score md={1}>
                                <item>14</item>
                            </Grid>


                            {/* Second user */}
                            <Grid item rank md={1}>
                                <item>2.</item>
                            </Grid>
                            <Grid item userName md={1}>
                                <item>TestUser2</item>
                            </Grid>
                            <Grid item score md={1}>
                                <item>4</item>
                            </Grid>

                            {/* Third user */}
                            <Grid item rank md={1}>
                                <item>3.</item>
                            </Grid>
                            <Grid item userName md={1}>
                                <item>TestUser3</item>
                            </Grid>
                            <Grid item score md={1}>
                                <item>2</item>
                            </Grid>


                            {/* Fourth user */}
                            <Grid item rank md={1}>
                                <item>4.</item>
                            </Grid>
                            <Grid item userName md={1}>
                                <item>TestUser4</item>
                            </Grid>
                            <Grid item score md={1}>
                                <item>7</item>
                            </Grid>


                            {/* Fifth user */}
                            <Grid item rank md={1}>
                                <item>5.</item>
                            </Grid>
                            <Grid item userName md={1}>
                                <item>TestUser5</item>
                            </Grid>
                            <Grid item score md={1}>
                                <item>5</item>
                            </Grid>
                        </Grid>

                    </Box>

                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Board