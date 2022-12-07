import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import BarChartIcon from '@mui/icons-material/BarChart'
import InfoIcon from '@mui/icons-material/Info'
import { Avatar } from '@mui/material'
import CategoriesDrawer from './CategoriesDrawer'
import ProfileDrawer from './ProfileDrawer'

const MenuAppBar = (props) => {
    const [isCategoriesDrawerOpen, setIsCategoriesDrawerOpen] = React.useState(false)
    const [isUserDrawerOpen, setIsUserDrawerOpen] = React.useState(false)
    const [userAvatar, setUserAvatar] = React.useState('https://cdn0.iconfinder.com/data/icons/gaming-4/512/5-512.png')

    React.useEffect(() => {
        if (props.user.pfp) {
            setUserAvatar(props.user.pfp)
        }
    }, [props.user])


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="relative" style={{ zIndex: 24 }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => {
                                setIsCategoriesDrawerOpen(
                                    (isDrawerOpen) => !isDrawerOpen
                                )
                            }}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                        <Typography
                            variant="h4"
                            component="div"
                            align="center"
                            sx={{ flexGrow: 1, marginLeft: 20 }}
                        >
                            Pictle
                        </Typography>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <InfoIcon fontSize="large" />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <BarChartIcon fontSize="large" />
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => {
                                setIsUserDrawerOpen(
                                    (isDrawerOpen) => !isDrawerOpen
                                )
                            }}
                        >
                            <Avatar
                                sx={{ background: 'white' }}
                                alt="avatar"
                                src={userAvatar}
                            />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <CategoriesDrawer
                    gameMode={props.gameMode}
                    setGameMode={props.setGameMode}
                    level={props.level}
                    setLevel={props.setLevel}
                    open={isCategoriesDrawerOpen}
                    onClose={() => {
                        setIsCategoriesDrawerOpen(false)
                    }}

                ></CategoriesDrawer>
                <ProfileDrawer
                    user={props.user}
                    setUser={props.setUser}
                    userAvatar={userAvatar}
                    setUserAvatar={setUserAvatar}
                    open={isUserDrawerOpen}
                    onClose={() => {
                        setIsUserDrawerOpen(false)
                    }}
                ></ProfileDrawer>
            </Box>
        </>
    )
}

export default MenuAppBar
