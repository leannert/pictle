import * as React from 'react'
import Drawer from '@mui/material/Drawer'

import Board from './Leaderboard'

const LeaderboardDrawer = (props) => {
    return (
        <>
            <Drawer
                onClose={props.onClose}
                sx={{ zIndex: 1000, marginTop: 24 }}
                anchor="right"
                open={props.open}
                style={{
                    position: 'relative',
                    zIndex: 1,
                    marginTop: '200px !important',
                }}
                BackdropProps={{ invisible: true }}
            >
                <Board />
            </Drawer>
        </>
    )
}

export default LeaderboardDrawer