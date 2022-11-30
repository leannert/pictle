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

    useEffect(() => {
        setLoading(true)
        if (props.gameMode === 'tracks') {
            const getImage = async () => {
                const response = await axios
                    .get('tracks/random')
                    .then((response) => {
                        setImage(response.data[0].spotify.album.images[0].url)
                        setLoading(false)
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
                    })
            }
            getImage()
        }
    }, [props.gameMode])

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
                    pixelSize={35}
                    width={450}
                    height={450}
                    
                />

                <img
                    src={
                        'https://images.igdb.com/igdb/image/upload/t_1080p/co2lbd.jpg'
                    }
                    width={450}
                    crossOrigin={null}
                />
            </Box>
        </>
    )
}
