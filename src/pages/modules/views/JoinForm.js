import * as React from 'react';
import { Link } from 'react-router-dom';

import Typography from '../components/Typography';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl, { useFormControl } from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import style from '../styles/styles';

function MyFormHelperText() {
    const { focused } = useFormControl() || {};
  
    const helperText = React.useMemo(() => {
      if (focused) {
        return 'Must have 8 characters minimum';
      }
  
      return ' ';
    }, [focused]);
  
    return <FormHelperText>{helperText}</FormHelperText>;
}

function JoinForm() {
    const css  = style();
    const png = require('./img/bjj-throw-no-bg2.png');

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Box sx={{minHeight: '100vh', bgcolor: '#96ddf5'}}>
                <Grid container sx={{...css.joinFormGridContainer}}>
                    <Grid item xs={12} lg={9} sx={{...css.formContainer, bgcolor: 'white'}}>
                        <Box sx={{bgcolor: ''}}>
                            <Paper  sx={{...css.form}}>
                                <Typography variant="h3">
                                    Join Roll Roster
                                </Typography>
                                <Typography variant="h6">
                                    Create a free account or <Link to="/login" className="link highlight">log in</Link> 
                                </Typography>
                                <Box component="form" noValidate autoComplete="off">
                                    <FormControl sx={{width: '100%', mt: 3}} variant="outlined">
                                        <InputLabel>Email</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            required
                                            label="Email"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormControl sx={{width: '100%', mt: 6}} variant="outlined">
                                        <InputLabel>Password</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            required
                                            label="Password"
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        { showPassword ? <VisibilityOff /> : <Visibility /> }
                                                    </IconButton>
                                                </InputAdornment>
                                            } 
                                        />
                                        <MyFormHelperText />
                                    </FormControl>
                                    <FormControl sx={{width: '100%', mt: 3}} variant="outlined">
                                        <InputLabel>Confirm Password</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            required
                                            label="Confirm Password"
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        { showPassword ? <VisibilityOff /> : <Visibility /> }
                                                    </IconButton>
                                                </InputAdornment>
                                            } 
                                        />
                                    </FormControl>
                                    <Button component="submit" variant='contained' sx={{...css.heroButton, mt: 6, width: '100%'}}>
                                        <Typography color="white" variant="h6">
                                            Join
                                        </Typography>
                                    </Button>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item lg={3} sx={{position: 'relative', display: {xs: 'none', lg: 'block'}}}>
                        <Box sx={{...css.joinFormPNG, backgroundImage: `url(${png})`}}/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default JoinForm;