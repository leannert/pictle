import React, { useEffect, useState } from 'react'
import './App.css'
import MenuAppBar from './components/MenuAppBar'
import Game from './components/Game'
import Grid from '@mui/material/Grid'


function App() {
    const [gameMode, setGameMode] = useState('')
    const [level, setLevel] = React.useState(-1)
    //authentication states
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(false)
    }, [])
    
    return (
        <>
            <MenuAppBar gameMode={gameMode} setGameMode={setGameMode} 
            isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}
            level={level}
            setLevel={setLevel}/>

            <Grid container alignContent={'center'}>
                <Grid
                    container
                    item
                    justifyContent={'center'}
                    sx={{ marginTop: 6 }}
                >
                    <Game gameMode={gameMode} 
                    level={level}
                    setLevel={setLevel}/>
                </Grid>
            </Grid>
        </>
    )
}

export default App
