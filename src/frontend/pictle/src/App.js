import React, { useEffect, useState } from 'react'
import { StyleSheet, View, SafeAreaView } from "react-native"
import ReactDOM from 'react-dom'
import './App.css'
import MenuAppBar from './components/MenuAppBar'
import Game from './components/Game'
import Grid from '@mui/material/Grid'
import Wordle from './components/Wordle'
import axios from './axios'


function App() {
    const [gameMode, setGameMode] = useState('')
    const [level, setLevel] = React.useState(-1)


    const [solution, setSolution] = useState('')
    useEffect(() => {
            setSolution("e treme")
          
      }, [setSolution])


    return (
        <>
            <MenuAppBar gameMode={gameMode} setGameMode={setGameMode} 
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
            <Wordle solution={solution} />
            
        </>
    )
}


  export default App
 
