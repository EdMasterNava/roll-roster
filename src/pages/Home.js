import * as React from 'react';

import Navbar from './modules/views/Navbar';
import HomeHero from './modules/views/HomeHero';
import HomeSubHero from './modules/views/HomeSubHero';

import withRoot from './modules/styles/withRoot';


function Home() {
    const heroImg = require('./modules/views/img/jiujitsu.avif')
    return (
        <>
            <Navbar />
            <HomeHero heroImg={heroImg}/>
            <HomeSubHero />
        </>
    );
}

export default withRoot(Home);