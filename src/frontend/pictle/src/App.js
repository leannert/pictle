import React, { useEffect, useState } from 'react'
import './App.css'
import MenuAppBar from './components/MenuAppBar'
import Game from './components/Game'
import CategoriesDrawer from './components/CategoriesDrawer'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/system'

function App() {
    const [gameMode, setGameMode] = React.useState('')

    return (
        <>
            <MenuAppBar />

            <Grid container alignContent={'center'}>
                <Grid
                    container
                    item
                    justifyContent={'center'}
                    sx={{ marginTop: 6 }}
                >
                    <Game />
                </Grid>
            </Grid>
        </>
    )
}

export default App
