import * as React from 'react';
//Components used in Page
import Box from '@mui/material/Box';
import Navbar from './modules/components/Navbar';
import Search from './modules/components/Search';
import Toolbar from './modules/components/Toolbar';
import EventTable from './modules/components/EventTable';
//Applies Material UI Theme
import withRoot from './modules/styles/withRoot';
//Importing CSS to Material UI Components 
import style from './modules/styles/styles';
//Search Library
import { matchSorter } from 'match-sorter';
//Importing events JSON -- JSON must be located within the src folder
import results from './modules/json/all_result_events.json'

function Events() {
    //Assigning style to variable css
    const css = style();
    //Assigning results JSON to variable completeEventList
    const completeEventList = results;
    //State to track what events are being shown
    const [events, setEvents] = React.useState(completeEventList);
    //State to track what is being searched 
    const [searchInput, setSearchInput] = React.useState('');
    //Effect to refresh events anytime a search is made
    React.useEffect(() => {
        //searchKey defines what is returned when a search happens
        const searchKey = {keys: ["event_name", "event_venue", "event_host"]};
        if(searchInput === ''){
            setEvents(completeEventList);
        }else{
            setEvents(matchSorter(completeEventList, searchInput, searchKey))
        }
    }, [searchInput, completeEventList]); 
    //handleSearch updates searchInput with user content
    const handleSearch = (search) => {
        setSearchInput(search);
    }
    return (
        <>
            <Navbar />
            <Box sx={{...css.eventPageContainer}}>
                <Toolbar />
                <Box sx={{...css.eventListContainer}}>
                    <Box>
                        {/* Passing props to respective components */}
                        <Search handleSearch={handleSearch}/>
                        <EventTable events={events}/>
                    </Box>
                </Box>
            </Box>
            
        </>
    )
}

export default withRoot(Events);