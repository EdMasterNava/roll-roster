import * as React from 'react';
import Navbar from './modules/views/Navbar';
import withRoot from './modules/styles/withRoot';


function Home() {
    return (
        <>
            <Navbar />
        </>
    );
}

export default withRoot(Home);