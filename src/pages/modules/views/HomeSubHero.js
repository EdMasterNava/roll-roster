import * as React from 'react';

import Typography from '../components/Typography';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import style from '../styles/styles';

function HomeSubHero() {
    const css  = style();
    return (
        <>
            <Box sx={{...css.subHero}}>
                <Grid container sx={{px: 3.8}}>
                    <Grid item xs={12} sm={6} >
                        <Typography color="white" variant="h1" 
                                    sx={{ display: {xs: 'none', sm: 'block'} }}>
                            Planning an Event?
                        </Typography>
                        <Typography color="white" variant="h2" 
                                    sx={{ display: {xs: 'block', sm: 'none'} }}>
                            Planning an Event?
                        </Typography>
                    </Grid>
                    <Grid item  xs={12} sm={6} sx={{display: 'flex'}}>
                        <Button variant='contained' 
                                sx={{...css.heroButton, alignSelf: 'center' }} >
                            <Typography color="white" variant="h6">
                                Planning Starts Here
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default HomeSubHero;