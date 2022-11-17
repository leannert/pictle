import React, { useEffect, useState } from 'react'
import './App.css'
import axios from './axios'
import MenuAppBar from './components/MenuAppBar'
import Game from './components/Game'
import CategoriesDrawer from './components/CategoriesDrawer'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/system'

function App() {
    const [result, setResult] = useState('')
    const [testImage, setTestImage] = useState('')
    useEffect(() => {
        axios.get('api/hello').then((response) => {
            setResult(response.data)
        })

        axios.get('dev/testimage').then((response) => {
            // console.log(response.data.testImage)
            // response.setHeader("Access-Control-Allow-Origin", "*");
            setTestImage(response.data.testImage)
        })

        axios.get('/users').then((response) => {
            // console.log(response.data)
        })
    }, [])

    return (
        result && (
            <>
                <MenuAppBar />
                <CategoriesDrawer />

                <Container
                sx={{marginTop: 6, marginLeft: 62}}
                maxWidth='sm'>
                    <Game />
                </Container>
            </>
        )
    )
}

export default App
