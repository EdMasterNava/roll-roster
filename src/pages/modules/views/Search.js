import * as React from 'react';

import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';

import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

function Search(props) {
    const [search, setSearch] = React.useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSearch(search);
    }
    React.useEffect(() => {props.handleSearch(search)}, [search]);

    return (
        <>
            <Paper component="form" onSubmit={handleSubmit} sx={{bgcolor: 'white', mb: 2}}>
                <FormControl fullWidth variant="filled">
                    <InputLabel>Search</InputLabel>
                    <FilledInput    onChange={(e)=>setSearch(e.target.value)}
                                    endAdornment={
                                        <IconButton type='submit'>
                                            <SearchIcon/>
                                        </IconButton>
                                    }/>
                </FormControl>
            </Paper>
        </>
    )
}

export default Search;