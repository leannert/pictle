import React, { useEffect, useState } from 'react'
import { StyleSheet, View, SafeAreaView } from "react-native"
import './App.css'
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

    return (
        result && (
            <>
                <h1>{result}</h1>
                <img src={"https:"+testImage} alt="testImage" />
            </>
        ) && (
            <SafeAreaView>
                <View>
                <GuessRow />
                <GuessRow />
                <GuessRow />
                <GuessRow />
                <GuessRow />
                <GuessRow />
                </View>
            </SafeAreaView>
        )
    )
}

const GuessRow = () => (
    <View style={styles.guessRow}>
      <View style={styles.guessSquare}></View>
      <View style={styles.guessSquare}></View>
      <View style={styles.guessSquare}></View>
      <View style={styles.guessSquare}></View>
      <View style={styles.guessSquare}></View>
    </View>
  )


const styles = StyleSheet.create({
    guessRow: {
      flexDirection: "row",
      justifyContent: "center",
    },
    guessSquare: {
      borderColor: "#d3d6da",
      borderWidth: 2,
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      margin: 5,
    },
  })
  

export default App
