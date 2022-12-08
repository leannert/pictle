import axios from 'axios'
import { useState, useEffect } from 'react'
import { ImagePixelated, ElementPixelated } from 'react-pixelate'
import { Pixelify } from 'react-pixelify'
import CircularProgress from '@mui/material/CircularProgress'
import { Box } from '@mui/system'

export default function Image(props) {
    const [image, setImage] = useState(
        'https://media.istockphoto.com/id/1271182194/vector/pixel-art-8-bit-question-mark-gold-box-isolated-vector-illustration.jpg?s=612x612&w=0&k=20&c=IW4gyYs1pZ_J5MUhBldrxNdSshqKkoya7xMd50CxiQA='
    )
    const [loading, setLoading] = useState(true)
    const [pixelSize, setPixelSize] = useState(0)

    useEffect(() => {
        if (props.level === 0) {
            setLoading(true)
            if (props.gameMode === 'tracks') {
                const getImage = async () => {
                    const response = await axios
                        .get('tracks/random')
                        .then((response) => {
                            props.setGuess('')
                            props.setIsCorrect(false)
                            var albumName =
                                response.data[0].spotify.album.name.replace(
                                    /\([^()]*\)/g,
                                    ''
                                )

                            props.setAnswer(albumName.replace(/^\s+|\s+$/g, ''))
                            setImage(
                                response.data[0].spotify.album.images[0].url
                            )
                            setLoading(false)
                        })
                }
                getImage()
            } else if (props.gameMode === 'games') {
                const getImage = async () => {
                    const response = await axios
                        .get('games/random')
                        .then((response) => {
                            props.setGuess('')
                            props.setIsCorrect(false)
                            props.setAnswer(response.data[0].igdb.name)
                            setImage(response.data[0].cover.url)
                            setLoading(false)
                        })
                }
                getImage()
            } else if (props.gameMode === 'movies') {
                const getImage = async () => {
                    const response = await axios
                        .get('movies/random')
                        .then((response) => {
                            props.setGuess('')
                            props.setIsCorrect(false)
                            props.setAnswer(response.data[0].tmdb.title)
                            setImage(response.data[0].tmdb.poster)
                            setLoading(false)
                        })
                }
                getImage()
            }
        }
    }, [props.gameMode, props.level])

    useEffect(() => {
        switch (props.level) {
            case -1:
                setPixelSize(0)
                break
            case 0:
                setPixelSize(64)
                break
            case 1:
                setPixelSize(48)
                break
            case 2:
                setPixelSize(32)
                break
            case 3:
                setPixelSize(16)
                break
            case 4:
                setPixelSize(10)
                break
            case 5:
                setPixelSize(6)
            case 6:
                setPixelSize(0)
        }
    }, [props.level, pixelSize])

    return (
        <>
            <Box
                alignContent={'center'}
                sx={{
                    color: 'red',
                    width: '460px',
                    height: '460px',
                    boxShadow: 4,
                }}
            >
                <Pixelify
                    src={image}
                    pixelSize={pixelSize}
                    width={450}
                    height={450}
                />
            </Box>
        </>
    )
}
