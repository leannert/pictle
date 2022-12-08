import * as React from 'react'
import Box from '@mui/material/Box'
import Image from './Image'
import { Button, Paper } from '@mui/material'
import TextField from '@mui/material/TextField'
import ConfettiExplosion from 'react-confetti-explosion'

export default function Game(props) {
    const [guess, setGuess] = React.useState('')
    const [answer, setAnswer] = React.useState('')
    const [isCorrect, setIsCorrect] = React.useState(false)
    const [score, setScore] = React.useState(0)
    


    React.useEffect(() => {
        switch (props.level) {
            case 0:
                setScore(1000)
                break
            case 1:
                setScore(750)
                break
            case 2:
                setScore(500)
                break
            case 3:
                setScore(250)
                break
            case 4:
                setScore(100)
                break
            case 6:
                setScore(0)
                break
        }
    }, [props.level])

    React.useEffect(() => {
        console.log('answer:', answer)
    }, [answer])

    React.useEffect(() => {
        console.log('score:', score)
    }, [score])

    const handleGuess = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        if (
            props.level > -1 &&
            data.get('guess').toLowerCase() === answer.toLowerCase()
        ) {
            setIsCorrect(true)
            props.setLevel(-1)
            console.log('correct')
        } else {
            props.setLevel(props.level + 1)
            setIsCorrect(false)
            console.log('incorrect')
        }
    }

    return (
        <>
            <Box>
                <Box
                    sx={{
                        marginLeft: 24,
                        marginTop: 12,
                        position: 'absolute',
                    }}
                >
                    {isCorrect && (
                        <ConfettiExplosion particleCount={150} force={0.9} />
                    )}
                </Box>
                <Image
                    gameMode={props.gameMode}
                    level={props.level}
                    answer={answer}
                    setAnswer={setAnswer}
                    guess={guess}
                    setGuess={setGuess}
                    isCorrect={isCorrect}
                    setIsCorrect={setIsCorrect}
                />
                <Box
                    component="form"
                    onSubmit={handleGuess}
                    sx={{
                        marginTop: 2,
                        marginLeft: 10,
                    }}
                >
                    <TextField
                        sx={{
                            width: 300,
                        }}
                        id="guess"
                        name="guess"
                        variant="outlined"
                        value={guess}
                        onChange={(event) => setGuess(event.target.value)}
                        color={isCorrect ? 'success' : ''}
                        
                        inputProps={{
                            style: {
                                textTransform: 'uppercase',
                                textAlign: 'center',
                                fontSize: 20,
                            },
                            readOnly: isCorrect || props.level >= 5,
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    {props.level > -1  && props.level <= 4 && (
                        <h2>A correct guess here gets you {score} points!</h2>
                    )}

                    {isCorrect && (
                        <h2>You got it! You earned {score} points!</h2>
                    )}

                    {props.level >= 5 && (
                        <>
                        <h2>Game over! The correct answer was...
                            <br />
                            {answer}
                        </h2>
                        </>
                    )}
                </Box>
            </Box>
        </>
    )
}
