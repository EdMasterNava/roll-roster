import * as React from 'react';

import Navbar from './modules/views/Navbar';
import EventTable from './modules/views/EventTable';

import withRoot from './modules/styles/withRoot';

function Events() {
    return (
        <>
            <Navbar />
            {/* Search */}
            {/* Rendered List */}
            <EventTable />
        </>
    )
}

export default withRoot(Events);