import * as React from 'react';
import Navbar from './modules/views/Navbar';
import HomeHero from './modules/views/HomeHero';
import withRoot from './modules/styles/withRoot';


function Home() {
    const passingProps = {
        heroImg: require('./modules/views/img/jiujitsu.avif')
    }
    return (
        <>
            <Navbar />
            <HomeHero heroImg={passingProps.heroImg}/>
        </>
    );
}

export default withRoot(Home);