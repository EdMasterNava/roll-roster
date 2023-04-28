import * as React from 'react';
//Custom components
import Row from './Row'
import Typography from './Typography';
//Material UI components
import { 
    Box,
    Paper,
    Table,
    TableRow,
    TableBody,
    TableCell,
    TableHead,
    TableContainer 
} from '@mui/material';

function EventTable(props) {
    //Fetching events from props and asigning to variable events
    const events = props.events;
    //Defining months array
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                    'August', 'September', 'October', 'November', 'December'];
    //Creates object of months from existing events assigning an array of events to respective month
    const eventsByMonth = events.reduce((acc, event) => {
        const month = new Date(event["event_start_date"]).getMonth();
        if (!acc[month]) {
          acc[month] = [];
        }
        acc[month].push(event);
        return acc;
    }, {});
    //Sorts existing months to always be in correct month order
    const sortedMonthsWithEvents = Object.keys(eventsByMonth)
                                         .map(monthInt => parseInt(monthInt))
                                         .sort((a, b) => a - b);
    //Sort events within existing month
    const sortEventsWithinMonth = () => {
        for(let i = 0; i < sortedMonthsWithEvents.length; i++) {
            eventsByMonth[sortedMonthsWithEvents[i]] = eventsByMonth[sortedMonthsWithEvents[i]].sort((a,b) => {
                return new Date(a['event_start_date']).getTime() - new Date(b['event_start_date']).getTime();
            })
        }
    }
    sortEventsWithinMonth();
    //State to track which drawer is open
    const [activeId, setActiveId] = React.useState(-1);
    //Updates activeId 
    const handleActiveId = (event) => {
        const id = parseInt(event.currentTarget.id);
        if(id === activeId){
            setActiveId(-1);
        }else {
            setActiveId(id);
        }
    }
    return (
        <>
            {sortedMonthsWithEvents.length !== 0 ?
                <TableContainer component={Paper}>
                    <Table>
                        {sortedMonthsWithEvents.map((month) => (
                            <>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <Typography variant="h6">
                                                {months[month]}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {eventsByMonth[month].map(event => {
                                        return <Row key={event["event_id"]} 
                                                    row={event}
                                                    handleActiveId={handleActiveId}
                                                    activeId={activeId}
                                                /> 
                                    })}
                                </TableBody> 
                            </>   
                        ))}
                    </Table>
                </TableContainer> :
                <Box sx={{mx: 20}}>
                    <Typography variant="h5" align="center">
                        No Events Found
                    </Typography>
                </Box> 
            }
        </>
    )
}

export default EventTable;