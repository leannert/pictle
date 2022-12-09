import * as React from 'react'
import Box from '@mui/material/Box'
import Image from './Image'
import TextField from '@mui/material/TextField'
import ConfettiExplosion from 'react-confetti-explosion'
import ReplayIcon from '@mui/icons-material/Replay'
import IconButton from '@mui/material/IconButton'

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

    const handleGuess = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        if (
            props.level > -1 &&
            data.get('guess').toLowerCase() === answer.toLowerCase()
        ) {
            setIsCorrect(true)
            props.setLevel(-1)
        } else {
            props.setLevel(props.level + 1)
            setIsCorrect(false)
        }
    }

    return (
        <>
            <Box>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{
                        position: 'absolute',
                        top: 580,
                        left: 420,
                        zIndex: 24,
                        backgroundColor: 'black',
                        borderRadius: 10,
                        color: 'white',
                        ':hover': {
                            backgroundColor: '#a0a6bd',
                            color: 'white',
                        },
                    }}
                    onClick={() => {
                        props.setLevel(0)
                        setIsCorrect(false)
                    }}
                >
                    <ReplayIcon fontSize="large" />
                </IconButton>
                <Box
                sx={{
                    position: 'absolute', left: 750, top: 160
                }}>
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
                    <Box>
                        <TextField
                            sx={{
                                width: 400, right: 50
                            }}
                            id="guess"
                            name="guess"
                            variant="outlined"
                            autoComplete="off"
                            value={guess}
                            onChange={(event) => setGuess(event.target.value)}
                            color={isCorrect ? 'success' : ''}
                            inputProps={{
                                style: {
                                    textTransform: 'uppercase',
                                    textAlign: 'center',
                                    fontSize: 20,
                                },
                                readOnly: isCorrect || props.level >= 5
                            }}
                        />
                    </Box>
                </Box>
                <Box>
                    {props.level > -1 && props.level <= 4 && (
                        <h2>A correct guess here gets you {score} points!</h2>
                    )}

                    {isCorrect && (
                        <h2>You got it! You earned {score} points!</h2>
                    )}

                    {props.level >= 5 && (
                        <>
                            <h2>
                                Game over! The correct answer was...
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
