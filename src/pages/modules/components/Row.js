import * as React from 'react';
//Custom components
import Typography from './Typography';
//Material UI components
import {
    Box,
    Button,
    Collapse,
    TableRow,
    TableCell
} from '@mui/material';
//Material UI icon components
import {
    ArrowDropDownRounded,
    ArrowDropUpRounded
} from '@mui/icons-material';
//Importing CSS to Material UI Components
import style from '../styles/styles';

function Row(props) {
    //Assigning style to variable css
    const css  = style();
    //Fetching single event from props and asigning to variable row
    const row = props.row;
    //Fetching handleActiveId from props and asigning to variable handleActiveId
    const handleActiveId = props.handleActiveId;
    //Check if current event id matches EventTable's activeId
    const open = props.activeId === row["event_id"];
    //Shorthand months array
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    //Transforming event's start and end date into "Jan 1" format 
    const startMonth = months[new Date(row["event_start_date"]).getMonth()];
    const startDate = new Date(row["event_start_date"]).getDate();
    const endMonth = months[new Date(row["event_end_date"]).getMonth()];
    const endDate = new Date(row["event_end_date"]).getDate();
    return (
        <>
            <TableRow component="button" onClick={handleActiveId} id={row["event_id"]}className="row" sx={{...css.rowButton}}>
                {/* First section of row containing date */}
                <TableCell sx={{...css.startCell}}>
                    <Box sx={{...css.dateContainer, bgcolor: 'darkcyan'}}>
                        <Typography variant="h5">
                            {`${startMonth} ${startDate}`}
                        </Typography>
                        {row["event_start_date"] !== row["event_end_date"] ? 
                            <Typography variant="h5">
                                {`${endMonth} ${endDate}`}
                            </Typography> : <></>
                        }
                    </Box>
                </TableCell>
                {/* Middle section of row containing event name, venue, and host */}
                <TableCell sx={{...css.middleCell}}>
                    <Typography variant="subtitle1" >
                        {row["event_name"]}
                    </Typography>
                    <Typography variant="body1" >
                        {row["event_venue"]}
                    </Typography>
                    <Typography variant="body1" sx={{display: 'flex'}} >
                        Hosted by {row["event_host"]}
                    </Typography>
                </TableCell>
                {/* Last section of row containing triangle arrow icon */}
                <TableCell sx={{...css.endCell}}>
                    <Box>
                        {open ? <ArrowDropUpRounded /> : <ArrowDropDownRounded />}
                    </Box>
                </TableCell>
            </TableRow>
            {/* Dropdown section containing more info on event such as link to source and directions */}
            <TableRow>
                <TableCell style={open ? {...css.drawerCell} : {...css.drawerCell, borderBottom: 'none'}}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{py: 2}}>
                            <Button sx={{...css.drawerButton}}>
                                <Typography color="white">
                                    Register
                                </Typography>
                            </Button>
                            <Button sx={{...css.drawerButton}}>
                                <Typography color="white">
                                    Directions
                                </Typography>
                            </Button>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

export default Row;