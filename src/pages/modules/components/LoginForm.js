import * as React from 'react';
//Allows for switching between Page endpoints
import { Link, useNavigate } from 'react-router-dom';
//Custom components
import Typography from '../components/Typography';
//Material UI components
import {
    Box,
    Grid,
    Paper,
    Button,
    InputLabel,
    IconButton,
    FormControl,
    OutlinedInput,
    InputAdornment
} from '@mui/material';
//Material UI icon components
import {
    Visibility,
    VisibilityOff
} from '@mui/icons-material';
//Firebase Auth function
import { useAuth } from '../firebase/AuthContext';
//Importing CSS to Material UI Components
import style from '../styles/styles';

function LoginForm() {
    //Assigning style to variable css
    const css  = style();
    //Login page picture
    const png = require('./img/bjj-gym.jpeg');
    //Extracting login function from Firebase Auth
    const { login } = useAuth();
    //Allows forced endpoint switching
    const navigateTo = useNavigate();
    //State to track user form content
    const [userData, setUserData] = React.useState({
        email: '',
        password: '',
        error: '',
        isLoading: false
    });
    //Updates userData
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }
    //Submits form
    async function handleSubmit(event) {
        event.preventDefault();
        //Attempts to login and navigates to homepage if successful
        try{
            setUserData({ ...userData, error: '', isLoading: true });
            await login(userData.email, userData.password);
            navigateTo('/');
        } catch {
            return setUserData({ ...userData, error: 'Unable To Log In' });
        }
    }
    //State for showing password
    const [showPassword, setShowPassword] = React.useState(false);
    //Updates showPassword
    const handleClickShowPassword = () => setShowPassword((prev) => !prev);
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