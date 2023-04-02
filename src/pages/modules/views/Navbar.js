import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Typography from '../components/Typography';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

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
                <Link to="/" className="link center">
                    <Typography variant="h4">
                        Roll Roster
                    </Typography>
                </Link>
                
            </Box>
            
            <Box sx={{ ...css.flex, display: 'flex', justifyContent: 'flex-end' }}>
                <Link to="/login" className="link">
                    <Typography variant="h6" sx={{...css.rightNav}}>
                        Log In
                    </Typography>
                </Link>
                
                <Link to="/join" className="link">
                    <Typography variant="h6" sx={{...css.rightNav, display: {xs: 'none', sm: 'flex'}}}>
                        Create Free Account
                    </Typography>
                    <Typography variant="h6" sx={{...css.rightNav, display: {xs: 'flex', sm: 'none'}}}>
                        Join
                    </Typography>
                </Link>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer open={open} onClose={toggleDrawer} sx={{...css.sidebar}}>
            <Toolbar sx={{width: {xs: '100vw', md: 240}}} />
            <Box>
                <List>
                    <ListItem disablePadding sx={{...css.sidebarContent}}>
                        <ListItemButton sx={{...css.sidebarButtons}}>
                            <ListItemIcon>
                                <EventRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Find Events" variant="h6"/>
                        </ListItemButton>
                        <ListItemButton sx={{...css.sidebarButtons}}>
                            <ListItemIcon>
                                <CalendarMonthRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Plan Events" variant="h6"/>
                        </ListItemButton>
                    </ListItem> 
                </List>
            </Box>
            
        </Drawer>
      </>
    );
  }
  
  export default Navbar;