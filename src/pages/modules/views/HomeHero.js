import * as React from 'react';

import Toolbar from '../components/Toolbar';
import Typography from '../components/Typography';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import style from '../styles/styles';

function HomeHero(props) {
    const css  = style();
    return (
        <>
            <Paper square sx={{...css.heroImg, backgroundImage: `url(${props.heroImg})`}}>
                <Box sx={{...css.heroOverlay}} />
                <Toolbar />
                <Box sx={{...css.heroContainer}}>
                    <Typography color="white" variant="h1" sx={{display: {xs: 'none', sm: 'block'}}}>
                        The World's Largest Jiu-Jitsu Event Calendar
                    </Typography>
                    <Typography color="white" variant="h2" sx={{display: {xs: 'block', sm: 'none'}}}>
                        The #1 Jiu-Jitsu Event Calendar
                    </Typography>
                    <Button variant='contained' sx={{...css.heroButton}}>
                        <Typography color="white" variant="h6">
                            Find Nearby Events
                        </Typography>
                    </Button>
                </Box>
            </Paper>
        </>
    )
}

export default HomeHero;