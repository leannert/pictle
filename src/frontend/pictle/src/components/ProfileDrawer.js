import * as React from 'react'
import Drawer from '@mui/material/Drawer'

import LogIn from './LogIn'

const ProfileDrawer = (props) => {
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
                <LogIn />
            </Drawer>
        </>
    )
}

export default ProfileDrawer
