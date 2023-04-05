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
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(prev => !prev);
    }

    return (
        <>
            <TableRow component='button' onClick={handleClick} className='row' sx={{...css.rowButton}}>
                    <TableCell sx={{...css.startCell}}>
                        <Box sx={{bgcolor: 'darkcyan', height: 80, width: 90}}>
                            Date
                        </Box>
                    </TableCell>
                    <TableCell sx={{...css.middleCell}}>
                        <Typography variant="subtitle1" color="white">
                            {row["event_name"]}
                        </Typography>
                        <Typography variant="body1" color="white">
                            {row["event_venue"]}
                        </Typography>
                        {open ? 
                            <Typography variant="body1" color="white">
                                Hosted by {row["event_host"]}
                            </Typography> : <></>}
                    </TableCell>
                    <TableCell sx={{...css.endCell}}>
                        <Box>
                            {open ? <ArrowDropUpRoundedIcon sx={{color: 'white'}}/> : <ArrowDropDownRoundedIcon sx={{color: 'white'}}/>}
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