import * as React from 'react';

import Navbar from './modules/views/Navbar';
import EventListItem from './modules/views/EventListItem';

import withRoot from './modules/styles/withRoot';

function Events() {
    return (
        <>
            <Navbar />
            {/* Search */}
            {/* Rendered List */}
            <EventListItem />
        </>
    )
}

export default withRoot(Events);