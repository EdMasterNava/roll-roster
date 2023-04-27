import * as React from 'react';

import Toolbar from './modules/components/Toolbar';

import Box from '@mui/material/Box';

import Navbar from './modules/views/Navbar';
import Search from './modules/views/Search';
import EventTable from './modules/views/EventTable';

import withRoot from './modules/styles/withRoot';

import { matchSorter } from 'match-sorter';

// import jjwlJSON from './modules/json/JJWL';
import results from './modules/json/all_result_events.json'

function Events() {
    const completeEventList = results;
    const [events, setEvents] = React.useState(completeEventList);
    const [searchInput, setSearchInput] = React.useState('');
    React.useEffect(() => {
        const searchKey = {keys: ["event_name", "event_venue", "event_host"]};
        if(searchInput === ''){
            setEvents(completeEventList);
        }else{
            setEvents(matchSorter(completeEventList, searchInput, searchKey))
        }
    }, [searchInput, completeEventList]); 
    const handleSearch = (search) => {
        setSearchInput(search);
    }
    return (
        <>
            <Navbar />
            <Box sx={{py: 2, px: 1, bgcolor: ''}}>
                <Toolbar />
                <Box sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                    <Box>
                        <Search handleSearch={handleSearch}/>
                        <EventTable events={events}/>
                    </Box>
                </Box>
            </Box>
            
        </>
    )
}

export default withRoot(Events);