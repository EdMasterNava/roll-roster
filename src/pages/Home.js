import * as React from 'react';

import Navbar from './modules/views/Navbar';
import HomeHero from './modules/views/HomeHero';
import HomeSubHero from './modules/views/HomeSubHero';

import withRoot from './modules/styles/withRoot';


function Home() {
    return (
        <>
            <Navbar />
            <HomeHero />
            <HomeSubHero />
        </>
    );
}

export default withRoot(Home);