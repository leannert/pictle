import React, { useEffect, useState } from 'react'
import './App.css'
import axios from './axios'
import MenuAppBar from './components/MenuAppBar'
import GameImage from './components/Image'
import CategoriesDrawer from './components/CategoriesDrawer'

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
                <h1>{result}</h1>
                <img src={testImage} alt="testImage" width={250} />

                <GameImage />
            </>
        )
    )
}

export default App
