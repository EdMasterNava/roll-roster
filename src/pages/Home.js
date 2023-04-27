import * as React from 'react';
//Components used in Page
import Navbar from './modules/components/Navbar';
import HomeHero from './modules/components/HomeHero';
import HomeSubHero from './modules/components/HomeSubHero';
//Applies Material UI Theme
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