import * as React from 'react';
//Allows for switching between Page endpoints
import { Link } from 'react-router-dom';
//Custom components
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Typography from '../components/Typography';
//Material UI components
import {
    Box,
    List,
    Drawer,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    ListItemButton
} from '@mui/material';
//Material UI icon components
import {
    Menu,
    Close,
    EventRounded,
    CalendarMonthRounded
} from '@mui/icons-material';
//Firebase Auth function
import { useAuth } from '../firebase/AuthContext';
//Importing CSS to Material UI Components
import style from '../styles/styles';

function Navbar() {
    //Assigning style to variable css
    const css = style();
    //Extracting currentUser and logout function from Firebase Auth
    const { currentUser, logout } = useAuth();
    //Attempts to logout user
    async function handleLogOut(){
        try {
            await logout();
        }catch (error){
            console.log(error);
        }
    }
    //State to open and close sidebar
    const [open, setOpen] = React.useState(false);
    //Updates open
    const toggleDrawer = () => {
        setOpen(prev => !prev);
    }
    //Renders apporiate elements when user is logged out
    const loggedOutItems = () => {
        return (
            <>
                <Link to="/login" className="link">
                    <Typography variant="h6" sx={{...css.rightNav}}>
                        Log In
                    </Typography>
                </Link>
                <Toolbar/>
                <Link to="/join" className="link">
                    <Typography variant="h6" sx={{...css.rightNav, display: {xs: 'none', sm: 'flex'}}}>
                        Create Free Account
                    </Typography>
                    <Typography variant="h6" sx={{...css.rightNav, display: {xs: 'flex', sm: 'none'}}}>
                        Join
                    </Typography>
                </Link>
            </>
        )
    }
    //Renders apporiate elements when user is logged in 
    const loggedInItems = () => {
        return (
            <>
                <button className="logout link" onClick={handleLogOut} href="#">
                    <Typography variant="h6" sx={{...css.rightNav}}>
                        Log Out
                    </Typography> 
                </button>
            </>
        )
    }

    return (
      <>
        <AppBar open={open}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ ...css.flex, display: 'flex' }} >
                <IconButton size="large" edge="start" color="inherit" onClick={toggleDrawer}>
                    {open ? <Close fontSize="large"/> : <Menu fontSize="large"/>}
                </IconButton>
                <Link to="/" className="link center">
                    <Typography variant="h4">
                        Roll Roster
                    </Typography>
                </Link>
            </Box>
            <Box sx={{ ...css.flex, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                {currentUser ? loggedInItems() : loggedOutItems()}
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer open={open} onClose={toggleDrawer} sx={{...css.sidebar}}>
            <Toolbar sx={{width: {xs: '100vw', md: 240}}} />
            <Box>
                <List>
                    <ListItem disablePadding sx={{...css.sidebarContent}}>
                        <Link to="/events" className="link fullWidth">
                            <ListItemButton onClick={toggleDrawer} sx={{...css.sidebarButtons}}>
                                <ListItemIcon>
                                    <EventRounded />
                                </ListItemIcon>
                                <ListItemText primary="Find Events" variant="h6"/>
                            </ListItemButton>
                        </Link>
                        <ListItemButton sx={{...css.sidebarButtons}}>
                            <ListItemIcon>
                                <CalendarMonthRounded />
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