import axios from 'axios'
import { useState, useEffect } from 'react'
import { ImagePixelated, ElementPixelated } from 'react-pixelate'
import { Pixelify } from 'react-pixelify'
import CircularProgress from '@mui/material/CircularProgress'
import { Box } from '@mui/system'
import Wordle from './Wordle'

export default function Image(props) {
    const [image, setImage] = useState(
        'https://media.istockphoto.com/id/1271182194/vector/pixel-art-8-bit-question-mark-gold-box-isolated-vector-illustration.jpg?s=612x612&w=0&k=20&c=IW4gyYs1pZ_J5MUhBldrxNdSshqKkoya7xMd50CxiQA='
    )
    const [loading, setLoading] = useState(true)
    const [pixelSize, setPixelSize] = useState(0)
    const [image_solution, setSolution] = useState('')

    useEffect(() => {
        if (props.level === 0) {
            setLoading(true)
            if (props.gameMode === 'tracks') {
                const getImage = async () => {
                    const response = await axios
                        .get('tracks/random')
                        .then((response) => {
                            setImage(
                                response.data[0].spotify.album.images[0].url
                            )
                            setLoading(false)
                            setSolution(
                                response.data[0].spotify.album.name
                            )
                        })
                }
                getImage()
            } else if (props.gameMode === 'games') {
                const getImage = async () => {
                    const response = await axios
                        .get('games/random')
                        .then((response) => {
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
                            setImage(response.data[0].tmdb.poster)
                            setLoading(false)
                            setSolution(response.data[0].tmdb.originalTitle)
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
                setPixelSize(4)
                break
            case 5:
                setPixelSize(0)
        }
        console.log(pixelSize)
        console.log(props.level)
    }, [props.level, pixelSize])

    return (
        <>
            <Box
                
                
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
                <Wordle solution={image_solution.toLowerCase()} />
            </Box> 

            
            
        </> 
    )
}
