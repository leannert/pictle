import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
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
                            <LibraryMusicIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary="Album Art" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={() => {}}>
                        <ListItemIcon>
                            <SportsEsportsIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary="Video Game Covers" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={() => {}}>
                        <ListItemIcon>
                            <MovieIcon fontSize="large" />
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
                onClose={props.onClose}
            >
                {list('left')}
            </Drawer>
        </>
    )
}

export default CategoriesDrawer
