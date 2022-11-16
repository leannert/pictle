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

const CategoriesDrawer = (props) => {

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350,
                marginTop: 8,
            }}
            role="presentation"
        >
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <LibraryMusicIcon />
                        </ListItemIcon>
                        <ListItemText primary="Album Art" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <SportsEsportsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Video Game Covers" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <MovieIcon />
                        </ListItemIcon>
                        <ListItemText primary="Movie Posters" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <>
            <Drawer
                sx={{ zIndex: 1000, marginTop: 24 }}
                anchor="left"
                open={props.open}
                style={{
                    position: 'relative',
                    zIndex: 1,
                    marginTop: '200px !important',
                }}
                BackdropProps={{ invisible: true }}
            >
                {list('left')}
            </Drawer>
        </>
    )
}

export default CategoriesDrawer
