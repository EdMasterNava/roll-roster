import * as React from 'react';
//Components used in Page
import Navbar from './modules/components/Navbar';
import JoinForm from './modules/components/JoinForm';
//Applies Material UI Theme
import withRoot from './modules/styles/withRoot';

function Join() {
    return (
        <>
            <Navbar />
            <JoinForm />
        </>
    );
}

export default withRoot(Join);