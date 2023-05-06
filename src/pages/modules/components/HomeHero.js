import * as React from 'react';
//Allows for switching to Page endpoints
import { Link } from 'react-router-dom';
//Custom components
import Toolbar from '../components/Toolbar';
import Typography from '../components/Typography';
//Material UI components
import {
    Box,
    Paper,
    Button
} from '@mui/material';
//Importing CSS to Material UI Components 
import style from '../styles/styles';

function HomeHero() {
    //Assigning style to variable css
    const css  = style();
    //Homepage picture
    const avif = require('./img/jiujitsu.avif');
    return (
        <>
            <Paper square sx={{...css.heroImg, backgroundImage: `url(${avif})`}}>
                <Box sx={{...css.heroOverlay}} />
                <Toolbar />
                <Box sx={{...css.heroContainer}}>
                    <Typography color="white" variant="h1" sx={{display: {xs: 'none', sm: 'block'}}}>
                        The World's Largest Jiu-Jitsu Event Calendar
                    </Typography>
                    <Typography color="white" variant="h2" sx={{display: {xs: 'block', sm: 'none'}}}>
                        The #1 Jiu-Jitsu Event Calendar
                    </Typography>
                    <Link to="/events" className='link'>
                        <Button variant='contained' sx={{...css.heroButton}}>
                            <Typography color="white" variant="h6">
                                Find Nearby Events
                            </Typography>
                        </Button>
                    </Link>
                </Box>
            </Paper>
        </>
    )
}

export default HomeHero;