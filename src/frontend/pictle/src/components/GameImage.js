import axios from 'axios'
import { useState, useEffect } from 'react'

export default function GameImage() {
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getImage = async () => {
            const response = await axios.get('games/random')
            console.log(response.data)
            setImage(response.data[0].cover.image_id)
            setLoading(false)
            
        }
        getImage()
    }, [image])

    return (
        <>
            <img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${image}.jpg`} width={250} height={400} fillTransparencyColor={"grey"}/>
        </>
    )
}
