import * as React from 'react';

import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

function Search(props) {
    const handleSearch = props.handleSearch;
    const [search, setSearch] = React.useState('');
    const handleClear = () => {
        setSearch('');
    }
    React.useEffect(() => {handleSearch(search)}, [search]);

    return (
        <>
            <Paper component="form" sx={{bgcolor: 'white', mb: 2}}>
                <FormControl fullWidth variant="filled">
                    <InputLabel>Search</InputLabel>
                    <FilledInput    onChange={(e)=>setSearch(e.target.value)}
                                    value={search}
                                    endAdornment={ 
                                        search === '' ?
                                        <SearchIcon/> :
                                        <IconButton onClick={handleClear}>
                                            <CloseIcon/>
                                        </IconButton> 
                                    }/>
                </FormControl>
            </Paper>
        </>
    )
}

export default Search;