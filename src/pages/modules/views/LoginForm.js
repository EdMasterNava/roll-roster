import * as React from 'react';
import { Link } from 'react-router-dom';

import Typography from '../components/Typography';

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

function LoginForm() {
    const css  = style();
    const png = require('./img/bjj-gym.jpeg');
    const { login } = useAuth();

    const [userData, setUserData] = React.useState({
        email: '',
        password: '',
        error: '',
        isLoading: false
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }
    async function handleSubmit(event) {
        event.preventDefault();
        try{
            setUserData({ ...userData, error: '', isLoading: true });
            await login(userData.email, userData.password);
        } catch {
            return setUserData({ ...userData, error: 'Unable To Log In' });
        }
    }

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Grid container component="main" sx={{ minHeight: '100vh' }}>
                <Grid item xs={false} sm={6} md={7} sx={{...css.loginImg, backgroundImage: `url(${png})`}}>
                    <Box sx={{...css.loginOverlay}}/>
                </Grid>
                <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square sx={{...css.formContainer}}>
                    <Box sx={{bgcolor: ''}}>
                        <Paper  sx={{...css.form}}>
                            <Typography variant="h3">
                                Log in
                            </Typography>
                            <Typography variant="h6">
                                Need a Roll Roster account? <Link to="/join" className="link highlight">Create an account</Link> 
                            </Typography>
                            {userData.error ? <Typography variant="h6" sx={{...css.error}}>{userData.error}</Typography> : <div></div>}
                            <Box component="form" onSubmit={handleSubmit} id="login">
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
                                </FormControl>
                                <Button type="submit" form="login" variant='contained' sx={{...css.heroButton, mt: 3, width: '100%'}}>
                                    <Typography color="white" variant="h6">
                                        Log In
                                    </Typography>
                                </Button>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default LoginForm;