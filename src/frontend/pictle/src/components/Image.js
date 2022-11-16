import axios from 'axios'
import { useState, useEffect } from 'react'
import { ImagePixelated, ElementPixelated } from 'react-pixelate'
import CircularProgress from '@mui/material/CircularProgress';

export default function Image() {
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const getImage = async () => {
            const response = await axios.get('games/random').then((response) => {
                setImage(response.data[0].cover.image_id)
                setLoading(false)
            })
        }
        getImage()
    }, [])

    return (
        <>
        {loading? <CircularProgress/> :<ImagePixelated src={`https://i.scdn.co/image/ab67616d0000b2737aede4855f6d0d738012e2e5`} pixelSize={12}  width={450 }height={450} />}

         

            
        </>
    )
}



