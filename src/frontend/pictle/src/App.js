import React, { useEffect, useState } from 'react'
import './App.css'
import MenuAppBar from './components/MenuAppBar'
import Game from './components/Game'
import Grid from '@mui/material/Grid'


function App() {
    const [gameMode, setGameMode] = useState('')

    return (
        <>
            <MenuAppBar gameMode={gameMode} setGameMode={setGameMode} />

            <Grid container alignContent={'center'}>
                <Grid
                    container
                    item
                    justifyContent={'center'}
                    sx={{ marginTop: 6 }}
                >
                    <Game gameMode={gameMode} />
                </Grid>
            </Grid>
        </>
    )
}

export default App
