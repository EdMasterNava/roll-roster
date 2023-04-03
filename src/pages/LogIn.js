import * as React from 'react';

import Navbar from './modules/views/Navbar';
import LoginForm from './modules/views/LoginForm';

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