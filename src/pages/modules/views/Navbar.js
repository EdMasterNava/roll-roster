import * as React from 'react';

import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Typography from '../components/Typography';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import style from '../styles/styles';

function Navbar() {
    const css = style();
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(prev => !prev);
    }
    return (
      <>
        <AppBar open={open}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ ...css.flex, display: 'flex' }} >
                <IconButton size="large" edge="start" color="inherit"  onClick={toggleDrawer}>
                    {open ? <CloseIcon fontSize="large"/> : <MenuIcon fontSize="large"/>}
                </IconButton>
                <Typography variant="h4" sx={{alignSelf: 'center'}}>
                    Roll Roster
                </Typography>
            </Box>
            
            <Box sx={{ ...css.flex, display: 'flex', justifyContent: 'flex-end' }}>
                <Typography sx={{...css.rightNav}}>
                    Log In
                </Typography>
                <Typography sx={{...css.rightNav, display: {xs: 'none', sm: 'flex'}}}>
                    Create Free Account
                </Typography>
                <Typography sx={{...css.rightNav, display: {xs: 'flex', sm: 'none'}}}>
                    Join
                </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        
        <Drawer open={open} onClose={toggleDrawer} sx={{...css.sidebar}}>
            <Toolbar sx={{width: {xs: '100vw', md: 240}}} />
            <Box sx={{...css.sidebarContent}}>
                <List>
                   <Typography>
                        Find Event
                    </Typography>
                    <Typography>
                        Plan Event
                    </Typography>  
                </List>
            </Box>
        </Drawer>
      </>
    );
  }
  
  export default Navbar;