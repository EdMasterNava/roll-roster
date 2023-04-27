import * as React from 'react';

import Typography from './Typography';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';

import style from '../styles/styles';

function Row(props) {
    const css  = style();
    const row = props.row;
    const handleActiveId = props.handleActiveId;
    const open = props.activeId === row["event_id"];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const startMonth = months[new Date(row["event_start_date"]).getMonth()];
    const startDate = new Date(row["event_start_date"]).getDate();
    const endMonth = months[new Date(row["event_end_date"]).getMonth()];
    const endDate = new Date(row["event_end_date"]).getDate();
    return (
        <>
            <TableRow component="button" onClick={handleActiveId} id={row["event_id"]}className="row" sx={{...css.rowButton}}>
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
                    <TableCell sx={{...css.middleCell}}>
                        <Typography variant="subtitle1" >
                            {row["event_name"]}
                        </Typography>
                        <Typography variant="body1" >
                            {row["event_venue"]}
                        </Typography>
                        <Typography variant="body1" sx={{display: 'flex'}} >
                            Hosted by <Typography variant="body1" sx={{textTransform: 'uppercase', pl: .5}}>{row["event_host"]}</Typography>
                        </Typography>
                    </TableCell>
                    <TableCell sx={{...css.endCell}}>
                        <Box>
                            {open ? <ArrowDropUpRoundedIcon sx={{}}/> : <ArrowDropDownRoundedIcon sx={{}}/>}
                        </Box>
                    </TableCell>
            </TableRow>
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