import React, { useEffect, useState } from 'react'
import { StyleSheet, View, SafeAreaView } from "react-native"
import ReactDOM from 'react-dom'
import './App.css'
import Wordle from './components/Wordle'
import axios from './axios'

function App() {
    const [result, setResult] = useState('')
    const [testImage, setTestImage] = useState('')
    useEffect(() => {
        axios.get('api/hello').then((response) => {
            setResult(response.data)
        })

        axios.get('dev/testimage').then((response) => {
            console.log(response.data.testImage)
            setTestImage(response.data.testImage)
        })
    }, [])


    const [solution, setSolution] = useState('')
    useEffect(() => {
            setSolution("e treme")
          
      }, [setSolution])


    return (
        result && (
            <>
                <h1>{result}</h1>
                <img src={"https:"+testImage} alt="testImage" />
                {solution && <Wordle solution={solution} />}
            </>
        )
    )
}


  export default App
 
