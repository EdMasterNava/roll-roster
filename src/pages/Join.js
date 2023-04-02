import * as React from 'react';

import Navbar from './modules/views/Navbar';
import JoinForm from './modules/views/JoinForm';

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