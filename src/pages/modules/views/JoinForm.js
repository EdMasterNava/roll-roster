import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Typography from '../components/Typography';
import PasswordHelperText from '../components/PasswordHelperText';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useAuth } from '../firebase/AuthContext';

import style from '../styles/styles';

function JoinForm() {
    const css  = style();
    const png = require('./img/bjj-throw-no-bg2.png');
    const { join } = useAuth();
    const navigateTo = useNavigate();

    const [userData, setUserData] = React.useState({
        email: '',
        password: '',
        comfimPassword: '',
        error: '',
        isLoading: false
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(userData.password !== userData.comfimPassword){
            return setUserData({ ...userData, error: 'Passwords Do Not Match' });
        }
        if(userData.password.length < 7){
            return setUserData({ ...userData, error: 'Password Must Be at Least 8 Characters' });
        }
        try {
            setUserData({ ...userData, error: '', isLoading: true });
            await join(userData.email, userData.password);
            navigateTo('/')
        } catch {
            return setUserData({ ...userData, error: 'Failed to Create an Account' });
        }
        setUserData({ ...userData, isLoading: false });
    };

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((prev) => !prev);
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
                                {userData.error ? <Typography variant="h6" sx={{...css.error}}>{userData.error}</Typography> : <div></div>}
                                <Box component="form" onSubmit={handleSubmit} id="join">
                                    <FormControl sx={{width: '100%', mt: 3}} variant="outlined">
                                        <InputLabel>Email</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            required
                                            label="Email"
                                            type="email"
                                            name="email"
                                            value={userData.email}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                    <FormControl sx={{width: '100%', mt: 6}} variant="outlined">
                                        <InputLabel>Password</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            required
                                            label="Password"
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={userData.password}
                                            onChange={handleChange}
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
                                        <PasswordHelperText />
                                    </FormControl>
                                    <FormControl sx={{width: '100%', mt: 3}} variant="outlined">
                                        <InputLabel>Confirm Password</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            required
                                            label="Confirm Password"
                                            type={showPassword ? 'text' : 'password'}
                                            name="comfimPassword"
                                            value={userData.comfimPassword}
                                            onChange={handleChange}
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
                                    <Button type="submit" variant="contained" form="join" disabled={userData.isLoading} sx={{...css.heroButton, mt: 6, width: '100%'}}>
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