import * as React from 'react';
import { Link } from 'react-router-dom';

import Toolbar from '../components/Toolbar';
import Typography from '../components/Typography';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import Table from '@mui/material/Table';
import Collapse from '@mui/material/Collapse';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import Row from '../components/Row'

import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';

import jjwlJSON from '../json/JJWL';
import style from '../styles/styles';

function EventTable() {
    const css  = style();
    const rows = jjwlJSON;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                    'August', 'September', 'October', 'November', 'December'];
    return (
        <>
            <Box sx={{bgcolor: 'darkslategray', minHeight: '100vh', px: 1}}>
                <Box sx={{bgcolor: 'black', minHeight: '100vh'}}>
                    <Toolbar/>
                    <TableContainer>
                        <Table>
                            {months.map((month, index) => (
                                <>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6" color="white">
                                                    {month}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.jjwlJSON.map((row) => {
                                            const startMonth = new Date(row["event_start_date"]).getMonth();
                                            if(index === startMonth){
                                                return <Row key={row["event_name"]} row={row} />
                                            } 
                                        })}
                                    </TableBody> 
                                </>   
                            ))}
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </>
    )
}

export default EventTable;