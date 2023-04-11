import * as React from 'react';

import Typography from '../components/Typography';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';

import Row from '../components/Row'

function EventTable(props) {
    const events = props.events;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                    'August', 'September', 'October', 'November', 'December'];
    const eventsByMonth = events.reduce((acc, event) => {
        const month = new Date(event["event_start_date"]).getMonth();
        if (!acc[month]) {
          acc[month] = [];
        }
        acc[month].push(event);
        return acc;
    }, {});
    const sortedMonthsWithEvents = Object.keys(eventsByMonth).map(monthInt => parseInt(monthInt)).sort((a, b) => a - b);

    const [activeId, setActiveId] = React.useState(-1);
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