import * as React from 'react';
import Login from './Login'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
//new changes

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 400,
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
      };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button variant="h3" 
            sx={{ 
              // flexGrow: 1 , 
              fontWeight: 900, 
              fontSize: 30,
              maxBlockSize: 400,
              maxWidth: 150,
              display: 'flex',
              margin: 'auto'
              }}>
            PICTLE
          </Button>
         
            <div>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {/* {pages.map((page) => ( */}
                  <Button
                    // key={Account}
                    onClick={handleOpen}
                    sx={{ my: 2, color: '#212121', display: 'block' }}
                  >
                    Account
                  </Button>
                  {/* ))} */}
                  <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                      <Box sx={style}>
                        <Login/>
                      </Box>
                  </Modal>
              </Box>
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}
