import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import MovieIcon from '@mui/icons-material/Movie'
import LogIn from './LogIn'

const ProfileDrawer = (props) => {

    

    return (
        <>
            <Drawer
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
                <LogIn />
            </Drawer>
        </>
    )
}

export default ProfileDrawer
