import axios from 'axios'
import { useState, useEffect } from 'react'
import { ImagePixelated } from 'react-pixelate'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';

export default function Image() {
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const getImage = async () => {
            const response = await axios.get('tracks/random').then((response) => {
                setImage(response.data[0].spotify.album.images[0].url)
                setLoading(false)
            })
        }
        getImage()
    }, [image])

    return (
        <>
        <Box
        alignContent={'center'}>
        <ImagePixelated src={image} pixelSize={20}  width={450 }height={450} />
        </Box>
      

         

            
        </>
    )
}



