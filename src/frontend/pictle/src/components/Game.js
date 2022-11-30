import * as React from 'react'
import Box from '@mui/material/Box'
import Image from './Image'

export default function Game(props) {
    return (
        <>
            <Box>
                <Image gameMode={props.gameMode} />
            </Box>
        </>
    )
}
