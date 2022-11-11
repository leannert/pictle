import React, { useEffect, useState } from 'react'
import './App.css'
import axios from './axios'
import MenuAppBar from './components/MenuAppBar'
import {Grid, Button, Box, Typography } from "@mui/material"

function App() {
    const [result, setResult] = useState('')
    const [testImage, setTestImage] = useState('')
    useEffect(() => {
        axios.get('api/hello').then((response) => {
            setResult(response.data)
        })

        axios.get('/dev/testimage').then((response) => {
            console.log(response.data.testImage)
            setTestImage(response.data.testImage)
        })

        // axios.get('/users').then((response) => {
        //     console.log(response.datas)
            
        // })
    }, [])

    return (
        
            <>
                <MenuAppBar />
                {/* <h1>{result}</h1> */}
                <Grid 
                direction='column' 
                alignItems={'center'}
                justifySelf="center">

                    <img src={testImage} alt="testImage" width={200} />
                </Grid>
            </>
        
    )
}

export default App
