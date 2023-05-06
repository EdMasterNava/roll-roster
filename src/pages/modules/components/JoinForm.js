import * as React from 'react';
//Allows for switching between Page endpoints
import { Link, useNavigate } from 'react-router-dom';
//Custom components
import Typography from '../components/Typography';
import PasswordHelperText from '../components/PasswordHelperText';
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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
//Firebase Auth function
import { useAuth } from '../firebase/AuthContext';
//Importing CSS to Material UI Components
import style from '../styles/styles';

function JoinForm() {
    //Assigning style to variable css
    const css  = style();
    //Join page picture
    const png = require('./img/bjj-throw-no-bg2.png');
    //Extracting join function from Firebase Auth
    const { join } = useAuth();
    //Allows forced endpoint switching
    const navigateTo = useNavigate();
    //State to track user form content
    const [userData, setUserData] = React.useState({
        email: '',
        password: '',
        comfimPassword: '',
        error: '',
        isLoading: false
    });
    //Updates userData
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }
    //Submits form
    const handleSubmit = async (event) => {
        event.preventDefault();
        //Checks if password matches comfirms password 
        if(userData.password !== userData.comfimPassword){
            return setUserData({ ...userData, error: 'Passwords Do Not Match' });
        }
        //Checks if password is at least 8 characters 
        if(userData.password.length < 7){
            return setUserData({ ...userData, error: 'Password Must Be at Least 8 Characters' });
        }
        //Attempts to create account and navigates to homepage if successful
        try {
            setUserData({ ...userData, error: '', isLoading: true });
            await join(userData.email, userData.password);
            navigateTo('/')
        } catch {
            return setUserData({ ...userData, error: 'Failed to Create an Account' });
        }
        setUserData({ ...userData, isLoading: false });
    };
    //State for showing password
    const [showPassword, setShowPassword] = React.useState(false);
    //Updates showPassword
    const handleClickShowPassword = () => setShowPassword((prev) => !prev);
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