import * as React from 'react'
import Box from '@mui/material/Box'
import Image from './Image'
import { Button } from '@mui/material'

export default function Game(props) {
    return (
        <>
            <Box>
                <Image gameMode={props.gameMode} level={props.level} />
                <Button
                    variant="contained"
                    color="success"
                    onClick={() => props.setLevel(props.level + 1)}
                    style={{ justifyContent: 'center' }}
                >
                    Lower pixel Size
                </Button>
            </Box>
        </>
    )
}
