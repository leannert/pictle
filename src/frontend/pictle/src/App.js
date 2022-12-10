import React, { useEffect, useState } from 'react'
import './App.css'
import MenuAppBar from './components/MenuAppBar'
import Game from './components/Game'
import Grid from '@mui/material/Grid'

function App() {
    const [gameMode, setGameMode] = useState('')
    const [level, setLevel] = React.useState(-1)

    const [user, setUser] = useState({})

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        if (user.username !== undefined) {
            setLoggedIn(true)
        }
    }, [user])

    return (
        <>
            <MenuAppBar
                gameMode={gameMode}
                setGameMode={setGameMode}
                level={level}
                setLevel={setLevel}
                user={user}
                setUser={setUser}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
            />

            <Grid container alignContent={'center'}>
                <Grid
                    container
                    item
                    justifyContent={'center'}
                    sx={{ marginTop: 6 }}
                >
                    <Game
                        gameMode={gameMode}
                        level={level}
                        setLevel={setLevel}
                        user={user}
                        setUser={setUser}
                        loggedIn={loggedIn}
                        setLoggedIn={setLoggedIn}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App
