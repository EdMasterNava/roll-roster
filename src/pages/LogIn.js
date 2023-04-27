import * as React from 'react';
//Components used in Page
import Navbar from './modules/components/Navbar';
import LoginForm from './modules/components/LoginForm';
//Applies Material UI Theme
import withRoot from './modules/styles/withRoot';

function LogIn() {
    return (
        <>
            <Navbar />
            <LoginForm />
        </>
    );
}

export default withRoot(LogIn);